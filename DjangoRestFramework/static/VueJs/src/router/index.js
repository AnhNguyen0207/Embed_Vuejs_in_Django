import Vue from "vue"
import VueRouter from "vue-router";
import  Home  from "../components/member/Home.vue";
import ListMember from "../components/member/ListMember.vue";

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