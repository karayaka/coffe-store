<template>
    <div>
         <v-chip
            v-if="stausType==0"
            label
            class="mt-4 mx-6 text-uppercase"
            color="accent"
            text-color="primary"
            small              
        >
            Bekliyor
        </v-chip>
        <v-chip
            v-else-if="stausType==1"
            label
            class="mt-4 mx-6 text-uppercase"
            color="secondary"
            text-color="primary"
            small              
        >
            Hazırlanıyor
        </v-chip>
        <v-chip
            v-else-if="stausType==2"
            label
            class="mt-4 mx-6 text-uppercase"
            color="info"
            text-color="primary"
            small              
        >
            Hazır
        </v-chip>
        <v-chip
            v-else-if="stausType==3"
            label
            class="mt-4 mx-6 text-uppercase"
            color="success"
            text-color="primary"
            small              
        >
            Teslim Edildi
        </v-chip>
        
    </div>
</template>
<script>
export default {
    props:{
        stausType:{
            default:-1
        }
    }    
}
</script>
