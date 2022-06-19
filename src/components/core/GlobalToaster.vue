<template>
    <v-snackbar
      class="mt-15"
      v-model="showResult"
      right
      :timeout="2000"
      :color="messageColor"
      absolute      
      rounded="pill"
      top
      >
      {{ result }}
    </v-snackbar>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
    data(){
        return{
      }
    },
    computed:{
      ...mapGetters({
        result:'globalMessage/getMessage',
        messageState:'globalMessage/getMessageState',
        messageColor:'globalMessage/getMessageColor',
      }),         
      showResult:{
        set:function(value){
          this.setMessageState(value);
        },
        get:function(){
          return this.messageState;
        }
      }
    },
    methods: {
        ...mapMutations({
            setMessageState:'globalMessage/setMessageState'
        })

    },
}
</script>

<style>
</style>