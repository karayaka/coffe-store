<template>

    
      <div class="row">
        <div
         class="col-md-2 col-sm-2 col-xs-12 mt-7"
        >
            <side-filter 
              title="Kategorier"
              :items="categorys"
              @onChange="filterChange"
              :loading="categoryLoading"
            />
        </div>
        <v-spacer/>
        <div
          class="col-md-10 col-sm-10 col-xs-12"
        >
        <v-container class="d-flex justify-center mt-15" v-if="pageLoading" justify-center>
            <v-progress-circular
            
            indeterminate
            color="primary"
            >
            </v-progress-circular>
        </v-container>
          <div v-else class="row text-center mt-5">
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="pro in products" :key="pro.id">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"  
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="pro.image"
                  >
                    <v-card-title>{{pro.name}}</v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" href="/product" class="" outlined>Sipariş</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a href="/product" style="text-decoration: none">{{pro.desc}}</a></div>
                    <div>{{pro.price}}₺</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          
        </div>
      </div>
    

</template>

<script>
import SideFilter from '@/components/core/SideFilter.vue'
 import { mapActions ,mapGetters} from 'vuex'
    export default {
        components:{
            SideFilter,//imafge atanacak ve card tittle
        },
        mounted() {
          this.getProductAsync(0);
          this.getCategoys();
        },
        computed:{
          ...mapGetters({
            categorys:'product/getPageCategorys',
            categoryLoading:'product/getCategoryLoadind',
            products:'product/getProduct',
            pageLoading:'product/getPageLoading'
          })

        },
        data: () => ({           
          
        }),
        methods: {
          ...mapActions({
            getProductAsync:'product/getProduct',
            getCategoys:'product/getCategorys'
          }),          
          filterChange(e){
            this.getProductAsync(e);
          }
        },
    }
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
