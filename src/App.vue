<template>
  <v-app>
    <global-toaster/>
    <app-bar></app-bar>
    <div class="my-15 mx-5">
      <router-view></router-view>
    </div>
    <v-spacer></v-spacer>
    <core-footer/>
    
  </v-app>
</template>

<script>
import CoreFooter from "@/components/core/Footer.vue"
import AppBar from "@/components/core/AppBar.vue";
import GlobalToaster from "./components/core/GlobalToaster.vue";
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    CoreFooter,
    AppBar,
    GlobalToaster
}
};
</script>
