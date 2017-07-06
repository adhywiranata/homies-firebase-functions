const {
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

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
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    price: {
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
    facilities: {
      type: PropertyFacilitiesType,
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
  }),
});

module.exports = PropertyType;
