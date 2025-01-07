const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('document'), (req, res) => {
    res.send('Document locked successfully!');
});

app.post('/register', (req, res) => {
    // Handle user registration
});

app.post('/login', (req, res) => {
    // Handle user login
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});