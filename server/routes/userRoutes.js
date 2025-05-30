const express = require('express');
const router = express.Router();

const { getUser } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getUser);

module.exports = router;
// This code defines a route for getting user information.