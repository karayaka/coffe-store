<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot/>
      </v-col>

      <feed-card
        v-for=" i in layout"
        :key="i"
        :size="i"
      />
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Feed-',
    components: {
      FeedCard: () => import('@/components/Cards/FeedCard.vue'),
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,
    }),

    computed: {
      
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
