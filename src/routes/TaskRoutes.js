const express = require('express');

const router = express.Router();

const TaskContoller = require('../controller/TaskContoller');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation, TaskContoller.create);
router.put('/:id', TaskValidation, TaskContoller.update);
router.get('/filter/all', MacaddressValidation, TaskContoller.all);
router.get('/:id', TaskContoller.show);
router.delete('/:id', TaskContoller.delete);


module.exports = router;