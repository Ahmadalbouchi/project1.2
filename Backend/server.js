const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json()); // Allow JSON data in requests

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
  res.status(200).send('Hello, the backend is alive!');
});



const PORT = process.env.PORT || 5006;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const bcrypt = require('bcrypt');
const User = require('./user');


app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newuser = new (require('./user'))({ email, password: hashedPassword });
      await newuser.save();
      res.status(201).send('User created!');
    } catch (error) {
      res.status(500).send('Error signing up.');
    }
  });
  



const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt with email:', email);

    if (!email || !password) {
        console.log('Email or password missing');
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found:', email);
            return res.status(404).send('User not found');
        }

        console.log('User found:', user);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isMatch);

        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token generated successfully:', token);

        res.status(200).json({ token, message: 'Logged in successfully' });
    } catch (error) {
        console.error('Unexpected error during login:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});




const axios = require('axios');

app.get('/search', async (req, res) => {
    const { keyword } = req.query;
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
        );

        const books = response.data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        }));

        res.json(books);
    } catch (error) {
        res.status(500).send('Error fetching books.');
    }
});



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});