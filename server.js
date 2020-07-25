const http = require('http');
const url = require('url');
const {parse} =require('querystring')

const server = http.createServer ((req, res)=>{
  const {query, pathname} = url.parse(req.url, true)

  if (pathname === '/' && req.method==="GET" ) {
    res.end(`Hello World, Welcome to WeJapa Internships`)
  }

  else  if (pathname === '/' && req.method ==="POST") {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log(
            parse(body)
        );
        res.end(`Hello ${body.split('=')[1]}, Welcome to WeJapa Internships `);
    });

  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found!</h1>');
  }

})

server.listen(8000,'127.0.0.1', ()=>{
  console.log(`Listening to request on port 8000`);
})
