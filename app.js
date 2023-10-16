const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { user } = require('./models/user'); // Assuming you have defined the 'user' model in a separate file.

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/goFoodApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Create a user
    app.post('/createUser', async (req, res) => {
      try {
        const newUser = await user.create(req.body);
        res.status(201).json(newUser);
      } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Failed to create user' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
