// tslint:disable-next-line
const PurifyCSSPlugin = require('purifycss-webpack');
// tslint:disable-next-line
const path = require('path');
// tslint:disable-next-line
const glob = require('glob');

export default function(config) {
    config.plugins.push(
      new PurifyCSSPlugin({
        // tslint:disable-next-line
        paths: glob.sync(path.join(__dirname, '**/*.html'))
        // tslint:disable-next-line
      })
    );
    return config;
}
