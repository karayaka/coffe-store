<template>
<v-row>
  <v-col cols="12">
        <app-banner/>
  </v-col>
    <feed-card
        :size="2"
        :title="'başlık 1'"
        :caption="'CAption 2'"
        src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    />
    <feed-card
      :size="2"
      :title="'başlık 2'"
      :caption="'CAption 2'"
      src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    />
    <feed-card
      :size="1"
      :title="'başlık 3'"
      :caption="'CAption 3'"
      src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    />
    <feed-card
      :size="2"
      :title="'başlık 4'"
      :caption="'CAption 4'"
      src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    />
    <feed-card
      :size="2"
      :title="'başlık 5'"
      :caption="'CAption 5'"
      src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    />
    <home-about/>
</v-row>
</template>

<script>
import FeedCard from "@/components/Cards/FeedCard.vue"
import Banner from "@/components/core/Banner.vue"
import About from "@/components/core/About.vue"
export default {
  components:{
    feedCard:FeedCard,
    appBanner:Banner,
    homeAbout:About,
  },
  data(){
    return{
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
    }
  }


}
</script>

<style>

</style>