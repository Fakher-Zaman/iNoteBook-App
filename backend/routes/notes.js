const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        a: "this",
        b: "is",
        c: "a",
        d: "note"
    }
    res.json(obj);
});

module.exports = router;