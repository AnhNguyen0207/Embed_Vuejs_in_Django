import * as inMemoryCaches from "apollo-cache-inmemory";
import * as apolloClients from "apollo-client";
import * as apolloLinks from "apollo-link";
import * as apolloLinkHttps from "apollo-link-http";

const { ApolloClient } = apolloClients.default
const { ApolloLink } = apolloLinks.default
const { createHttpLink } = apolloLinkHttps.default
const { InMemoryCache } = inMemoryCaches

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
