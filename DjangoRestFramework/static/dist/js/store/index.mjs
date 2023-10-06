import Count from "./count.mjs";
import Member from "./member.mjs";
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Count,
        Member
    },
    plugins: [Vuex.createLogger()]
});

export default store;
