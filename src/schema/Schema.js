const { ApolloServer } = require('apollo-server-express');

// Imports: GraphQL TypeDefs & Resolvers
const typeDefs = require('./typedefs.js') ;
const resolvers = require('./resolvers.js');

// GraphQL: Schema
const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    
    playground: {
        endpoint: `http://localhost:3000/graphql`,
        settings: {
        'editor.theme': 'light'
        }
    }
});

module.exports = apolloServer