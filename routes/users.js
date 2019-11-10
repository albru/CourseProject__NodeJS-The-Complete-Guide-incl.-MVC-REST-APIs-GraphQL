const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const usersData = require('./add-user');
console.log(usersData.users)

const router = express.Router();

router.get('/users', (req,res,next) => {
    const userName = usersData.users;
    console.log(userName.length)
    res.render('users', {user: userName, pageTitle: 'Users', path: '/users'})
})

module.exports = router;