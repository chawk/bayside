// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path');

// Declare a route

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/', // optional: default '/'
})

fastify.register(require('point-of-view'), {
  engine: {
    handlebars: require('handlebars')
  }
})

fastify.get('/', function (req, reply) {
    reply.view('./templates/index.html', { data: 'Custom Title for this Joint' })
})

fastify.get('/about', async (request, reply) => {
  return { about: 'Chris Hawkes' }
})

// Run the server!
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