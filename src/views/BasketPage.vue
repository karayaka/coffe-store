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
              <v-form ref="addressForm" lazy-validation>
                <v-tabs v-model="orderForm.orderTypeStatus" show-arrows background-color="primary" icons-and-text dark grow>
                  <v-tabs-slider color="primary"></v-tabs-slider>
                  <v-tab v-for="i in tabs" :key="i.id">
                      <v-icon large>{{ i.icon }}</v-icon>
                      <div class="caption py-1">{{ i.name }}</div>
                  </v-tab>
                  <v-tab-item>
                      
                  </v-tab-item>
                  <v-tab-item>
                    <v-card >
                          <v-card-text>
                            <h3 class="mb-5">Adres Bilgileri</h3>
                            <v-autocomplete
                              v-model="orderForm.provinceID"
                              :items="provinces"
                              outlined
                              :loading="provincesLoading"
                              item-text="text"
                              item-value="value"
                              label="İl Seçiniz"
                              @change="getDistrictsAsnc"
                              :rules="req"
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
                              :rules="req"
                            ></v-autocomplete>
                            <v-autocomplete
                              v-model="orderForm.neighborhoodID"
                              :items="neighborhoods"
                              outlined
                              :loading="neighborhoodsLoading"
                              item-text="text"
                              item-value="value"
                              label="Mahalle Seçiniz"
                              :rules="req"
                            ></v-autocomplete>
                            <v-textarea
                              autocomplete="address"
                              label="Adres Detay"
                              outlined
                              v-model="orderForm.adress"
                              :rules="req"
                            ></v-textarea>
                            
                          </v-card-text>
                      </v-card>
                        
                  </v-tab-item>
                  <v-tab-item>
                        
                  </v-tab-item>
                </v-tabs>
              </v-form>
              <v-form ref="periaotForm" lazy-validation>
                <div class="pa-4">
                  <v-autocomplete
                    v-model="orderForm.deliveryPeriotID"
                    :items="periots"
                    outlined
                    :loading="periotsLoading"
                    item-text="text"
                    item-value="value"
                    label="Teslimat Periyotu Seçin"
                    :rules="req"
                  ></v-autocomplete>
              </div>
              </v-form>          
            </v-col>          
            <v-col cols="12" md="6" sm="11" class="ma-5">
              <v-row>
              
                <v-col>
                    <v-img
                        :src="require('@/assets/imgs/pay_colored.png')"
                        class="lighten-2"
                        width="550"
                    ></v-img>
                </v-col>
              
  
              </v-row>
            <v-form class="mt-10" ref="cardForm" lazy-validation>
              <h3 class="mb-5">Ödeme Bilgileri</h3>
              <v-text-field v-model="orderForm.cardNumber" 
                outlined
                v-mask="'#### #### #### ####'"
                label="Kart Numarası" required
                :rules="req"
                >
              </v-text-field>
              <v-text-field
                outlined
                v-model="orderForm.cardNameSurname" 
                label="Ad Soyad"
                :rules="req"
                required
                >
              </v-text-field>
              <v-row>              
                <v-col cols="12" md="6">
                  <v-text-field v-model="orderForm.cardDate"
                    outlined
                    label="Tarih" required
                    v-mask="'##/##'"
                    :rules="req"
                    >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="orderForm.cvv"
                    outlined
                    label="CVV" required
                    v-mask="'###'"
                    :rules="req"
                    >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>            
            </v-col>
          </v-row>
     
      </template>
      <template v-slot:confirmButton>
          <v-btn
              icon
              dark
              :loading="orderSaveLoading"
              @click="addOrder()"
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
import router from '@/router';
import FullScreanFormDialog from '@/components/base/FullScreanFormDialog.vue';
    export default {
      components:{
        FullScreanFormDialog
      },
      data: () => ({    
        baseUrl:confing.ProductImages,
        orderFormOpen:false,
        req: [
            v => !!v || "Zorunlu Alan",
        ],
        tabs: [
            { id: 0, name: "Gel Al Sipariş", icon: "mdi-account" },
            { id: 1, name: "Adrese Teslim", icon: "mdi-account-outline" },
        ],
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
          periotsLoading:'basket/getPeriotsLoading',
          orderSaveLoading:'basket/getOrderSaveLoading',
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
           getPeriotsLoadingAsync:'basket/getPeriaots',
           addOrderAsync:'basket/addOrder',
          }),
          ...mapMutations({
            calculateBasketTotal:'basket/calculateBasketTotal',
            showErrorMessage:'globalMessage/showErrorMessage',
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
          async addOrder(){
            if(this.orderForm.orderTypeStatus==1){
              if (this.$refs.addressForm.validate()&&
                  this.$refs.periaotForm.validate()&&
                  this.$refs.cardForm.validate()) {
                  //apiler
                  var result = await this.addOrderAsync();
                  if (result.type == 2) {
                    this.orderFormOpen=false;
                    router.push("/products");
                  }
              }

            }else{
              if (this.$refs.periaotForm.validate()&&
                  this.$refs.cardForm.validate()) {
                    var result2 = await this.addOrderAsync();
                    if (result2.type == 2) {
                      this.orderFormOpen=false;
                      router.push("/products");
                    }
                  }
              }
          }
       },
       created(){
         this.getBaskets();
         this.getProvincesAsync();
         this.getPeriotsLoadingAsync();
       }
  }
</script>

