const fastify = require('fastify')({ logger: true })
const path = require('path');
const fs = require('fs');
fastify.register(require('fastify-formbody'))
const replace = require("buffer-replace");

function buildTemplate(path, args) {
  let header = fs.readFileSync('./public/templates/partials/header.html');
  let footer = fs.readFileSync('./public/templates/partials/footer.html');

  let template = fs.readFileSync(path);

  for (var x = 0; x < args.length; x++) {
    template = replace(template, '{{ ' + args[x].key + ' }}', args[x].value)
  }

  template = header + template + footer;

  return template;
}

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
})

fastify.get('/', function (req, reply) {
  reply.type("text/html").send(buildTemplate('./public/templates/index.html', []));
})

fastify.get('/blog_admin', function (req, reply) {
  reply.type("text/html").send(buildTemplate('./public/templates/blog_admin.html', []));
})

fastify.post('/test', async (req, reply) => {
  var data = "";
  data = data + req.body.title + "|" + req.body.filename + "|" + req.body.content + "|" + 
    req.body.image;
  fs.writeFileSync('./data/' + req.body.filename + '.txt', data);
})

fastify.get('/blog', async (req, reply) => {
  var data = fs.readFileSync('./data/' + req.query.title + '.txt');
  var dataElements = data.toString().split('|')
  reply.type("text/html").send(buildTemplate('./public/templates/read.html', [
    { key: 'title', value: dataElements[0] },
    { key: 'content', value: dataElements[2] },
    { key: 'image', value: dataElements[3]}
  ]))
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()