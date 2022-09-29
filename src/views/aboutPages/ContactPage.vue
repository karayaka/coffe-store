<template >
    <v-container>
        <custom-banner 
            title="İletişim"
            :image="require('@/assets/imgs/desing/invate.jpeg')"            
        />
        
        <h1>İletişim</h1>
        <p>
            Tel:0312 229 19 49  
        </p>
        <p>
            Adres: Gmk bulvarı 103/12 Maltepe Ankara
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