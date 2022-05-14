<template>
  <v-app>
    
    <app-bar></app-bar>
    <core-footer></core-footer>
  </v-app>
</template>

<script>
import CoreFooter from "@/components/core/Footer.vue"
import AppBar from "@/components/core/AppBar.vue";
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    CoreFooter,
    AppBar
}

  
};
</script>
