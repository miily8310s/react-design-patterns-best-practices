import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { render } from "react-dom";
import { AppRoutes } from "./AppRoutes";
import config from "./config";

const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>,
  document.querySelector("#roots")
);
