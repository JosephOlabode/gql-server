const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema}  = require('graphql');

// GraphQl Schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root Resolver
const root = {
    message: () => 'Hello world!'
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));