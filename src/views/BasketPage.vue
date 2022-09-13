<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">Sepet</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-container class="d-flex justify-center mt-15" v-if="tableLoading" justify-center>
            <v-progress-circular            
              indeterminate
              color="primary"
            >
            </v-progress-circular>
        </v-container>
          <div v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Ürün</th>
                    <th class="text-center">Fiyat</th>
                    <th class="text-center">Adet</th>
                    <th class="text-center">Toplam</th>
                    <th class="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="basket in baskets" :key="basket.id" >
                    <td>
                      <v-list-item
                      key="1"               
                    >
                      <v-list-item-avatar>
                        <v-img :src="baseUrl+basket.image"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title >{{basket.productName}}</v-list-item-title>
                        <v-list-item-subtitle v-html="basket.desc" ></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item></td>
                    <td>{{basket.unitPrice}} ₺</td>
                    <td>
                      <v-text-field
                        class="pt-10"
                        label="Outlined"
                        style="width: 80px;"
                        single-line
                        min="1"
                        outlined
                        v-model="basket.quantity"
                        @input="changeBasketQuantity(basket)"
                        type="number"
                      ></v-text-field>
                    </td>                    
                    <td v-if="basket.rowLoading">
                      <v-progress-circular                      
                        indeterminate
                        color="primary"
                      >
                      </v-progress-circular>
                    </td>
                    <td v-else >{{basket.totalPrice}} ₺</td>
                    <td><a @click="deleteBasket(basket.id)">X</a></td>
                  </tr>                
                </tbody>
              </template>
            </v-simple-table>
          </div>          
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Sipariş Toplamı</p>
          <p class="overline">Sipariş toplamı ve siapriş özet bölümü 
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Sipariş Toplamı</td>
                <td class="text-right" style="width: 50px;">{{basketTotal}}₺</td>
              </tr>
              
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" @click="orderFormOpen=true" outlined>Sipariş Et</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <full-screan-form-dialog 
      title="Sipariş Et"
      v-model="orderFormOpen"
    >
      <template v-slot:form>
        
          <v-row>
          <v-col cols="12" md="5" sm="11" class="ma-5">
            <h3>Adres Bilgileri</h3>
            <v-autocomplete
              v-model="orderForm.provinceID"
              :items="provinces"
              outlined
              :loading="provincesLoading"
              item-text="text"
              item-value="value"
              label="İl Seçiniz"
              @change="getDistrictsAsnc"
            ></v-autocomplete>
            <v-autocomplete
              v-model="orderForm.districtID"
              :items="districts"
              outlined
              :loading="districtLoading"
              item-text="text"
              item-value="value"
              label="İlçe Seçiniz"
              @change="getNeighborhoodsAsync"
            ></v-autocomplete>
            <v-autocomplete
              v-model="orderForm.neighborhoodID"
              :items="neighborhoods"
              outlined
              :loading="neighborhoodsLoading"
              item-text="text"
              item-value="value"
              label="Mahalle Seçiniz"
            ></v-autocomplete>
            <v-textarea
              autocomplete="address"
              label="Adres Detay"
              outlined
              v-model="orderForm.adress"
            ></v-textarea>
            <v-autocomplete
              v-model="orderForm.deliveryPeriotID"
              :items="periots"
              outlined
              :loading="periotsLoading"
              item-text="text"
              item-value="value"
              label="Teslimat Periyotu Seçin"
            ></v-autocomplete>

          </v-col>
          <v-col cols="12" md="6" sm="11" class="ma-5">
            <h3>Ödeme Bilgileri</h3>
            <v-text-field v-model="orderForm.cardNumber" 
              outlined
              :rules="emailRules"
              mask="###.###.###-##"
              label="Kart Numarası" required
              >
            </v-text-field>
            <v-text-field
              outlined
              v-model="orderForm.cardNumber" 
              :rules="emailRules"
              label="Ad Soyad" required
              >
            </v-text-field>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  :items="items"
                  label="Ay"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  :items="items"
                  label="Yıl"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="orderForm.cardNumber"
                  outlined
                  :rules="emailRules"
                  label="CVV" required
                  >
                </v-text-field>
              </v-col>
            </v-row>

          </v-col>

        </v-row>

     
        
        
      </template>
      <template v-slot:confirmButton>
          <v-btn
              icon
              dark
              :loading="false"
              >
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </template>
    </full-screan-form-dialog>    
  </div>
</template>
<script>
import { mapActions, mapGetters,mapMutations } from 'vuex'
import confing from '@/api/config.js'
import FullScreanFormDialog from '@/components/base/FullScreanFormDialog.vue';
    export default {
      components:{
        FullScreanFormDialog
      },
      data: () => ({    
        baseUrl:confing.ProductImages,
        orderFormOpen:false,
      }),        
      computed:{
        ...mapGetters({
          baskets:'basket/getBaskets',
          tableLoading:'basket/getTableLoading',
          basketTotal:'basket/getBasketTotal',
          orderForm:'basket/getOrderForm',
          provincesLoading:'basket/getProvincesLoading',
          provinces:'basket/getProvinces',
          districts:'basket/getDistricts',
          districtLoading:'basket/getDistrictsLoading',
          neighborhoods:'basket/getNeighborhoods',
          neighborhoodsLoading:'basket/getNeighborhoodsLoading',
          periots:'basket/getPeriots',
          periotsLoading:'basket/getPeriotsLoading'
        }),          
      },
      methods: {
         ...mapActions({
           getBaskets:'basket/getBaskets',
           changeBasketQuantityAsync:'basket/changeBasketQuantity',
           deleteBasket:'basket/deleteBasket',
           getProvincesAsync:'basket/getProvinces',
           getDistrictsAsnc:'basket/getDistricts',
           getNeighborhoodsAsync:'basket/getNeighborhoods',
           getPeriotsLoadingAsync:'basket/getPeriaots'
          }),
          ...mapMutations({
            calculateBasketTotal:'basket/calculateBasketTotal'
          }),           
          async changeBasketQuantity(basket){
            basket.rowLoading=true;
            var mdl={
              id:basket.id,
              quantity:basket.quantity,
              basketTotal:basket.totalPrice,
            };
            var result= await this.changeBasketQuantityAsync(mdl)
            basket.rowLoading=false;
            basket.totalPrice=result.basketTotal;
            this.calculateBasketTotal();
          },
       },
       created(){
         this.getBaskets();
         this.getProvincesAsync();
         this.getPeriotsLoadingAsync();
       }
  }
</script>

