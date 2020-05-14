const express = require('express');
const router = express.Router();
const WebHookController = require('../controllers/WebHookController');

router.post('/deploy', WebHookController.deploy);

module.exports = router;
