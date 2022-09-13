import api from '@/api/index'
export default {
    namespaced:true,
    state:{        
        products:[],
        categorys:[],
        loginPage:false,
        loadingategory:false,
        product:null,
        orderFormOpen:false,
        saveButtonLoading:false,
        productQuestions:null,       
    },
    getters:{
        getProducts(state){
            return state.products;
        },
        getPageCategorys(state){
            let categorys=[{id:0,text:"Tümü",value:"0"}];
            categorys.push(...state.categorys);            
            return categorys;
        },
        getProduct(state){
            return state.product;
        },     
        getPageLoading(state){
            return state.loginPage;
        },
        getCategoryLoading(state){
            return state.loadingategory;
        },
        getOrderFormModal(state){
            return state.orderFormOpen;
        },
        getSaveButtonLoading(state){
            return state.saveButtonLoading;
        },
        getProductQuestions(state){
            return state.productQuestions;
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
        },
        setOrderFormModal(state,payload){
            state.orderFormOpen=payload;
        },
        setSaveButtonLoading(state,payload){
            state.saveButtonLoading=payload;
        },
        setProduct(state,payload){
            state.product=payload;
        },
        setProductQuestions(state,payload){
            state.productQuestions=payload;
        },
        closeForm(state){
            state.orderFormOpen=false;
        }
    },
    actions:{
        async getProducts(vuexContext,payload){
            vuexContext.commit('setPageLoading',true);
            var result= await api.get("/Product/GetProductList/"+payload)        
            vuexContext.commit('setProducts',result.data);
            vuexContext.commit('setPageLoading',false);
            vuexContext.dispatch('globalMessage/setApiResult',result,{root:true});
            return result;
        },
        async getCategorys(vuexContext){
            vuexContext.commit('setCategoryLoading',true);
            var result=await api.get('/Defination/GetCategorys');        
            vuexContext.commit('setCategorys',result.data);
            vuexContext.commit('setCategoryLoading',false);
            vuexContext.dispatch('globalMessage/setApiResult',result,{root:true});
            return result;
        },
        async openOrderForm(vuexContext,payload){ 
            var product=vuexContext.state.products.find(e=>e.id==payload);
            vuexContext.commit('setProduct',product);
            vuexContext.commit('setOrderFormModal',true);
            if(!product.hasNotSpesification){
                vuexContext.commit('setPageLoading',true);
                var result=await api.get('/Product/GetProductDetail/'+product.id);
                if(result.type==2){
                    console.log(result);                    
                    vuexContext.commit('setProductQuestions',result.data.questions);
                    
                }
                vuexContext.commit('setPageLoading',false);
            }
            
        },
        async addBasket(vuexContext,payload){
            vuexContext.commit('setSaveButtonLoading',true);
            var result= await api.post("/Basket/AddBasket",payload);
            if(result.type==2){
                //Kaıt Başarılı Sepete gimek İsteeisin filen diye srullabilir
                vuexContext.commit('setOrderFormModal',false);
            }
            vuexContext.commit('setSaveButtonLoading',false);
            
        },

    }
}