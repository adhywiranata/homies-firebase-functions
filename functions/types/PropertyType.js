const {
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const AgentType = require('./AgentType');

const PropertyFacilitiesType = new GraphQLObjectType({
  name: 'Facilities',
  fields: () => ({
    bathroom: {
      type: GraphQLInt,
    },
    bedroom: {
      type: GraphQLInt,
    },
    carslot: {
      type: GraphQLInt,
    },
    security: {
      type: GraphQLBoolean,
    },
  }),
});

const ImpressionsType = new GraphQLObjectType({
  name: 'Impressions',
  fields: () => ({
    views: {
      type: GraphQLInt,
    },
    saves: {
      type: GraphQLInt,
    },
  }),
});

const PropertyImagesType = new GraphQLObjectType({
  name: 'image',
  fields: () => ({
    url: {
      type: GraphQLString,
    },
  }),
});

const PropertyType = new GraphQLObjectType({
  name: 'Property',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLString,
    },
    width: {
      type: GraphQLInt,
    },
    category: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    agid: {
      type: GraphQLString,
    },
    agent: {
      type: AgentType,
    },
    facilities: {
      type: PropertyFacilitiesType,
    },
    impressions: {
      type: ImpressionsType,
    },
    images: {
      type: new GraphQLList(PropertyImagesType),
    },
    latitude: {
      type: GraphQLFloat,
    },
    longitude: {
      type: GraphQLFloat,
    },
    location: {
      type: GraphQLString,
    },
  }),
});

module.exports = PropertyType;
