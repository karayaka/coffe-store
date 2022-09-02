<template>
    <v-container>
        <custom-banner 
            title="Marka Misyonu Vizyonu"
            :image="require('@/assets/imgs/desing/missionbanner.jpeg')"
            
        />
        
        <h1>Marka Misyonu</h1>
        <p>
            "Daha keyifli bir yaşam için güzel anılar ve ilham verici özlemler yaratmak" misyonuyla Straborn Coffee,
            mobil internet ve büyük veri teknolojisinin yeni perakende modelini tam olarak kullanmakta ve yüksek teknoloji ile 
            derinlemesine iş birliği yapmaktadır. Çeşitli alanlarda kaliteli tedarikçileri ile yüksek kaliteli bir
            tüketici deneyimini müşterilerine sunmaktadır.
        </p>
        <h1>Marka Vizyonu</h1>
        <p>
            " Kaliteli kahveleri ile lezzeti ve enerjiyi misafirlerine aktarmak, nitelikli kahveyi gezginlerin, gezmeyi sevenlerin ve özgür
             ruhların her uğrak yerinde karşılarına çıkartarak bir kahve markası yaratmak" vizyonuyla yola çıkan
              Straborn Coffee kahve severlerin günlük yaşamının bir parçası haline gelmeyi,
             ürün ve hizmetleriyle günlük yaşamlarının her alanına nüfuz etmeyi hedeflemektedir.
        </p>
        <p>
            Şu anda, Straborn Coffee, müşterilerine yüksek kaliteli ürünler sunmak için ülke çapında ödüllü 
            Baristaları ile içecek, yiyecek ve hızlı tüketim malları alanlarını kapsayan kendi ürün sistemini kurmuştur,
             teknoloji vasıtası ile de yüksek kolaylık sağlayan hizmetleri bir araya getirmiştir.
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