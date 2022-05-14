<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

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
          @click="onClick($event, link)"
        >
          Ana Sayfa
        </v-btn>
        <v-btn          
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          Menü
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {

    name: 'CoreAppBar',
    data(){
        return{
            links:[
                {text:"Anasayfa",},
                {text:"satfa",}
            ],

        }
    },
    computed: {
    
    },
    methods: {

        onClick (e, item) {
            e.stopPropagation()
            if (item.to || !item.href) return
            this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
        },
    },
  }
</script>
