const jsonServer = require('json-server');
const Chance = require('chance');
const server = jsonServer.create()
// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/resource/two/service', (req, res) => {
  console.info(req.headers);
   res.setHeader('new-header','the value');
   res.setHeader('new-header-val',new Date().toString());
   console.info(req.body);
   const chance = new Chance();
  setTimeout(()=> {
    res.jsonp({
      person: {
        name: chance.name(),
        gender: chance.gender(),
        age: chance.age(),
        birthday: chance.birthday({ string: true })
      }
    });
  }, 5000)

});

// Use default router
//server.use(router)
server.listen(process.env.SERVICE_PORT, () => {
  console.log('JSON Server is running port ', process.env.SERVICE_PORT);
})
