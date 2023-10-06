import Vue from "vue"
import VueRouter from "vue-router";
import  Home  from "../components/member/Home.mjs";
import ListMember from "../components/member/ListMember.mjs";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/members', component: ListMember}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;