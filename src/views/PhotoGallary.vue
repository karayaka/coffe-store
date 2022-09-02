<template>
    <div class="row text-center mt-5">
        <v-container class="d-flex justify-center mt-15" v-if="getPageLoading" justify-center>
            <v-progress-circular
            indeterminate
            color="primary"
            >
            </v-progress-circular>
        </v-container>
        <div v-else class="col-md-3 col-sm-6 col-xs-12" v-for="(image, i) in getGallerys" :key="image.id">

            <v-img
                class="white--text align-end"
                
                :src="url+image.url"
                @click="imageClick(i)"
            ></v-img>
                
        </div>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
            >
            <v-carousel   v-model="indis">
                <v-carousel-item
                v-for="(item,i) in getGallerys"
                :key="i"
                :src="url+item.url"
                
                ></v-carousel-item>
            </v-carousel>
            <v-btn
                class="white--text mt-5"
                color="secondary"
                @click="overlay = false"
            >
                Kapat
            </v-btn>
        </v-overlay>
            
    </div>
</template>

<script>
import confing from '@/api/config';
import { mapActions, mapGetters } from 'vuex';
    export default {
        mounted(){
            this.getGallery();
        },
        data:()=>({
            overlay:false,
            zIndex: 0,
            indis:1,
            url:confing.GalleryImages,
            
        }),
        computed:{
            ...mapGetters({
                getGallerys:'gallery/getGallerys',
                getPageLoading:'gallery/getPageLoading'
            }),
        },
        methods:{
            ...mapActions({
                getGallery:'gallery/getGalleryAsync'
            }),
            imageClick(i){
                this.indis=i;
                this.overlay=true;

            }
        }
        
    }
</script>
