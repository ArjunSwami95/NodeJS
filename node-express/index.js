const express=require('express');
const http=require('http');
const hostname='localhost';
const port=3000;
const morgan=require('morgan');
const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+ '/public'));
app.use((req,res,next)=>
       {

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>THis is express</h1></body></html>');
    
    
});

const server=http.createServer(app);

server.listen(port,hostname,()=>
             {
    console.log(`Server is listening at ${hostname}:${port}`);
    
});