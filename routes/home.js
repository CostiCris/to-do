const express = require('express');
const path = require('path');
const Router = express.Router();

let list = [];

Router.get('/', (req, res, next) => {
    res.render('../views/home', {
        taskList: list,
        clearList: clearList
    });
});

Router.post('/input', (req, res, next) => {
    const input = req.body.input;
    list.push(input);
    console.log(list);
    res.redirect('/');
});

const clearList = (req, res, next) => {
    list = [];
    res.redirect('/');
}

module.exports = Router;