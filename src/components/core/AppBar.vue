<template>
  <v-app-bar
    app
    flat
    color="primary"
  >    
    <v-row >
      <v-img
        :src="require('@/assets/logo.png')"
        class="mr-15 ml-5"
        contain
        height="48"
        width="48"
        max-width="48"
        @click="$vuetify.goTo(0)"
      />

      <v-btn          
        class="hidden-sm-and-down"
        text
        to="/"
        color="white"
      >
        Ana Sayfa
      </v-btn>

      <v-btn          
        class="hidden-sm-and-down"
        text
        to="/photoGallary"
        color="white"
      >
        Galeri
      </v-btn>

      <v-btn          
        class="hidden-sm-and-down"
        text
        to="/products"
        color="white"
      >
        Menü
      </v-btn>
      <v-spacer/>
      <div v-if="getToken==''||getToken==null">
        <v-btn color="white" class="mr-2" to="/Security" icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="white" icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      
        <v-btn color="white" class="mr-2" to="/basket" icon>
          <v-badge
            content="2"
            value="2"
            color="secondary"
            overlap
          >
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
        <v-btn color="white" class="mr-2" to="/orders" icon>
          <v-badge
            content="2"
            value="2"
            color="secondary"
            overlap
          >
            <v-icon>mdi-truck</v-icon>
          </v-badge>
        </v-btn>
      </div>
    
    </v-row>

  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this.getToken);
  },
  data(){
      return{
         
      }
    },
    computed: {
      ...mapGetters({
        getToken:'getAppToken'
      }),
    
    },
    methods: {
      
    },
  }
</script>
