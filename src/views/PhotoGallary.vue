<template>
    <div class="row text-center mt-5">
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="(image, i) in images" :key="image.id">

                <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="image.src"
                    @click="imageClick(i)"
                ></v-img>
                    
            </div>
            <v-overlay
                :z-index="zIndex"
                :value="overlay"
                >
                <v-carousel  style="height:100%" v-model="indis">
                    <v-carousel-item
                    v-for="(item,i) in images"
                    :key="i"
                    :src="item.src"
                    
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
    export default {
        data:()=>({
            overlay:false,
            zIndex: 0,
            indis:1,
             images:[
                {
                    id:1,
                    name:'BLACK TEE',
                    type:'Jackets',
                    price:'18.00',
                    src:require('../assets/imgs/shop/1.jpg')
                },
                {
                    id:2,
                    name:'WHITE TEE',
                    type:'Polo',
                    price:'40.00',
                    src:require('../assets/imgs/shop/2.jpg')
                },
                {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'25.00',
                    src:require('../assets/imgs/shop/3.jpg')
                },
                {
                    id:4,
                    name:'SKULL TEE',
                    type:'Jackets',
                    price:'30.00',
                    src:require('../assets/imgs/shop/4.jpg')
                },
                {
                    id:5,
                    name:'MANGO WINTER',
                    type:'Sweaters',
                    price:'50.00',
                    src:require('../assets/imgs/shop/5.jpg')
                },
                {
                    id:6,
                    name:'SHIRT',
                    type:'Denim',
                    price:'34.00',
                    src:require('../assets/imgs/shop/6.jpg')
                },
                {
                    id:7,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'38.00',
                    src:require('../assets/imgs/shop/7.jpg')
                },
                {
                    id:8,
                    name:'COATS',
                    type:'Jackets',
                    price:'25.00',
                    src:require('../assets/imgs/shop/8.jpg')
                },{
                    id:9,
                    name:'MANGO WINTER',
                    type:'Sweaters',
                    price:'50.00',
                    src:require('../assets/imgs/shop/9.jpg')
                },
                {
                    id:10,
                    name:'SHIRT',
                    type:'Denim',
                    price:'34.00',
                    src:require('../assets/imgs/shop/10.jpg')
                },
                {
                    id:11,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'38.00',
                    src:require('../assets/imgs/shop/11.jpg')
                },
                {
                    id:12,
                    name:'COATS',
                    type:'Jackets',
                    price:'25.00',
                    src:require('../assets/imgs/shop/12.jpg')
                },
                {
                    id:15,
                    name:'COATS',
                    type:'Jackets',
                    price:'25.00',
                    src:require('../assets/imgs/shop/15.jpeg')
                }
            ]
        }),
        methods:{
            imageClick(i){
                this.indis=i;
                this.overlay=true;

            }
        }
        
    }
</script>
