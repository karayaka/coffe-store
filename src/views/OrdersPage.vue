<template>

    
      <div class="row">
        <div
         class="col-md-2 col-sm-2 col-xs-12 mt-7"
        >
            <side-filter
            :items="orderStatuses"
            @onChange="filterChange"
            /><!--Bu Alana Categoi ve filytrelrt yollanack -->

        </div>
        <v-spacer/>
        <v-container class="d-flex justify-center" v-if="pageLoadin" justify-center>
            <v-progress-circular            
              indeterminate
              color="primary"
            >
            </v-progress-circular>
        </v-container>
        <div v-else
          class="col-md-10 col-sm-10 mt-6 col-xs-12"
        >
        <v-row dense>
          <v-col
            v-for="order in orders"
            :key="order.id"
            cols="12"
            class="mt-4"
          >
          <v-card> 
            <v-row class="pa-0">
              <v-col class="pa-0">
                <v-card-title class="mx-5">Sipariş Kodu: {{order.orderCode}}</v-card-title>
                <v-card-subtitle class="mx-5">
                Adet: {{order.productCount}}    Toplam: {{order.orderTotal}} ₺
              </v-card-subtitle>
              </v-col>
              
              
              <v-spacer/>
              <order-status-chip
              :stausType="order.orderStatus"
              />               
            
            </v-row>
           
              <v-row dense class="mx-3">
                <div class="d-inline-flex" v-for="(basket,i) in order.baskets" :key="i">
                <v-col align="center">
                 
                    <img
                      alt="user"
                      :src="baseUrl+basket.image"
                      height="150"
                    />
                 
                <h3>Ürün Adı: {{basket.productName}}</h3>
                <span>Adet:{{basket.quantity}} {{basket.totalPrice}} ₺</span>

                </v-col>
                
                </div>
              </v-row>
            <v-card-actions>
              
            </v-card-actions>
          </v-card>

          </v-col>

        </v-row>
        </div>
      </div>
    

</template>
<script>
import SideFilter from '@/components/core/SideFilter.vue';
import { mapActions, mapGetters } from 'vuex';
import OrderStatusChip from '@/components/ProducComponent/OrderStatusChip.vue';
import confing from '@/api/config.js'
    export default {
      components:{
        SideFilter,
            OrderStatusChip

      },
      data: () => ({
          baseUrl:confing.ProductImages,
      }),
      computed:{
        ...mapGetters({
          orderStatuses:'order/getOrderStatuses',
          pageLoadin:'order/getPageLoading',
          orders:'order/getOrders',
        }),
      },
      methods:{
        ...mapActions({
          getOrdersAsync:'order/getOrders',
        }),
        filterChange(e){
          this.getOrdersAsync(e);
        }
      },
      created(){
        this.getOrdersAsync(-1);
      }
      
    }
</script>

