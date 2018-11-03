const express = require('express');
const router = express.Router();

router.get('/sendmail',(req, res, next)=>{
	res.send('check');
});

module.exports = router;