const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const UserController = require('../controllers/user');

router.use(bodyParser.urlencoded({
  extended: true,
}));
router.use(bodyParser.json());

// user routes
router.get('/user/list', (request, response) => UserController.get(request, response));
router.get('/user/:id', (request, response) => UserController.get(request, response));
router.post('/user/create', (request, response) => UserController.post(request, response));

module.exports = router;