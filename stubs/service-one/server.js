const Chance = require('chance');
const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/resource/one/service', (req, res) => {
   console.info(req.headers);
   res.setHeader('new-header','the value');
   res.setHeader('new-header-val',new Date().toString());
   console.info(req.body);
   const chance = new Chance();
    setTimeout(function(){
      if(req.body.phone === '123456789') {
        res.jsonp({code: 'ok', date: new Date().toString(), name: chance.name()});
      } else {
        res.jsonp({code: 'error'});
      }

     }, 1000);

});

// Use default router
//server.use(router)
server.listen(process.env.SERVICE_PORT, () => {
  console.log('JSON Server is running port ', process.env.SERVICE_PORT);
})
