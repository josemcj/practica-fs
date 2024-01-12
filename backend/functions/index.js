const express = require('express');
const app = express();
const cors = require('cors');

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions/v1');

// Configurar CORS
app.use(cors());

const routes = require('./routes');
app.use('/api', routes);

exports.app = functions.https.onRequest(app);
