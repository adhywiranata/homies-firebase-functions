const {
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const AgentType = new GraphQLObjectType({
  name: 'Agent',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    agency: {
      type: GraphQLString,
    },
    photo: {
      type: GraphQLString,
    },
  }),
});

module.exports = AgentType;
