import { ApolloServer } from "apollo-server";
// 原書ではapollo-serverだが、現在はgraphql-toolsから持ってくる
import { makeExecutableSchema } from "@graphql-tools/schema";
import { $server } from "../config";

import models from "./models";

import typeDefs from "./graphql/types";
import resolvers from "./graphql/resolvers";

const ALTER = true;
const FORCE = false;

console.log("hoge");
console.log(typeDefs, resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

console.log(schema);

const apolloServer = new ApolloServer({
  schema,
  context: {
    models,
  },
});

models.sequelize.sync({ alter: ALTER, force: FORCE }).then(() => {
  apolloServer.listen($server.port).then(({ url }) => {
    console.log(`Running on ${url}`);
  });
});
