// MEAN vs MERN --> Full Stack Developer
/*
M --> MongoDB        M --> MongoDB
E --> Express        E --> Express
A --> Angular        R --> React
N --> Node           N --> Node
MVC --> Model View Controller
*/

// require module
/*
let connect = require('connect');
let http = require('http');
let app = connect();
Aboutme = (req,res) =>
{
    res.setHeader('Content-Type','text/plain');
    res.end('About Me')
}
Project = (req,res) =>
{
    res.setHeader('Content-Type','text/plain');
    res.end('My Projects')
}
Contactus = (req,res) =>
{
    res.setHeader('Content-Type','text/plain');
    res.end('Contact Me')
}
//app.use('/',Aboutme);
app.use('/about',Aboutme);
app.use('/project',Project);
app.use('/contact',Contactus);
app.listen(3000);
console.log('Server is running on the local host');*/








//Express

const express = require('express')
const app = express()

app.get('/about', (req, res) => {
  res.send('About me')
})
app.get('/project', (req, res) => {
    res.send('My Project')
})
app.get('/contact', (req, res) => {
    res.send('Contact me')
})

app.listen(3000)