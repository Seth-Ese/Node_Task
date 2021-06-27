//Given this api https://jsonplaceholder.typicode.com/users endpoint, 
//make an http request to print(console.log) only the name of the users.
const http = require('http')
const fetch = require('node-fetch');

const hostname = '127.0.0.1';
const port = 9000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    
    

            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    data.forEach(function(user) {
                      console.log(user.name)
                    });
    
             
            
            });
            res.end()
  })
  server.listen(port,hostname,()=>{
      console.log(`The server is running at ${hostname}:${port}`)
  })
