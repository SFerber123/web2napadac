const express = require('express');
const bodyparser = require('body-parser');
const fs=require('fs');
var app = express();
//Configuring express server
app.use(
    bodyparser.json(),
);
const port = process.env.PORT || 3020;
app.listen(port, () => console.log(`Listening on port ${port}..`));
app.get('/',(req,res)=>{
    
    res.writeHead(200,{
        'Content-Type':'text/html'
        });
    fs.readFile('./index.html',null,function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
        });
    })
