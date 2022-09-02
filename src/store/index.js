import Vue from 'vue'
import Vuex from 'vuex'
import globalMessage from './modules/globalMessage'
import product from './modules/product'
import api from '../api/index'
import gallery from './modules/gallery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userModel:{
      UserName:"",
      Password:"",
    },
    userInfo:{
      name:"",
      surname:"",     
    },
    appToken:"",
    smsToken:"",
    
  },
  getters: {
    getUserModel(state){
      if(state.userModel){
        return state.userModel
      }else{
        let usr= localStorage.getItem("login-user");
        if(usr){
          return JSON.parse(usr);
        }else{
          return null;
        }        
      }
    },
    getAppToken(state){
      if(state.appToken==""||state.appToken==null){
        let token= localStorage.getItem("login-token");
        if(token!=""||token!=null){
          return token;
        }else{
          return null;
        }
      }else{
        return state.appToken;
      }      
    },
    getUserInfo(state){
      return state.userInfo;
    },
    getCurrentLoginState(state){
      if(state.appToken==null||state.appToken==""){
        return false;
      }else{
        return true;
      }
    },
    getLoginLoading(state){
      return state.loginLoading;
    },
    
    getSmsToken(state){
      return state.smsToken;
    },
    
  },
  mutations: {
    setLoginModel(state,value){
      localStorage.clear()
      localStorage.setItem("login-user",JSON.stringify(value))
      state.userModel=value;
    },
    setAppToken(state,value){
      localStorage.clear()
      localStorage.setItem("login-token",value)
      state.appToken=value;
    },
    setLoginLoading(state,value){
      state.loginLoading=value;
    },
    setUserInfo(state,value){
      state.userInfo=value;
    },
    
    setSmsToken(state,value){
      state.smsToken=value;
    },
    
  },
  actions: {
    async login(vuexContext,payload){
      let userModel={
        UserName:payload.phoneNumber,
        Password:payload.password,
      }
      vuexContext.commit('setLoginLoading',true);
      var result= await api.post("/Security/Login",userModel);
      if(result!=undefined||result!==-1){
        var userInfo={
          id:result.id,
          name:result.name,
          surname:result.surname
        }
        vuexContext.commit('setLoginModel',userModel);
        vuexContext.commit('setUserInfo',userInfo);
        vuexContext.commit('setAppToken',result.token);
      }
      vuexContext.commit('setLoginLoading',false);
      return result;
    },
    async register(vuexContext,payload){
      vuexContext.commit('setLoginLoading',true);
      var result= await api.post("/Security/Register",payload);
      if(result!=undefined||result!==-1){
        console.log(result);
        //buraya bakacaz 130 saıtra kadar
        var userInfo={
          id:result.id,
          name:payload.name,
          surname:payload.surname
        }
        let userModel={
          UserName:payload.phoneNumber,
          Password:payload.password,
        }
        
        vuexContext.commit('setLoginModel',userModel);
        vuexContext.commit('setUserInfo',userInfo);
        
      }
      vuexContext.commit('setLoginLoading',false);
      return result;
      
    },
    async confirmPhoneNumber(vuexContext,payload){
      vuexContext.commit('setLoginLoading',true);
      console.log(payload);
      vuexContext.commit('setLoginLoading',false);
    }
  },
  modules: {
    globalMessage,
    product,
    gallery
  }
})
