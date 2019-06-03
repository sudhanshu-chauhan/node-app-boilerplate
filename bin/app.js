const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('../routes/');
const config = require('../config/config');


const dbURI = process.env.MONGODB_URL || `mongodb://${config.get('mongo.host')}/${config.get('mongo.db')}`;
mongoose.connect(dbURI, { useNewUrlParser: true });

const app = express();

app.use('/api', apiRoutes);
module.exports = app;
