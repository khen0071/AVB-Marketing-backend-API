const express = require("express");
const Comment = require("../model/CommentModel.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.find({});
    res.json(comments);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const { name, comment } = req.body;

      const newComment = new Comment({
        name,
        comment,
      });

      await newComment.save();
      res
        .status(201)
        .json({ message: "Comment created successfully", newComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  })
);

module.exports = router;
