//Given this api https://jsonplaceholder.typicode.com/users endpoint, 
//make an http request to print(console.log) only the name of the users.
const http = require('http')


    http.get('http://jsonplaceholder.typicode.com/users',(res)=>{
        let output = ''
        res.on('data',(seth)=>{
            output +=seth
        
        }) 

        res.on('end',()=>{
            let list = JSON.parse(output)
        
        for(user of list){
            console.log(user.name)
        }
        })
    
            
})