const http =require('http')
const server = http.createServer((req,res) =>{
   if(req.url === '/'){
       res.end('Welcome to Home Page')
   }
   if(req.ulr === '/about'){
       res.end('Here is Short History')
   }
   res.end(`
   <h1> Opps!</h1>
   <p> We can't seem to find the page you are looking for </p>
   <a href="/">back home</a>
   `)
   
})
server.listen(5000)