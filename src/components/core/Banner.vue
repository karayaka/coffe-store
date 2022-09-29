<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/imgs/desing/banner.jpeg')"
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
          <h1 class="display-2 font-weight-light">
            STRABORN Muhteşem Kahve
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Kendi Kahveni Bul Rahatlığın Tadını Çıkar
          </div>

          <v-btn
            color="secondary"
            depressed
          >
            MENÜ
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
