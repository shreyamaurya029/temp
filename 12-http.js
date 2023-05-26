const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our new page')
    }

    if(req.url === '/about'){
        res.end('Here is our shorrt about')
    }

    res.end(`
    <h1>oops!! i want to be at home</h1>
    `)
//res.write('Welcome to our home page'); //req represents incoming request
})


server.listen(3001)