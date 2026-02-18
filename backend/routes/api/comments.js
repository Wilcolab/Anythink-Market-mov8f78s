const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { text, author } = req.body;
        const comment = new Comment({ text, author });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
);

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        /**
         * Deletes a comment by its ID from the database.
         * @async
         * @param {string} id - The unique identifier of the comment to delete
         * @returns {Promise<Object|null>} The deleted comment object, or null if not found
         * @throws {Error} If the database operation fails
         */
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        next(err);
    }
});