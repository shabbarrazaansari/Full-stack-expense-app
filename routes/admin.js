const express = require('express');
const control = require('../controller/controling');

const router = express.Router();
router.get('/',control.hello)

router.get('/getusers',control.getuser)
router.post('/postusers',control.postuser)
router.delete('/eraseusers/:id',control.deleteuser)

module.exports = router;