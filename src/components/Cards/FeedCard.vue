<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      height="350"
      color="grey lighten-1"
      dark
      href="#!"
    >
      <v-img
        :src="src"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row          
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{caption}}
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{title}}
            </h3>
          </v-col>

        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
  export default {
    name: 'FeedCard',
    props: {
      size: {
        type: Number,
        required: true,
      },
      caption:{
        type:String,
        default:""
      },
      title:{
        type:String,
        default:""
      },
      src:{
        type:String,
        default:"../../assets/imgs/adventurealtitude.jpg"
      }

    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
