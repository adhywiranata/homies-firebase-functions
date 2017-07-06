const functions = require('firebase-functions');
const express = require('express');
// const admin = require('firebase-admin');
const graphqlHTTP = require('express-graphql');

const Schema = require('./schema');

// admin.initializeApp(functions.config().firebase);

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Express on Firebase!');
});

// app.get('/properties', (req, res) => {
//   return admin.database().ref('/properties').once('value', snapshot => {
//     res.json(snapshot.val());
//   });
// });

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));

exports.api = functions.https.onRequest(app);
