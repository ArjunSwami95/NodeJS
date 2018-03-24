const http=require('http');
const port=3000;
const hostname="localhost";
const express=require('express');
const app=express();
app.use((req,res,next)=>
       {
    res.setHeader('Constant-Type','text/html');
    res.end('<html><body> this is an express page</body></html>')
});
const server=http.createServer(app);
server.listen(port,hostname,()=>
             {
    console.log(`Server is running at http://${hostname}:${port}`);
});