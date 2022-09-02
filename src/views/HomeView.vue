<template>
<v-row class="mt-1">
  <v-col cols="12">
      <app-banner/>
  </v-col>
    <feed-card
        :size="2"
        :title="'Kahve Latte Gibi Sıcak İçecekler'"
        :caption="'Sıcak İçecekler'"
        :src="require('@/assets/imgs/desing/hot.jpeg')"
    />
    <feed-card
      :size="2"
      :title="'Serinleten içecekler'"
      :caption="'Soguk İçecekler'"
      :src="require('@/assets/imgs/desing/cold.jpeg')"
    />
    <feed-card
      :size="1"
      :title="'Kahve ve Rahatlık'"
      :caption="'Bizim Kahvemiz'"
      :src="require('@/assets/imgs/desing/last_banner.jpeg')"
    />
    
    <home-about/>
    <app-dowland/>
</v-row>
</template>

<script>
import FeedCard from "@/components/Cards/FeedCard.vue"
import Banner from "@/components/core/Banner.vue"
import About from "@/components/core/About.vue"
import AppDowland from "@/components/core/AppDowland.vue"
export default {
  components: {
    feedCard: FeedCard,
    appBanner: Banner,
    homeAbout: About,
    AppDowland: AppDowland
  },
  mounted() {
    
  },
  data() {
    return {

    }
  },
  


}
</script>

<style>

</style>