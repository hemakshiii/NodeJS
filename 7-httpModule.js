const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url ==='/')
{
    res.end('Welcome to my home page')
}
if(req.url === '/about') {
    res.end('About me page') 
}
res.end(`<h1>Oops!!!</h1>
<p> We cannot find the page you're looking for </p>
<a href="/">back to home</a>`)
})

server.listen(5000)