import api from '@/api/index'
export default {
    namespaced:true,
    state:{
        pageLoading:false,
        saveButtonLoading:false,
        profileModel: {
            name: "",
            surname: "",
            phoneNumber: "",
            password: "",
            verify: "",
            email: ""
        },
    },
    getters:{
        getProfileModel(state){
            return state.profileModel;
        },
        getPageLoading(state){
            return state.pageLoading;
        },
        getSaveButtonLoading(state){
            return state.saveButtonLoading;
        }
    },
    mutations:{
        setProfileModel(state,payload){
            state.profileModel=payload;
        },
        setPageLoading(state,payload){
            state.pageLoading=payload;
        },
        setSaveButtonLoading(state,payload){
            state.saveButtonLoading=payload;
        }
    },
    actions:{
        async getProfilePage(vuexContext){
            vuexContext.commit('setPageLoading',true);
            var result=await api.get('/Security/GetProfile/');
            if(result.type==2){
                vuexContext.commit('setProfileModel',result.data);               
            }
            console.log(result);
            vuexContext.commit('setPageLoading',false);
            return result;
        },
        async updateProfile(vuexContext){
            vuexContext.commit('setSaveButtonLoading',true);
            var result= await api.post("Security/UpdateProfile",vuexContext.state.profileModel);
            if(result.type==2){
                //Kaıt Başarılı Sepete gimek İsteeisin filen diye srullabilir                
            }
            vuexContext.commit('setSaveButtonLoading',false);
        }

    }
}