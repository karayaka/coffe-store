<template>
    <v-container>
        <custom-banner 
            title=""
            :image="require('@/assets/imgs/desing/work.jpeg')"
            
        />
        
        <h1>Ekibimizde yer almak ister misiniz? </h1>
        <p>
            Ekibimizde yer almak ister misiniz?
            Bu büyük maceraya Barista olarak katılmak mı istiyorsunuz, özgür, macera sever, yenilikçi, karşılıklı güven
             esası " temel değerlerine odaklanan Strabornda kusursuz bir kariyer yapmak için hemen bizimle irtibata geçin

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