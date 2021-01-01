import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose'

import { resolvers } from './src/graphql/resolvers';
import { typeDefs } from './src/graphql/types';

mongoose.connect("mongodb+srv://Vinny:teste@clustervinny.hdkv3.mongodb.net/viniciusdb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }); //via Modulus

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3030;

app.listen({ port: PORT }, () =>
  console.log(`GRAPHQL ABERTO EM: http://localhost:${PORT}${server.graphqlPath}`)
);