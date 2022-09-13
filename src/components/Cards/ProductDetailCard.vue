<template>
    <v-container>
        <v-img
            :src="img"
            class="grey lighten-2"
            height="400"
            width="100%"
        ></v-img>
        <h4>{{title}}</h4>
        <p>{{content}}</p>
    </v-container>
</template>
<script>
export default {
    props:{
        img:{
            type:String,
        },
        title:{
            default:'Başlık',
        },
        content:{
            default:'content'
        }
    },
    data:()=>({

    }),
    
}
</script>
<style lang="">
    
</style>