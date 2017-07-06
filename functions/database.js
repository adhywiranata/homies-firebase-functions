const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const database = admin.database();
const getProperties = admin.database().ref('/properties').once('value', snapshot => {
  return res.json(snapshot.val());
});

module.exports = database;
