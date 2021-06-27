//Using NodeJs, Create a web server that renders an html page with your name in a tag.

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer ((req,res) =>{
        res.statusCode = 200;
        fs.readFile ('./index.html', 'utf-8',(err,html) =>{

        if(err) console.log(err);
        res.setHeader('Content-type','html');
        res.end(html);


    });

});
    server.listen(port, hostname, () =>{
        console.log(`Server running at http://${hostname}:${port}`)
    });
