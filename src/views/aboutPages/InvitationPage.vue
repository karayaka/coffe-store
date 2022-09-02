<template>
    <v-container>
        <custom-banner 
            title="Davet"
            :image="require('@/assets/imgs/desing/invate.jpeg')"
            
        />
        
        <h1>Davet</h1>
        <p>
            - Büyük işletmeler ve orta-üst düzey ofisler profesyonel kahve hizmeti için lütfen bizi arayınız. 

        </p>
        <p>
            - Mağaza sahipliği devri de memnuniyetle karşılanmaktadır.

        </p>
        <h1>İletişim</h1>
        <p>
            Tel:          
        </p>
        <p>
            Adres:
        </p>


    </v-container>
</template>
<script>
import CustomBanner from '@/components/core/CustomBanner.vue'
export default {
  components: { CustomBanner },
    
}
</script>
<style lang="">
    
</style>