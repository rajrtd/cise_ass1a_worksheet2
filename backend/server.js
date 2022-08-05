const express = require("express");
const articles = require("./dummydata/articles");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

// The below is a way of making a function using the '=>'
// The function made is an argument of server.get()
// req = request, res = response

server.get('/', (req, res) => {
    res.send("API is running")
});

server.get('/api/articles/:id', (req, res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));


