import api from '@/api/index'
export default {

    namespaced:true,
    state:{
        baskeets:[],
        basketTotal:0,
        tableLoading:false,
        rowLoading:false,
        provinces:[],
        provinceLoading:false,
        districts:[],
        districtLoading:false,
        neighborhoods:[],
        neighborhoodLoading:false,
        periots:[],
        
        periotLoading:false,
        orderForm:{
            id:0,
            orderTypeStatus:1,
            provinceID:0,
            districtID:0,
            neighborhoodID:0,
            deliveryPeriotID:0,
            adress:'',
            paymentType:0,
            orderType:0,
            cardNumber:'',
            cardDate:'',
            cvv:'',
            cardNameSurname:''
        }     
    },
    getters:{
        getBaskets(state){
            return state.baskeets;
        },
        getTableLoading(state){
            return state.tableLoading;
        },
        getRowLoadin(state){
            return state.rowLoading;
        },
        getBasketTotal(state){
            return state.basketTotal.toFixed(2);
        },
        getOrderForm(state){
            return state.orderForm;
        },
        getProvinces(state){
            return state.provinces
        },
        getProvincesLoading(state){
            return state.provinceLoading
        },
        getDistricts(state){
            return state.districts;
        },
        getDistrictsLoading(state){
            return state.districtLoading;
        },
        getNeighborhoods(state){
            return state.neighborhoods;
        },
        getNeighborhoodsLoading(state){
            return state.neighborhoodLoading;
        },
        getPeriots(state){
            return state.periots;
        },
        getPeriotsLoading(state){
            return state.periotLoading;
        }
    },
    mutations:{
        setBaskets(state,payload){
            state.baskeets=payload;
        },
        setTableLoading(state,payload){
            state.tableLoading=payload;
        },
        setRowLoading(state,payload){
            state.rowLoading=payload;
        },
        setBasketTotal(state,payload){
            state.basketTotal=payload;
        },
        calculateBasketTotal(state){
            var datas=state.baskeets;
            var basketTotal=0;
            for (let index = 0; index < datas.length; index++) {
                datas[index].rowLoading=false;
                basketTotal+=datas[index].totalPrice
            }
            state.basketTotal=basketTotal;
        },
        removeBasket(state,payload){
            state.baskeets.splice(state.baskeets.findIndex(v => v.id ==payload), 1);
        },
        setOrderForm(state,payload){
            state.orderForm=payload;
        },
        setProvinces(state, payload){
            state.provinces=payload;
        },
        setProvincesLoading(state, payload){
            state.provinceLoading=payload;
        },
        setDistricts(state,payload){
            state.districts=payload;
        },
        setDistrictsLoading(state,payload){
            state.districtLoading=payload;
        },
        setNeighborhoods(state,payload){
            state.neighborhoods=payload;
        },
        setNeighborhoodsLoading(state,payload){
            state.neighborhoodLoading=payload;
        },
        setPeriots(state,payload){
            state.periots=payload;
        },
        setPeriotsLoadin(state,payload){
            state.periotLoading=payload;
        }
    },
    actions:{
        async getBaskets(vuexContext){
            vuexContext.commit('setTableLoading',true);
            var result=await api.get('/Basket/GetBasket/');
            if(result.type==2){
                var datas=result.data;
                for (let index = 0; index < datas.length; index++) {
                    datas[index].rowLoading=false;
                }
                vuexContext.commit('calculateBasketTotal');
                vuexContext.commit('setBaskets',result.data);
            }
            vuexContext.commit('calculateBasketTotal');
            vuexContext.commit('setTableLoading',false);
        },
        async changeBasketQuantity(vuexContext,payload){
            vuexContext.commit('setRowLoading',true);
            console.log('basket');
            var result= await api.post("Basket/ChangeBasketQuantity",payload);
            if(result.type==2){
                //Kaıt Başarılı Sepete gimek İsteeisin filen diye srullabilir                
            }
            vuexContext.commit('setRowLoading',false);
            return result.data;
        },
        async deleteBasket(vuexContext,payload){
            var result=await api.get('/Basket/DeleteBasket/'+payload);
            if(result.type==2){
                vuexContext.commit('removeBasket',payload);
                vuexContext.commit('calculateBasketTotal');
            }
        },
        async getProvinces(vuexContext){
            vuexContext.commit('setProvincesLoading',true);
            var result=await api.get('/Defination/GetProvince/');
            var selet={id:0,text:'Lütfen Seçiniz',value:'0'}
            if(result.type==2){
                result.data.push(selet);
                vuexContext.commit('setProvinces',result.data);
            }
            vuexContext.commit('setProvincesLoading',false);
            console.log(result);
            return result.data;
        },
        async getDistricts(vuexContext,payload){
            vuexContext.commit('setDistrictsLoading',true);
            var result=await api.get('/Defination/GetDistrict/'+payload);
            if(result.type==2){
                vuexContext.commit('setDistricts',result.data);
            }
            console.log(result);
            vuexContext.commit('setDistrictsLoading',false);
            return result.data;
        },
        async getNeighborhoods(vuexContext,payload){
            vuexContext.commit('setNeighborhoodsLoading',true);
            var result=await api.get('/Defination/GetNeighborhood/'+payload);
            if(result.type==2){
                vuexContext.commit('setNeighborhoods',result.data);
            }
            vuexContext.commit('setNeighborhoodsLoading',false);
            return result.data;
        },
        async getPeriaots(vuexContext){
            vuexContext.commit('setPeriotsLoadin',true);
            var result=await api.get('/Defination/GetPeriot/');
            if(result.type==2){
                vuexContext.commit('setPeriots',result.data);
            }
            vuexContext.commit('setPeriotsLoadin',false);
            return result.data;
        }
        


    }
}