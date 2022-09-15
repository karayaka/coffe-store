import api from '@/api/index'
export default {
    namespaced:true,
    state:{
        pageLoading:false,
        orders:[],
    },
    getters:{
        getOrderStatuses(){
            return[
                {id: -1, value: "-1", text: "Tümü"},
                {id: 0, value: "0", text: "Bekliyor"},
                {id: 1, value: "1", text: "Hazırlanıyor"},
                {id: 2, value: "2", text: "Hazır"},
                {id: 3, value: "3", text: "Teslim Edildi"},
            ]
        },
        getPageLoading(state){
            return state.pageLoading;
        },
        getOrders(state){
            return state.orders;
        }
    },
    mutations:{  
        setPageLoading(state,payload){
            state.pageLoading=payload;
        },
        setOrders(state,payload){
            state.orders=payload;
        }
    },
    actions:{
        async getOrders(vuexContext,payload){
            vuexContext.commit('setPageLoading',true);
            var result=await api.get('/Order/GetOrders/'+payload);
            if(result.type==2){
                vuexContext.commit('setOrders',result.data);                
            }
            console.log(result);
            vuexContext.commit('setPageLoading',false);

        }
    }
}