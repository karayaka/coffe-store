<template>
<v-row class="mt-1">
  <v-col cols="12">
      <app-banner/>
  </v-col>
    <feed-card
        :size="2"
        :title="'Kahve Latte Gibi Sıcak İçecekler'"
        :caption="'Sıcak İçecekler'"
        src="https://ceylaneglencemerkezi.com/wp-content/uploads/kahve-fincani-ve-cekirdegi.jpg"
    />
    <feed-card
      :size="2"
      :title="'Serinleten içecekler'"
      :caption="'Soguk İçecekler'"
      src="https://ceylaneglencemerkezi.com/wp-content/uploads/kahve-fincani-ve-cekirdegi.jpg"
    />
    <feed-card
      :size="1"
      :title="'Kahve ve Rahatlık'"
      :caption="'Bizim Kahvemiz'"
      src="https://scontent.fyei5-1.fna.fbcdn.net/v/t1.6435-9/194042835_3952871544762119_5459276548940442229_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=biFeOpXyTuQAX_Fwrc0&_nc_ht=scontent.fyei5-1.fna&oh=00_AT-Esog-2hYmu--O9URmps0QLnrOICZemtH8rMcfscjxfw&oe=62B9D6FC"
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