<template>
  <v-app>
    <app-bar/>
    <v-container class="mt-15">
      <router-view></router-view>
    </v-container>    
    <core-footer/>
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
    AppBar,
  }
};
</script>
