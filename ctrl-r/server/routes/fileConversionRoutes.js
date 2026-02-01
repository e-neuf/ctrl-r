const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
});



router.post('/upload', (req, res) => {
    console.log(req);
    if (!req.body) {
        return res.status(400).send("No file uploaded.");
    }
    res.status(200).json({
        message: "File uploaded successfully",
        filename: req.filter.filename,
        path: req.filter.path
    });
});

// export the router module so that server.js file can use it
module.exports = router;