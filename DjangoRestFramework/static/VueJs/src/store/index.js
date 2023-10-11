import Count from "./count.js";
import Member from "./member.js";
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
