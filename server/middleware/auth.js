const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const { User } = require('../db');

// Protect routes
const protect = async (req, res, next) => {
  try {
    // Initialize token
    let token;

    if (
      // If authorization is contained in headers and it starts with Bearer
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      // If the token is stored in headers - set token to headers - Bearer token in header will be split to get just the token
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
      // If the token is contained in cookie - set token to cookie
      token = req.cookies.token;
    }

    // Make sure token exists - if not send a 401 error
    if (!token) {
      return next(
        new ErrorResponse('Not authorized to access this route', 401)
      );
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Identify currently logged in user with token
      req.user = await User.findById(decoded.id);

      next();
    } catch (error) {
      return next(
        new ErrorResponse('Not authorized to access this route', 401)
      );
    }
  } catch (error) {
    next(error);
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // If not authorized return a 403 forbidden
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is unauthorized to access this route`,
          403
        )
      );
    }

    next();
  };
};

module.exports = {
  protect,
  authorize,
};
