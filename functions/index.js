const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Express on Firebase!');
});

app.get('/properties', (req, res) => {
  return admin.database().ref('/properties').once('value', snapshot => {
    res.send(JSON.stringify(snapshot.val()));
  });
});

exports.api = functions.https.onRequest(app);
