import api from '@/api/index'
export default {
    namespaced:true,
    state:{
        gallerys:[],
        pageLoding:false,
    },
    getters:{        
        getGallerys(state){
            return state.gallerys;
        },
        getPageLoading(state){
            return state.pageLoding;
        }
    },
    mutations:{
        setGallerys(state,payload){
            state.gallerys=payload;
        },
        setPageLoding(state,payload){
            state.pageLoding=payload;
        }
    },
    actions:{
        async getGalleryAsync(vuexContext){
            vuexContext.commit("setPageLoding",true);
            var result= await api.get("/Gallery/GetGalery");
            vuexContext.commit("setGallerys",result.data);
            vuexContext.commit("setPageLoding",false);
            vuexContext.dispatch('globalMessage/setApiResult',result,{root:true});
            return result;
        }
    }
}