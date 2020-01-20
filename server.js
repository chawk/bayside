const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-formbody'));
const path = require('path');
const fs = require('fs');
const replace = require("buffer-replace");
const http = require('http');
const https = require('https');
const uuid = require('uuid/v4');

function buildTemplate(path, args, headerArgs) {
  let header = fs.readFileSync('./public/templates/partials/header.html');
  
  for (var x = 0; x < headerArgs.length; x++) {
    header = replace(header, '{{ ' + headerArgs[x].key + ' }}', headerArgs[x].value)
  }

  let footer = fs.readFileSync('./public/templates/partials/footer.html');

  let template = fs.readFileSync(path);

  for (var x = 0; x < args.length; x++) {
    template = replace(template, '{{ ' + args[x].key + ' }}', args[x].value)
  }

  template = header + template + footer;

  return template;
}

// function to encode file data to base64 encoded string
function base64_encode(file) {
  var bitmap = Buffer.from(fs.readFileSync(file)).toString('base64');
  fs.writeFileSync('./wtf.txt', bitmap);
  // removeImage();
  return bitmap;
}

function removeImage() {
  fs.unlink('./file.jpg', (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
})

fastify
  .register(require('fastify-nextjs'))
  .after(() => {
    fastify.next('/')
  })

// fastify.get('/', function (req, reply) {
//   reply.type("text/html").send(buildTemplate('./public/templates/index.html', [
//     ], 
//     [
//       { key: 'title', value: 'Home'}
//     ]
//   ));
// })

fastify.get('/blog', async (req, reply) => {
  var data = fs.readFileSync('./data/' + req.query.title + '.txt');
  var dataElements = data.toString().split('|')
  var authorData = fs.readFileSync("./data/authors/" + dataElements[4].replace(/ /g,"_").toLowerCase() + ".txt").toString();
  var author = authorData.split("|");
  reply.type("text/html").send(buildTemplate('./public/templates/read.html', [
    { key: 'title', value: dataElements[0] },
    { key: 'content', value: dataElements[2] },
    { key: 'image', value: dataElements[3] },
    { key: 'author_name', value: author[0] },
    { key: 'author_image', value: author[1] },
    { key: 'author_url', value: author[2] },
    { key: 'date', value: dataElements[5] }
  ],
  [
    { key: 'title', value: dataElements[0] }
  ]))
})

// this code should be removed from production
fastify.get('/blog_admin', function (req, reply) {
  reply.type("text/html").send(buildTemplate('./public/templates/blog_admin.html', [], [
    { key: 'title', value: 'Blog Admin'}
  ]));
})

fastify.get('/edit_blog', function (req, reply) {
  var data = fs.readFileSync('./data/' + req.query.title + '.txt');
  var dataElements = data.toString().split('|')
  var authorData = fs.readFileSync("./data/authors/" + dataElements[4].replace(/ /g,"_").toLowerCase() + ".txt").toString();
  var author = authorData.split("|");
  reply.type("text/html").send(buildTemplate('./public/templates/edit_blog.html', [
    { key: 'title', value: dataElements[0]},
    { key: 'file_name', value: dataElements[1]},
    { key: 'content', value: dataElements[2]},
    { key: 'image', value: dataElements[3]},
    { key: 'author_name', value: author[0]},
    { key: 'tags', value: dataElements[6]},
    { key: 'date', value: dataElements[7]}], 
    [ 
      { key: 'title', value: 'Edit Blog'}
    ]
  ));
});

fastify.post('/create_blog', async (req, reply) => {
  var data = "";
  data = data + req.body.title + "|" + req.body.filename + "|" + req.body.content + "|" + 
    req.body.image + "|" + req.body.author + "|" + new Date().toString() + "|" + req.body.tags;
  fs.writeFileSync('./data/' + req.body.filename + '.txt', data);
  await reply.redirect('/blog?title=' + req.body.filename);
})

fastify.post('/process_image', async (req, reply) => {
  var url = req.body.image;
  if (url != null) {
    url = url.trim();
    if (url.includes('https://')) {
      const uniqueImageName = uuid();
      const file = await fs.createWriteStream("./public/img/blogs/" + uniqueImageName + path.extname(url));
      const request = await https.get(url, async function(response) {
        await response.pipe(file);
        await reply.type("application/json").send({ data: uniqueImageName + path.extname(url) });
      });
    } else {
      const uniqueImageName = uuid();
      const file = await fs.createWriteStream("./public/img/blogs/" + uniqueImageName + path.extname(url));
      const request = await http.get(url, async function(response) {
        await response.pipe(file);
        await reply.type("application/json").send({ data: uniqueImageName + path.extname(url) });
      });
    }  
  }
})
// end removal of production

const start = async () => {
  try {
    await fastify.listen(3001)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()