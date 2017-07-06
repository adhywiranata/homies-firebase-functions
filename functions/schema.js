var {
  GraphQLSchema,
} = require('graphql');

const QueryRootType = require('./types/QueryRootType');

let Schema = new GraphQLSchema({
  query: QueryRootType,
  // mutation: MutationType,
});

module.exports = Schema;
