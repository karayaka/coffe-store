<template>
  <div>
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
                <!--<v-hover >-->
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"  
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="productUrl+pro.image"
                  >
                    <v-card-title>{{pro.name}}</v-card-title>
                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" @click="openOrderFormAsync(pro.id)" class="" outlined>Sipariş</v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a @click="openOrderFormAsync(pro.id)" style="text-decoration: none">{{pro.desc}}</a></div>
                    <div>{{pro.price}}₺</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          
        </div>
      </div>
      <product-chose-modal>

      </product-chose-modal>
  </div>
</template>

<script>
import SideFilter from '@/components/core/SideFilter.vue';
import ProductChoseModal from '@/components/ProducComponent/ProductChoseModal.vue';
import confing from '@/api/config.js'

 import { mapActions ,mapGetters} from 'vuex'

    export default {
        components:{
            SideFilter,
            ProductChoseModal,//imafge atanacak ve card tittle
        },
        mounted() {
          this.getProductsAsync(0);
          this.getCategoys();
          //console.log(this.isAuth);
        },
        computed:{
          ...mapGetters({
            categorys:'product/getPageCategorys',
            categoryLoading:'product/getCategoryLoading',
            products:'product/getProducts',
            pageLoading:'product/getPageLoading',
            isAuth:'IsAuth',
          }),
        },
        data: () => ({
          productUrl:confing.ProductImages,
          openOrderForm:false,
          formLoading:false,
          saveButonLoad:false,
          hasNotSpesification:false,
          product:null,
        }),
        methods: {
          ...mapActions({
            getProductsAsync:'product/getProducts',
            getCategoys:'product/getCategorys',
            openOrderFormAsync:'product/openOrderForm'
          }),          
          filterChange(e){
            this.getProductsAsync(e);
          },
          
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
