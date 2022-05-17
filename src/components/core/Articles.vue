<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
import Feed from '../Cards/Feed.vue'

  export default {
    name: 'HomeAbout',

    components: {
       Feed
    },
  }
</script>
