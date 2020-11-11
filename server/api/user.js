const router = require('express').Router();
const ErrorResponse = require('../utils/errorResponse');
const { Entry } = require('../db');
const { protect, authorize } = require('../middleware/auth');

// Get All Entries for Current User
// GET /api/user/entries
// Private
router.get(
  '/entries',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      const entries = await Entry.find({ user: req.user.id });

      res.status(200).json({ success: true, count: entries.length, entries });
    } catch (error) {
      next(error);
    }
  }
);

// Get Single Entry for Current User
// GET /api/user/entries/:entryId
// Private
router.get(
  '/entries/:entryId',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findOne({
        user: req.user.id,
        _id: req.params.entryId,
      });

      if (!entry) {
        return next(
          new ErrorResponse(
            `Entry not found with id of ${req.params.entryId}`,
            404
          )
        );
      }

      res.status(200).json({ success: true, entry });
    } catch (error) {
      next(error);
    }
  }
);

// Create New Entry for Current User
// POST /api/user/entries
// Private
router.post(
  '/entries',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      // Add user to req.body
      req.body.user = req.user.id;

      const entry = await Entry.create(req.body);

      res.status(201).json({ success: true, data: entry });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
);

// Update Entry for Current User
// PUT /api/user/entries/:entryId
// Private
router.put(
  '/entries/:entryId',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findOne({
        user: req.user.id,
        _id: req.params.entryId,
      });

      if (!entry) {
        return next(
          new ErrorResponse(
            `Entry not found with id of ${req.params.entryId}`,
            404
          )
        );
      }

      const updatedEntry = await Entry.findOneAndUpdate(
        {
          user: req.user.id,
          _id: req.params.entryId,
        },
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

// Delete Entry for Current User
// DELETE /api/user/entries/:entryId
// Private
router.delete(
  '/entries/:entryId',
  protect,
  authorize('user', 'admin'),
  async (req, res, next) => {
    try {
      const entry = await Entry.findOneAndDelete({
        user: req.user.id,
        _id: req.params.entryId,
      });

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
