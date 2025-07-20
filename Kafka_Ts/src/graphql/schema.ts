export const typeDefs = `#graphql
    type Mutation {
        sendMessage(topic: String!,name:String!,dob:String!): String!
    }
    type Query {
        _empty: String
    }
`;
