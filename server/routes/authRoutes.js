const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authControllers');
const { registerSchema, loginSchema, validateBody } = require('../middleware/validation');

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;