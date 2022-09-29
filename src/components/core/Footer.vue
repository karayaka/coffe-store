<template>
  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container class="mx-auto">
      <v-row>
        <v-col cols="7">
          <base-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text="item.icon" />
          </base-btn>
        </v-col>
        <v-spacer/>
          <v-col>
              <v-img
                  :src="require('@/assets/imgs/footer_pay.png')"                  
                  width="400"
              ></v-img>
          </v-col>
        <base-btn
          class="mr-0"
          square
          title="Go to top"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'CoreFooter',

    data: () => ({
      items: [
        {
          href: '#!',
          icon: 'mdi-twitter',
        },
        {
          href: '#!',
          icon: 'mdi-instagram',
        },
        {
          href: '#!',
          icon: 'mdi-facebook',
        },
        {
          href: '#!',
          icon: 'mdi-google-plus',
        },
        {
          href: '#!',
          icon: 'mdi-reddit',
        },
        {
          href: '#!',
          icon: 'mdi-pinterest',
        },
      ],
    }),
  }
</script>
