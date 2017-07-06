var {
  GraphQLBoolean,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

let PropertyFacilitiesType = new GraphQLObjectType({
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

let PropertyImagesType = new GraphQLObjectType({
  name: 'image',
  fields: () => ({
    url: {
      type: GraphQLString,
    },
  }),
});

let PropertyType = new GraphQLObjectType({
  name: 'Property',
  fields: () => ({
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
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    uid: {
      type: GraphQLString,
    },
  }),
});

module.exports = PropertyType;
