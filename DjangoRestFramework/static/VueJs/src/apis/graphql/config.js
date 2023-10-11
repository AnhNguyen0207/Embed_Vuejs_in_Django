import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql/",
});

// const token = JSON.parse(localStorage.getItem('Login')).token
 const token = 'random'

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
});

export default apolloClient;
