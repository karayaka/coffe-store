import store from '@/store'
import router from '@/router';
import axios from 'axios';
const init= axios.create({
    baseURL: "https://panel.straborn.com/service/api"
    //baseURL:"https://apptest.cagnaz.com/service/api",//BaseUrl 
    //baseURL:"https://localhost:5001/api"
})
axios.defaults.headers.post['Content-Type']="multipart/form-data";


init.interceptors.request.use(config => {
  config.headers.Authorization="Bearer "+localStorage.getItem("login-token");//local storage den tokan alınacak
    //request post ise form formdataya çeviriliyor  dosya işlemleri test edilecek  
      if(config.method==="post"){
        var form_data = new FormData();
        var configData=config.data
        for (var key in configData ) {
          var cnfData=configData[key];
          if(Array.isArray(cnfData)){
            for (let j = 0; j < cnfData.length; j++) {
              const elmnt = cnfData[j];
              console.log(elmnt)
              form_data.append(key, elmnt);
            }
          }else{
            form_data.append(key, configData[key]);
          }
            
        }
        config.data=form_data;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
  });
  // Add a response interceptor
init.interceptors.response.use((response) => {
  var result={};
  if(response.status==401){
    result.type=0;
    result.message="Otorum Açma Hatası";
    result.data=-1;
    router.push('/Security');
  }else if(response.status!=200){
    result.type=0,
    result.message="işlem sırasında bir hata oluştu",
    result.data=-1,
    store.dispatch('globalMessage/setApiResult',result);
  }
  store.dispatch('globalMessage/setApiResult',response.data);
  return response.data;
  
 
}, (error) => {
  console.log(error);
  var result={};
  result.type = 0,
  result.message = "Bağlantı Hataya Düştü",
  result.data = -1,
  store.dispatch('globalMessage/setApiResult', result);
  return -1;
});
//interente bağlartı hataları 
//diğer resut api içinden gelecek
export default init;