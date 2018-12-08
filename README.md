# NG6 BASE

This project has the tooling needed to start building a NG6 system from scratch.


# Generalities

- you should use a recent npm version to avoid npm performance pain. Check your version and install latest or at least version 5 
  
  ``npm --version``

- If you want to use the CSS styles used by the Customer Journey run 
  
  `` npm i -P fif-onboarding-scss``

- If you want to use any library from FIF NPM private repo, you need to include it on your registry:

  ``npm set registry https://npm-registry.fif.tech``
  
  ``npm adduser --registry https://npm-registry.fif.tech``

- If you want to check your local NPM registry, check it with:

  ``npm config list``

*NOTE*: In case of networking issues you have the option to create a symbolic link and use a local folder as the source of the dependency

1. Go to the root foolder of your local fif-onboarding-scss package and run `npm link `

2. Go to the root folder of your target dependant project, f.i workspace/myBaseProject 

 `npm link fif-onboarding-scss`

To undo the effect use npm unlink.


## VS code

In case you use VSCode editor you can add some useful extension like:

.- Angular 6 Snippets
.- EditorConfig for VS Code
.- Tslint
.- Eslint
.- Prettier

## NG commands

All ng schematics commands expects a path/to/name relative to the folder where command is been issued.

So for instance if we are at `src/app` folder, we could run 

`ng g module features/recipes/charquican`

in order to generate a module named _charquican_ inside folder _recipes_ 


Another typical commands includes: 
`
ng g module <feature-module-name> --routing 
`

To generate a component
`
ng g c <feature-module-name>/<component-name>
`

To generate a service
`
ng g s singletonExample
`

## Project's tooling and definitions

### Folders

There are  3 folders  defined to handle the code.

1. **Core**: all the services that will be used  by many modules. there are normally loaded in the app.module at the beginning

1. **Shared**:  has all the components, pipes, etc  that will be used by other components

1. **Modules**: has all the modules of the system

As an example:

```
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] services
           |-- [+] handlers
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
```

*Recommendation: Inside of each module, there will be components, services and handlers.

### the use of paths

Instead of having long imports like:

```javascript
import { CoreModule } from "../../../../core/core.module";
```

we can write a cleaner version as 

```javascript
import { CoreModule } from "@core/core.module";
```

This can be accomplished by adding the path config at `tsconfig.json`:

```
"paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@modules/*": ["src/app/modules/*"],
      "@environment/*": ["src/environments/*"],
}
```

Another useful hint is the use of webpack shortcuts by the use of tilde (~) to search inside node_modules folder.

For example we can replace 

``@import '../../node_modules/bootstrap/scss/utilities/_flex.scss'``

by 

``@import '~bootstrap/scss/utilities/_flex.scss'``



### Lazy loading

In order to reduce the time it takes to load the initial view of the app you should consider using lazy loading of features modules. To do this all the urls should be declared in app-routing.module.ts and loads the module like:

```javascript 
    path: "m1",
    loadChildren: "./modules/module-1/module-1.module#Module1Module",
    pathMatch: "full",
```

### Testing

To unit test are run by Jest, the commands are:

`npm run test`

`npm run test:watch`

`npm run test:coverage`

`npm run test:ci`

`npm run test:bail`

### tslint

Tslint is configured with sonar extension,  the commands are:

`npm run lint`

`npm run lint:fix` // to fix some errors that can be fixed

### prettier

Prettier is used to fix some code styling  problems

`npm run format`  // this command wil fix the problem if it can be fixed

* note:  Some rules can cause some conflicts with tslint rules

### Git hooks

Notice `package.json` is declaring some `npm scripts` that [Husky](https://github.com/typicode/husky) is taking care of 

to allow  the hooks  only for one branch,  you can use git-branch-is  to check it. Example:
`
"precommit": "if  git-branch-is -q master; then  yarn format && yarn lint ; else echo \"no scripts for this branch\"; fi",
`

there is  a config to handle the commit message. the message has to have more than 50 letters and less than 200

More info [@commitlint](https://github.com/marionebl/commitlint)

### CSS loading

All the external styles should be in styles.scss example

``` csss
@import "./assets/scss/main.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
```

*Note: not put css in the index.html  

### Global scripts

As Angular CLI is building our application, all the scrips added to the `angular.json` file are automatically added to the `index.html`. Once you import a library via the `scripts` array, you should not import it via a `import` statement (e.g. `import * as $ from 'jquery';`). 

If you do that you'll end up with two different copies of the library: one imported as a global library, and one imported as a module.


### Sass support

For a brand new angular app use the CLI option:
`
ng new my-sassy-app --style=scss
`

For an existing angular app with the default .css style files:
`
 ng set defaults.styleExt scss
`

### Reverse proxy

With the new NG 6 you can add a reverse proxy to handle the endpoints that may be used by your app and avoid  having problems with CORS.

A file with the proxy configuration must be created. For instance:

```javascript
{
  "/api/resource/one/service/*": {
    "target": "http://localhost:5000",
    "secure": false,
    "logLevel": "debug",
    "pathRewrite": {
      "^/api/resource/one/service": "/resource/one/service"
    }
  }
}
```

This file has to be set on angular.json

```javascript
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "ng-base:build",
    "proxyConfig": "proxy.conf.json"
  }
....  
```

After doing this, every time the applica
tion calls the endpoint /api/resource/one/service/, it will be calling http://localhost:5000/resource/one/service


### Stubbing services and data

To stub ther services that could be used by the app, there are defined  a couple of libraries:

.- [json-server](https://www.npmjs.com/package/json-server)

.- [chance](https://www.npmjs.com/chance)

.- [faker](https://www.npmjs.com/package/faker)

.- [hotel](https://www.npmjs.com/package/hotel)

**Json-servever** to  serve the data, it can serve the data in different ways and because it uses express under the hood,  middlewares and routes can be added like a normal node-express application.

**chance and faker**   to create  random date to be used by the app.

**hotel**  can keep registered the stubbed services created and then can manage them with a web interface, so you can active and desactive services at will without using commands.

*Note*: check the folder stubs and  the command in package.json the commands stub:*  hotel:*

1.-  Run 

`
hotel:pre
`
To record  the services (this command has to be run only once)

2.- Run 

`
hotel:start
`
To start the server


### Build for production

In order to build the app, you can use:
`
ng:build
`
which build the app in a normal way, by using the options defined in the angular.json

On the other hand, you can use:
`
ngw:build
`
build the app by  using extra webpack plugins. In this case use purify-css to shrink the css as much as possible

If you want to see the build running in a server  you can run the command:
`
serve:dist
`
Then you can go to http://localhost:8080

# EXTRAS and Wiki #

This repository has a [wiki](https://bitbucket.org/falabellafif/fif-common-example-ng-6/wiki/Home) which has useful links about  different Angular topics. Besides This repository has other branches with code that can be handy as well.

Description | &nbsp; &nbsp; &nbsp; &nbsp; Source &nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; Wiki &nbsp; &nbsp; &nbsp; &nbsp; 
--- | :---: | :---:
app-shell and Skeleton screen demo |[repo](https://bitbucket.org/falabellafif/fif-common-example-ng-6/src/app-shell/) | [wiki](https://bitbucket.org/falabellafif/fif-common-example-ng-6/wiki/App-shell%20and%20skeleton%20screen)
Progressive Web App | [repo](https://bitbucket.org/falabellafif/fif-common-example-ng-6/src/pwa/) | [wiki](https://bitbucket.org/falabellafif/fif-common-example-ng-6/wiki/PWA) | todo
External web component | todo | todo


# TODO #

* Add library to integration tests

* Add support for hrm (https://webpack.js.org/concepts/hot-module-replacement/)

* Use  angular-builders  insted of ngw to use webpack plugins

* Fix problem  between typescript path and angular app-shell

* Add library for documentation and boundle

* Usee https://github.com/conventional-changelog/standard-version
