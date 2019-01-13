// Imports: GraphQL
const { gql } = require('apollo-server-express');

// GraphQL: TypeDefs

const typeDefs = gql`
    type Query {
        student: [Student]
        getStudent(_id: ID!): Student
    }

    type Student {
        _id: ID!
        name: String!
        email: String!
        password: String!
        area: String
        adult: Boolean
    }

    type Mutation {
        createNewStudent(name: String!, email: String!, password: String!, area:String! , adult:Boolean! ): Student!
    }    
`;
// Exports
module.exports = typeDefs;