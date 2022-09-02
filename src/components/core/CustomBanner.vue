<template>
  <base-card dark>
    <v-img
      :src="image"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="8"
          offset-md="6"
        >
          <h1 :color="color" class="display-2 font-weight-light">
            {{title}}
          </h1>

        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
    props:{
        title:{
            default:"",
            type:String,            
        },
        image:{
          default:""
        },
        color:{
          default:"white",
        }
    }
  }
</script>
