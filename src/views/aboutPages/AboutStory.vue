<template>
    <v-container>
        <custom-banner 
            title="Hakkımızda Hikayemiz"
            :image="require('@/assets/imgs/desing/aboutbanner.jpeg')"
            
        />
        <p>Nitelikli Arabica Çekirdeklerinden meydana getirdiğimiz blendlerimizden oluşan leziz kahvelerimiz tadıma hazır şekilde sizleri bekliyor.</p>
        <p>Kahve çekirdeklerimizi sizler için en iyi kahve üretim  bölgelerinden getiriyor ve her bir çekirdeğin 
            Arabica çekirdeği olmasını sağlıyoruz.
             Kolombiya, Guatamala, Brezilya, Sumatra,
             Kenya ve Etiyopyadan gelen kahvelerimizi profesyonel baristalaramız
              ile özenle harmanlıyor ve içime hazır şekle getiriyoruz. </p>
        <v-row>
            <v-col cols="12" md="6" sm="12">
                <v-img
                    :src="require('@/assets/imgs/desing/aboutsubbanner.jpeg')"
                    class="grey lighten-2"
                    height="400"
                    width="100%"
                ></v-img>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                <v-img
                    :src="require('@/assets/imgs/desing/aboutsubbanner2.jpeg')"
                    class="grey lighten-2"
                    height="400"
                    width="100%"
                ></v-img>
            </v-col>
        </v-row>
        <h1>Hikayemiz- Hakkımızda</h1>
        <p>Straborn Coffee özgür ruha inanan kahve tutkunu bir ekip tarafından “…Ye, iç, neşelen! Çünkü diğer şeyler bunun kadar değmez.
            ” Sözlerinin sahibi meşhur gezgin coğrafyacı Strabon dan esinlenerek açıldı. Straborn ismi ile de özgürlüğe ve gezginliğe atıf yapıldı. </p>
        <p>
            Straborn Coffee macerayı,gezginliği ve keşfetmeyi seven insanların buluştuğu,
             uzun ve keyifli sohbetler eşliğinde kahvelerini yudumladıkları kafelere dönüşüyor. 
             Bizler içimizdeki bu özgür ruhu ve kahve tutkusunu misafirlerimize aktarmak ve daha dinamik hale getirmek 
             için uğraştık, nihayetinde Straborn Coffee doğdu. Nitelikli kahvelerimiz, pastalarımız ve konsept tasarımlarımız ile 
             bir kültürü var etmeye hazır hale geldik. Tüm inancımız ve heyecanımızla bu keyfi yaşamaya sizleri de davet ediyoruz.
              “Çünkü kuşkusuz rastlantılar insanların düşüncesi ve hareketlerinde çok rol oynar”. Strabon..
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