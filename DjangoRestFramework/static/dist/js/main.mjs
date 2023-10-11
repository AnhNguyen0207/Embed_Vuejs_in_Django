import Vue from "vue"
import router from '../js/router/index.mjs'
import store from "./store/index.mjs";
import App from "./app.mjs";
import apolloClient from "./apis/graphql/config.mjs";
import ApolloProviders from "vue-apollo";

const { ApolloProvider } = ApolloProviders;

Vue.use(ApolloProvider);

const apolloProvider = new ApolloProvider({
  defaultClient: apolloClient,
});

new Vue({
        el: "#app",
        delimiters: ['[[', ']]'],
        router,
        store,
        apolloProvider,
        render: (h) => h(App),
    });
