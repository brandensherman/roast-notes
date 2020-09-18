const router = require('express').Router();
const ErrorResponse = require('../utils/errorResponse');
const sendTokenResponse = require('../utils/sendTokenResponse');
const { User } = require('../db');
const { protect, authorize } = require('../middleware/auth');

// Get current logged in user
// GET /api/auth/me
// Private
router.get(
  '/me',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Logout current user / clear cookie
// GET /api/auth/logout
// Private
router.get(
  '/logout',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
      });

      res.status(200).json({
        success: true,
        data: {},
      });
    } catch (error) {
      next(error);
    }
  }
);

// Register User
// POST /api/auth/register
// Public
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // Create token
    const token = user.getSignedToken();

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
});

// Login User
// POST /api/auth/login
// Public
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
      return next(
        new ErrorResponse('Please provide an email and password', 400)
      );
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Create token
    const token = user.getSignedToken();

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
