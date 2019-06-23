const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const UserController = require('../controllers/user');
const AuthMiddleware = require('../middlewares/auth');

const urlEncodedParser = bodyParser.urlencoded({
  extended: true,
});

// user routes
router.get('/user/list', urlEncodedParser, AuthMiddleware.isAuthenticated, (request, response) => UserController.get(request, response));
router.get('/user/:id', urlEncodedParser, AuthMiddleware.isAuthenticated, (request, response) => UserController.get(request, response));
router.post('/user/create', urlEncodedParser, (request, response) => UserController.post(request, response));
router.post('/user/login', urlEncodedParser, (request, response) => UserController.login(request, response));
router.put('/user/update/:id', urlEncodedParser, (request, response) => UserController.put(request, response));

module.exports = router;
