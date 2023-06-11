const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');

// Route # 1: Fetching all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json({ notes, success: true });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error!");
    }
});

// Route # 2: Adding a new note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title!').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters!').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), success: false });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json({ savedNote, success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error!");
    }
});

module.exports = router;