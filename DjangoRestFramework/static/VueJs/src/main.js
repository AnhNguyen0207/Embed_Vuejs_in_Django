import Vue from "vue"
import router from "./router";
import store from "./store";
import App from "./app.vue";
import VueApollo from "vue-apollo";
import apolloClient from "./apis/graphql/config.js";

Vue.use(VueApollo);


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    router,
    store,
    apolloProvider,
    render: (h) => h(App),
});