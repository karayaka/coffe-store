<template>

    
      <div class="row">
        <div
         class="col-md-2 col-sm-2 col-xs-12 mt-7"
        >
            <side-filter/><!--Bu Alana Categoi ve filytrelrt yollanack -->

        </div>
        <v-spacer/>
        <div
          class="col-md-10 col-sm-10 mt-6 col-xs-12"
        >
        <v-row dense>
          <v-col
            v-for="i in 5"
            :key="i"
            cols="12"
            class="mt-4"
          >
          <v-card> 
            <v-row class="pa-0">
              <v-col class="pa-0">
                <v-card-title class="mx-5">Sipariş Kodu: {{i}}</v-card-title>
                <v-card-subtitle class="mx-5">
                Adet: 3    Toplam: 75.00₺
              </v-card-subtitle>
              </v-col>
              
              
              <v-spacer/>
              <v-chip
              label
              class="mt-4 mx-6 text-uppercase"
              color="secondary"
              text-color="primary"
              small              
            >
              Hazırlanıyor
            </v-chip>
            
            </v-row>
           
              <v-row dense class="mx-3">
                <div class="d-inline-flex" v-for="i of 3" :key="i">
                <v-col align="center">
                 
                    <img
                      alt="user"
                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                      width="156"
                    />
                 
                <h3>Ürün Adı:{{i}}</h3>
                <span>Ürün Detay (25.00 ₺)</span>

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

    export default {
      components:{
        SideFilter

      },
      data: () => ({
          rating: 4.5,
          breadcrums: [
              {
                  text: 'Home',
                  disabled: false,
                  href: 'breadcrumbs_home',
              },
              {
                  text: 'Clothing',
                  disabled: false,
                  href: 'breadcrumbs_clothing',
              },
              {
                  text: 'T-Shirts',
                  disabled: true,
                  href: 'breadcrumbs_shirts',
              },
          ],
      })
    }
</script>

