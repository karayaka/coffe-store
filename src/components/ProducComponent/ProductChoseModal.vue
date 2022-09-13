<template>
    <v-row justify="center">
      <v-dialog
        v-model="openForm"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
           <v-btn
              icon
              dark
              @click="closeForm()"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Ürün Özelikleri</v-toolbar-title>
            <v-spacer></v-spacer>
            <span color="white" class="px-2">Adet:</span>
            <v-text-field
              class="pt-7"               
              label="Outlined"
              style="width: 80px;"
              single-line
              min="1"
              outlined
              v-model="quantity"
              type="number"
            ></v-text-field>
            <v-spacer></v-spacer>
            <span color="white " class="px-2">Toplam Fiyat:</span>            
            <span color="white" class="px-2">{{totalPrice}} ₺</span>
            <v-spacer></v-spacer>
            <v-btn
                icon
                dark
                :loading="saveButonLoad"
                @click="addBasket()"
            >
            <v-icon>mdi-check</v-icon>
          </v-btn>
          </v-toolbar>
          <v-container>
            <div v-if="!IspProductNull">
                <div v-if="hasNotSpesification">
                    <product-detail-card
                        :title="product.name"
                        :img="productUrl+product.image"
                        :content="product.desc"
                    >
                    </product-detail-card>             
                
                </div>
                <div v-else >
                    <!--resim ve içerik gelecek-->
                    <v-container class="d-flex justify-center mt-15" v-if="pageLoading" justify-center>
                    <!--spesificastonları yüklüyor-->
                        <v-progress-circular            
                        indeterminate
                        color="primary"
                        >
                        </v-progress-circular>
                    </v-container>
                    <div v-else>
                      <!--ürün spesificationlari-->
                      <v-form ref="radioValidator">
                        <v-container v-for="question,i in questions" :key="question.id" fluid>
                          <p >{{i+1}}-{{question.questionDesc}}</p>
                          <v-radio-group
                            :rules="radioRule"
                            >
                              <v-radio v-for="replies in question.productFeaturesReplies" 
                                :key="replies.id"
                                :label="getLabelData(replies)"
                                :value="replies.id"                              
                                @change="changeRadioData($event,replies.id,question.id,replies.extraCost)"
                              >
                              </v-radio>
                            </v-radio-group>
                        </v-container>
                      </v-form>
                    </div>
                </div>
            </div>
        </v-container>  
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import ProductDetailCard from '@/components/Cards/ProductDetailCard.vue';
import confing from '@/api/config.js'
  export default {
    components:{
        ProductDetailCard,
        },
    data(){
        return{
            IspProductNull:true,
            hasNotSpesification:false,
            productUrl:confing.ProductImages,
            prductReplies:[],
            quantity:1,
            totalPrice:0,
            radioRule: [
                v => !!v || "Zorunlu Alan",
            ],
        }
    },
    computed:{
        ...mapGetters({
            pageLoading:'product/getPageLoading',
            openForm:'product/getOrderFormModal',
            saveButonLoad:'product/getSaveButtonLoading',
            product:'product/getProduct',
            questions:'product/getProductQuestions'
        }),
    },
    watch:{
        product(){
            if(this.product!=null){
                this.IspProductNull=false;
                this.hasNotSpesification=this.product.hasNotSpesification;
                this.totalPrice=this.product.price;   
            }else{
                this.IspProductNull=true;
            }
        },
        quantity(){
          this.calculateTotal();
        }
    },
    methods:{
        ...mapActions({
            addBasketAsync:'product/addBasket',
            getProductSpesification:'product/getProductSpesification',
        }),
        ...mapMutations({
            closeForm:'product/closeForm'
        }),
        async addBasket(){
          if(this.hasNotSpesification){
            var product={
              productID:this.product.id,
              quantity:this.quantity,
              basketDetailstr: JSON.stringify(this.prductReplies)
            }
            await this.addBasketAsync(product);
            
            
          }else{
              if (this.$refs.radioValidator.validate()) {
                var product2={
                  productID:this.product.id,
                  quantity:this.quantity,
                  basketDetailstr: JSON.stringify(this.prductReplies)
                }
                await this.addBasketAsync(product2);
                console.log(product2);
                
              }

          }
          
          
        },
        changeRadioData(event,replayid,questionid,extraCost){
          var baskt=this.prductReplies.find(e=>e.productFeaturesQuestionID==questionid)
          if(baskt==undefined){
            baskt={ProductFeaturesQuestionID:questionid,ProductFeaturesReplyID:replayid,extraCost:extraCost};
            this.prductReplies.push(baskt);
          }else{
            baskt.ProductFeaturesQuestionID=questionid;
            baskt.ProductFeaturesReplyID=replayid;
            baskt.extraCost=extraCost;
          }          
          this.calculateTotal();          
        },
        getLabelData(replays){
          var text=replays.replyDesc;
          if(replays.hasExtraCost){
            text+=' ('+replays.extraCost+' ₺)'
          }
          return text;
        },
        calculateTotal(){
          var spesificationTotal=0.0;
          for(var i=0 ;i<this.prductReplies.length;i++){
            var replay=this.prductReplies[i]
            spesificationTotal+=replay.extraCost;
          }
          console.log(spesificationTotal);
          this.totalPrice=this.quantity*(spesificationTotal+this.product.price);
        }

    }
    
}
  </script>
  