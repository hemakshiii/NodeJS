const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
         res.end('Home Page')
    }

    if(req.url==='/about')
    {
        for(i=0;i<1000;i++)
        {
            for(j=0;j<1000;j++)
            {
              console.log(`${i} ${j}`)
            }
        }
        res.end("About Page")
    }

    res.end("Error page")
})

server.listen(5000,()=>{
    console.log("Server is running at port 5000");
})