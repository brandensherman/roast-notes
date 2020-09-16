const router = require('express').Router();
const ErrorResponse = require('../utils/errorResponse');
const { Entry, User } = require('../db');
const { protect, authorize } = require('../middleware/auth');

// Get All Entries
// GET /api/admin/entries
// Private
router.get('/entries', protect, authorize('admin'), async (req, res, next) => {
  try {
    const entries = await Entry.find();

    res
      .status(200)
      .json({ success: true, count: entries.length, data: entries });
  } catch (error) {
    next(error);
  }
});

// Get All Users
// GET /api/admin/users
// Private
router.get('/users', protect, authorize('admin'), async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
});

// Get Single Entry
// GET /api/admin/entries/:entryId
// Private
router.get(
  '/entries/:entryId',
  protect,
  authorize('admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findById(req.params.entryId);

      if (!entry) {
        // This is an error for a correctly formatted id (correct number of characters but it is not in the database)
        // If the id is not correctly formatted it will be caught in the catch statement
        return next(
          new ErrorResponse(
            `Entry not found with id of ${req.params.entryId}`,
            404
          )
        );
      }

      res.status(200).json({ success: true, data: entry });
    } catch (error) {
      next(error);
    }
  }
);

// Get Single User
// GET /api/admin/users/:userId
// Private
router.get(
  '/users/:userId',
  protect,
  authorize('admin'),
  async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) {
        // This is an error for a correctly formatted id (correct number of characters but it is not in the database)
        // If the id is not correctly formatted it will be caught in the catch statement
        return next(
          new ErrorResponse(
            `User not found with id of ${req.params.userId}`,
            404
          )
        );
      }

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
);

// Create New Entry
// POST /api/admin/entries
// Private
router.post('/entries', protect, authorize('admin'), async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const entry = await Entry.create(req.body);

    res.status(201).json({ success: true, data: entry });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

// Update Single Entry
// PUT /api/admin/entries/:entryId
// Private
router.put(
  '/entries/:entryId',
  protect,
  authorize('admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findById(req.params.entryId);

      if (!entry) {
        return next(
          new ErrorResponse(
            `Entry not found with id of ${req.params.entryId}`,
            404
          )
        );
      }

      const updatedEntry = await Entry.findByIdAndUpdate(
        req.params.entryId,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({ success: true, data: updatedEntry });
    } catch (error) {
      next(error);
    }
  }
);

// Delete Single Entry
// DELETE /api/admin/entries/:entryId
// Private
router.delete(
  '/entries/:entryId',
  protect,
  authorize('admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findByIdAndDelete(req.params.entryId);

      if (!entry) {
        return next(
          new ErrorResponse(
            `Entry not found with id of ${req.params.entryId}`,
            404
          )
        );
      }

      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
