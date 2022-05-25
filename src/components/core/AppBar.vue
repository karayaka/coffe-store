<template>
  <v-app-bar
    app
    flat
  >
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

        <v-btn          
          class="hidden-sm-and-down"
          text
          
        >
          Ana Sayfa
        </v-btn>
        <v-btn          
          class="hidden-sm-and-down"
          text
          
        >
          Menü
        </v-btn>

        
        <v-spacer/>
        <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {

    name: 'CoreAppBar',
    data(){
        return{
           
        }
    },
    computed: {
    
    },
    methods: {
      
    },
  }
</script>
