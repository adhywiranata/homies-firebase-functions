var {
  GraphQLList,
  GraphQLObjectType,
} = require('graphql');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const PropertyType = require('./PropertyType');

const objToArr = (obj) => {
  let arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(obj[key]);
  });
  return arr;
};

let QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    properties: {
      type: new GraphQLList(PropertyType),
      resolve: () => {
        return new Promise((resolve, reject) => {
          admin.database().ref('/properties').once('value', snapshot => {
            const propertiesArr = objToArr(snapshot.val());
            const propertiesArrToReturn = propertiesArr.map(property => Object.assign({}, property, { images: objToArr(property.images) }));
            resolve(propertiesArrToReturn);
          });
        });
      },
    },
  }),
});

module.exports = QueryType;
