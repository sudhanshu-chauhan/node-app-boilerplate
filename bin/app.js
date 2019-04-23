const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('../routes/');


const dbURI = process.env.MONGODB_URL || 'mongodb://localhost/bptest';
mongoose.connect(dbURI, { useNewUrlParser: true });

const app = express();

app.use('/api', apiRoutes);
module.exports = app;
