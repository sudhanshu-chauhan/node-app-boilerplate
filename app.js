const express = require('express');
const apiRoutes = require('./routes/');
const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URL || 'mongodb://localhost/bptest';
mongoose.connect(dbURI, { useNewUrlParser: true });

const app = express();

app.use('/api', apiRoutes);
module.exports = app;
