const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const UserController = require('../controllers/user');

router.use(bodyParser.urlencoded({
  extended: true,
}));
router.use(bodyParser.json());

// user routes
router.get('/user', (request, response) => UserController.get(request, response));
router.get('/user/:id', (request, response) => UserController.get(request, response));

module.exports = router;
