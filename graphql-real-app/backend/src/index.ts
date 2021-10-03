import { ApolloServer } from "apollo-server";
// 原書ではapollo-serverだが、現在はgraphql-toolsから持ってくる
import { makeExecutableSchema } from "@graphql-tools/schema";
import { $server } from "../config";

const ALTER = true;
const FORCE = false;

// const schema = makeExecutableSchema({});

// const apolloServer = new ApolloServer({ schema, context: {} });

// apolloServer.listen($server.port).then(({ url }) => {
//   console.log(`Running on ${url}`);
// });
