import fetch from 'isomorphic-unfetch';
import Header from '../components/header';
import Nav from '../components/nav';

function Index({ blogs }) {
  return <div>
            <Header title="test" />
            <Nav />
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                    <div className="primary-item">
                      <a href={"/blog?title=" + blogs[0].filename}>
                        <h2>{blogs[0].title}</h2>
                        <img src={"/public/img/blogs/" + blogs[0].image} alt={blogs[0].title} />
                      </a>
                    </div>
                </div>
                <div className="col-md-7 sub-primary-item">
                  <div className="col-md-6">
                    <a href={"/blog?title=" + blogs[1].filename}>
                      <img src={"/public/img/blogs/" + blogs[1].image} width="100" alt={blogs[1].title}/>
                      <h3>{blogs[1].title}</h3>
                    </a>
                    <a href={"/blog?title=" + blogs[2].filename}>
                      <img src={"/public/img/blogs/" + blogs[2].image} width="100" alt={blogs[2].title}/>
                      <h3>{blogs[2].title}</h3>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href={"/blog?title=" + blogs[3].filename}>
                      <img src={"/public/img/blogs/" + blogs[3].image} width="100" alt={blogs[3].title} />
                      <h3>{blogs[3].title}</h3>
                    </a>
                    <a href={"/blog?title=" + blogs[4].filename}>
                      <img src={"/public/img/blogs/" + blogs[4].image} width="100" alt={blogs[3].title} />
                      <h3>{blogs[4].title}</h3>
                    </a>
                  </div>
              </div>
            </div>
          </div>
      </div>
}

Index.getInitialProps = async ctx => {
  const fs = require('fs');
  let blogs = [];

  let files = fs.readdirSync("./data", { withFileTypes: true });
  const filesNames = files
    .filter(files => !files.isDirectory())
    .map(files => files.name);

  filesNames.forEach(file => {
    let blog = {};
    let data = fs.readFileSync("./data/" + file).toString();
    data = data.split("|");
    blog.title = data[0];
    blog.filename = data[1];
    blog.content = data[2];
    blog.image = data[3];
    blog.author = data[4];
    blog.date = data[5];
    blogs.push(blog);
  });

  // sort by the date of the blog
  blogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  // need at least 5 to support the home page.
  while (blogs.length < 5) { blogs.push({}) }

  return { blogs: blogs }
}

export default Index;