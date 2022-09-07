<template>
    <div>
        <div v-if="showButton" >
            <v-btn 
                color="blue darken-1"
                @click="click"
                :loading="btnLoading"
                class="mx-3"

            >{{buttonText}}
            </v-btn>
        </div>
        <div v-else >
            <v-chip
                class="ma-2"
                color="secondary"
                >
                    {{timer}}
            </v-chip> 
        </div>

    </div>
</template>
<script>
export default {
    props:{
        buttonText:{
            default:"Yeniden Gönder",
            type:String,
        },
        loading:{
            default:false,
        },
        startTimer:{
            default:true,
        }
        
    },
    data:()=>({
        timer:120,
        showButton:false,
        btnLoading:false,
    }),
    methods:{
        discount(){
            if(this.timer>0){
                setTimeout(()=>{
                    this.timer--;
                    this.discount();
                },1000)
            }else{
                this.showButton=true;
            }
        },
        click(){
            this.$emit("click")
        }
    },
    watch:{
        loading(payload){
            this.btnLoading=payload;
            if(payload==false){
                this.showButton=false;
                this.timer=120;
                this.discount();
            }
        },        
    },
    created(){
        this.discount();
    }

}
</script>
<style lang="">
    
</style>