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
        to="/products"
        color="white"
      >
        Menü
      </v-btn>
      <v-btn          
        class="hidden-sm-and-down"
        text
        to="/photoGallary"
        color="white"
      >
        Galeri
      </v-btn>
      <v-menu rounded open-on-hover offset-y transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on">
                Hakkımızda
            </v-btn>
        </template>
 
        <v-list
          nav
          dense
        >
          <v-list-item link to="/about-story">
            <v-list-item-icon>
              <v-icon>mdi-angularjs</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Hakkımızda - Hikayemiz</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>

          <v-list-item link to="/mission-vision">
            <v-list-item-icon>
              <v-icon>mdi-alpha-a-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Marka Misyonu - Vizyonu</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>
     
        <v-list-item link to="/work-with-us">
            <v-list-item-icon>
              <v-icon>mdi-beaker-question-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ekibimizde yer almak ister misiniz</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>

          <v-list-item link to="/invitation-page">
            <v-list-item-icon>
              <v-icon>mdi-file-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Davet</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>

          <v-list-item link to="/sales-agreement">
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Mesafeli Satış Sözleşmesi</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>
          <v-list-item link to="/security-policy">
            <v-list-item-icon>
              <v-icon> mdi-access-point-check </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Gizlilik Ve Güvenlik Politikası</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>
          <v-list-item link to="/straborn-page">
            <v-list-item-icon>
              <img :src="require('@/assets/icon.svg')"/>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Straborn</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>


        </v-list>

    </v-menu>

      <v-spacer/>
      <div v-if="getToken==''||getToken==null">
      
        <!--<v-btn color="white" class="mr-2" to="/Security" icon>
            <v-icon>mdi-logout</v-icon>
        </v-btn>-->
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
        menu:false,
         
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
