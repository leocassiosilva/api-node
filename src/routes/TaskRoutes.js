const express = require('express');

const router = express.Router();

const TaskContoller = require('../controller/TaskContoller');

router.post('/', TaskContoller.create);


module.exports = router;