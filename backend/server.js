require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const postRoutes = require('./routes/posts');
// const commentRoutes = require('./routes/comments');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));