const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require ('ejs');

app.set('view engine', 'ejs');

mongooese.connect('mongodb+srv://tester123:tester12345@cluster0.mzsfais.mongodb.net/test');

app.get('/', (req, re) => {
    res.send(_dirname + '/HTMLS/LoginPage/leaderboard.html')
})
app.listen(4000,function() {
    console.log('server is running');
})
