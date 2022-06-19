import api from '@/api/index'
export default {
    namespaced:true,
    state:{        
        products:[],
        categorys:[],
        loginPage:false,
        loadingategory:false,
    },
    getters:{
        getProduct(state){
            return state.products;
        },
        getPageCategorys(state){
            let categorys=[{id:0,text:"Tümü",value:"0"}];
            categorys.push(...state.categorys);            
            return categorys;
        },
        
        getPageLoading(state){
            return state.loginPage;
        },
        getCategoryLoadind(state){
            return state.loadingategory;
        }

    },
    mutations:{
        setProducts(state,payload){
            state.products=payload;
        },
        setPageLoading(state,payload){
            state.loginPage=payload;
        },
        setCategoryLoading(state,payload){
            state.loadingategory=payload;
        },
        setCategorys(state,payload){
            state.categorys=payload;
        }

    },
    actions:{
        async getProduct(vuexContext,payload){
            vuexContext.commit('setPageLoading',true);
            var result= await api.get("/Product/GetProductList/"+payload)
            console.log(result);          
            vuexContext.commit('setProducts',result.data);
            vuexContext.commit('setPageLoading',false);
            vuexContext.dispatch('globalMessage/setApiResult',result,{root:true});
            return result;
        },
        async getCategorys(vuexContext){
            vuexContext.commit('setCategoryLoading',true);
            var result=await api.get('/Defination/GetCategorys');
            console.log(result);          
            vuexContext.commit('setCategorys',result.data);
            vuexContext.commit('setCategoryLoading',false);
            vuexContext.dispatch('globalMessage/setApiResult',result,{root:true});
            return result;
            

        }
    }
}