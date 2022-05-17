<template>
  <v-app>
    <articles>
      <banner/>
    </articles>
    <app-bar></app-bar>
    <core-footer></core-footer>
  </v-app>
</template>

<script>
import CoreFooter from "@/components/core/Footer.vue"
import AppBar from "@/components/core/AppBar.vue";
import Articles from '@/components/core/Articles.vue';
import Banner from '@/components/core/Banner.vue';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    Articles,
    CoreFooter,
    AppBar,
    Banner
}

  
};
</script>
