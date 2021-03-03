import Vue from "vue";
import VueRouter from "vue-router";

// 重写路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 重写路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const Home=()=>import('../views/home/Home.vue');
const Category=()=>import('../views/category/Category.vue');
const ShopCart=()=>import('../views/shopCart/ShopCart.vue');
const Profile=()=>import('../views/profile/Profile.vue');
const Detail=()=>import('../views/detail/Detail.vue');

// const originalPush = VueRouter.prototype.push;
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;

