<template>
    <v-container>
        <custom-banner 
            title=""
            :image="require('@/assets/imgs/desing/Straborn.png')"
            
        />
        
        <h1>Strabon</h1>
        <p>
            Gezgin, tarihçi, coğrafyacı ve filozof olarak da bilinen 
            Strabon dünyanın ilk coğrafyacısı olarak kabul edilir. Strabon’un coğrafyası tarihsel bir özellik 
            taşımakla birlikte insanın, kavimlerin ve imparatorlukların fizikî dünya
             ile olan ilişkilerini de belirtir. Sosyal yapıya her zaman değinmiştir. 

        </p>
        <p>
            Amasya ili sınırlarının içinde Anadolu topraklarında M.Ö 63 yılında dünyaya gelmiştir. Amasya'dan ayrılıp 
            Nil boyunca gezmiştir. Kendisi batıda Sardunya'ya, kuzeyde Karadeniz'den güneyde Etiyopya'nın sınırlarına kadar seyahat 
            ettiğini söylemektedir. Daha sonra Roma şehrinde uzun yıllar geçirmiştir. Bu gezintilerinde tarih, coğrafya, felsefe konularında 
            çalışmış, bilgi toplamış ve eserlerini yazmıştır. Bu eserlerden 17 ciltlik Geographumena veya Geographika 
            (Coğrafya) adlı yapıtının büyük bölümü ve 43 ciltlik Historika Hypomnemata (Tarihi Hatıralar) adlı eseri günümüze kadar gelmiştir. 

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