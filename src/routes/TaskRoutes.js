const express = require('express');

const router = express.Router();

const TaskContoller = require('../controller/TaskContoller');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/', TaskValidation, TaskContoller.create);
router.put('/:id', TaskContoller.update);


module.exports = router;