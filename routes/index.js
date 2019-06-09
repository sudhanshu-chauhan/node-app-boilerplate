const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const UserController = require('../controllers/user');
const AuthMiddleware = require('../middlewares/auth');

router.use(bodyParser.urlencoded({
  extended: true,
}));
router.use(bodyParser.json());

// user routes
router.get('/user/list', AuthMiddleware.isAuthenticated, (request, response) => UserController.get(request, response));
router.get('/user/:id', AuthMiddleware.isAuthenticated, (request, response) => UserController.get(request, response));
router.post('/user/create', (request, response) => UserController.post(request, response));
router.post('/user/login', (request, response) => UserController.login(request, response));

module.exports = router;
