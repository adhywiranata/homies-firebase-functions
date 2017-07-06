const {
  GraphQLList,
  GraphQLObjectType,
} = require('graphql');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const PropertyType = require('./PropertyType');
const AgentType = require('./AgentType');

const objToArr = (obj) => {
  const arr = [];
  Object.keys(obj).forEach((key) => {
    arr.push(obj[key]);
  });
  return arr;
};

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    properties: {
      type: new GraphQLList(PropertyType),
      resolve: () => new Promise((resolve, reject) => {
        admin.database().ref('/properties').once('value', (snapshot) => {
          const propertiesArr = objToArr(snapshot.val());
          const result = propertiesArr.map((property) => {
            return Object.assign({}, property, { images: objToArr(property.images) });
          });
          resolve(result);
        });
      }),
    },
    property: {
      type: PropertyType,
      resolve: (obj, { id }) => new Promise((resolve, reject) => {
        admin.database().ref('/properties').once('value', (snapshot) => {
          const propertiesArr = objToArr(snapshot.val());
          const result = propertiesArr.map((property) => {
            return Object.assign({}, property, { images: objToArr(property.images) });
          }).filter(property => property.id === id)[0];
          resolve(result);
        });
      }),
    },
    agents: {
      type: new GraphQLList(AgentType),
      resolve: () => new Promise((resolve, reject) => {
        admin.database().ref('/agents').once('value', (snapshot) => {
          const agentsArr = objToArr(snapshot.val());
          resolve(agentsArr);
        });
      }),
    },
  }),
});

module.exports = QueryType;
