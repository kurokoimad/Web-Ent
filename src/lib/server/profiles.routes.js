const express = require('express');
// const mongoose = require('mongoose'); this line is useless
const { index } = require('../server/profileController');

const router = express.Router(); // Router is a library that decides what web page is presented by a given URL

router.get('/', index);

module.exports = router;
