export default {
    namespaced:true,
    state:{
        message:"",
        messageState:false,
        messageColor:"",
    },
    getters:{
        getMessageState(state){
            return state.messageState;
        },
        getMessage(state){
            return state.message;
        },
        getMessageColor(state){
            return state.messageColor;
        }
    },
    mutations:{
        setMessageState(state,value){
            state.messageState=value;
        },
        showErrorMessage(state,value){
            state.message=value;
            state.messageState=true;
            state.messageColor="red darken-3";
        },
        showWarningMessage(state,value){
            state.message=value;
            state.messageState=true;
            state.messageColor="amber darken-4";
        },
        showSuccesMessage(state,value){
            state.message=value;
            state.messageState=true;
            state.messageColor="green darken-3";
        },
        showDefaultMessage(state,value){
            state.message=value;
            state.messageState=true;
            state.messageColor="grey darken-4";
        },

    },
    actions:{
        setApiResult(vuexContext,model){
            if(model.message){
                switch (model.type) {
                    case 0:
                        vuexContext.commit('showErrorMessage',model.message);
                        break;
                    case 1:
                        vuexContext.commit('showWarningMessage',model.message);
                        break;
                    case 2:
                        vuexContext.commit('showSuccesMessage',model.message);
                        break;
                    default:
                        vuexContext.commit('showDefaultMessage',model.message);
                        break;
                }
            }

        }
    }
    
}