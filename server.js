const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

//--------ROUTES

app.get('/', (req, res)=> {
	('<h1>Project Express</h1>')
});

//--------START SERVER

app.listen(PORT, ()=> console.log("server running at localhost:4000"));