const express = require('express');
const app = express();

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions/v1');

const routes = require('./routes');
app.use('/api', routes);

exports.app = functions.https.onRequest(app);
