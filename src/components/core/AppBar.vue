<template>
  <v-app-bar
    app
    flat
    color="primary"
  >    
    <v-row >
      <v-img
        :src="require('@/assets/logo.png')"
        class="mr-5 ml-5"
        contain
        height="48"
        width="48"
        max-width="48"
        @click="$vuetify.goTo(0)"
      />
      <v-menu rounded open-on-hover offset-y transition="slide-x-transition" class="hidden-sm-and-up">
        <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" class="hidden-sm-and-up" v-bind="attrs" v-on="on">
                Menu
            </v-btn>
        </template>
        <v-list
          nav
          dense
        >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ana Sayfa</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>

          <v-list-item link to="/products">
            <v-list-item-icon>
              <v-icon>mdi-widgets</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Menu</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>
     
        <v-list-item link to="/photoGallary">
            <v-list-item-icon>
              <v-icon>mdi-file-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Galari</v-list-item-title>
            </v-list-item-content>
                <v-icon>mdi-menu-right</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
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
          <v-list-item link to="/cancellation-policy">
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>İptal İade Şartnamesi</v-list-item-title>
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
          <v-list-item link to="/contact-page">
            <v-list-item-icon>
              <v-icon>mdi-file-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>İletişim</v-list-item-title>
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
      
        <v-btn color="white" class="mr-2" to="/Security" icon>
            <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="white" to="/profile" icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn color="white" class="mr-2" to="/basket" icon>
            <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn color="white" class="mr-2" to="/orders" icon>          
           <v-icon>mdi-truck</v-icon>
        </v-btn>
        <v-btn color="white" class="mr-2" @click="logOut" icon>
           <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>    
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters,mapMutations } from 'vuex'
export default {
  mounted() {
    this.autoLogin();
  },
  data(){
      return{
        menu:false,
        loadCount:0,
         
      }
    },
    computed: {
      ...mapGetters({
        getToken:'getAppToken',//kullanıcı bilgilri de alınacak ve giriş ve sapaet sipariş sayıları güncellenecek created içerisinde
        loginLoading: "getLoginLoading",
      }),
    
    },
    methods: {
      ...mapMutations({
        logOut:'logOut',
      }),
      ...mapActions({
        autoLogin:'autoLogin',
      })
      
    },
    
  }
</script>
