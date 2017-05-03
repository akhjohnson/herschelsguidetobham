var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

//setup for the contact us page - when someone completes a form

router.post('/', function (req, res, next) { 
        emailSvc.sendEmail(req.body.to, req.body.subject, req.body.content);
});


module.exports = router;