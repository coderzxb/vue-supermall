import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
  	cartList:[],
    // 是否开启请求加载
    isLoading: true
  },
  mutations: {
  	// mutation 唯一的目的就是修改state中状态
    addCounter(state,payload){
      payload.count++;
    },
    addToCart(state,payload){
      payload.checked = false;
      state.cartList.push(payload);
    },
    // 设置请求加载
    setLoading(state, bol) {
      state.isLoading = bol;
    }
  },
  actions: { 
    addCart(context,payload){
      return new Promise((resolve) => {
      // 1.查找之前数组中是否有商品
        let oldProduct = context.state.cartList.find(item=> item.iid === payload.iid);
          // 2.判断oldProduct
          if (oldProduct) {
            //oldProduct.count += 1;
            context.commit('addCounter',oldProduct);
            resolve('当前的商品数量+1');           
          } else {  // 添加新的商品
            payload.count = 1;
            //context.state.cartList.push(payload);
            context.commit('addToCart',payload);
            resolve('新增加了新的商品');         
          }
      })
    }
  },
  modules: {},
  getters
});
