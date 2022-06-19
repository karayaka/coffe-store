<template>
    <v-card outlined>
        <v-card-title>{{title}}</v-card-title>
        
        <v-divider></v-divider>
        <v-container class="d-flex justify-center" v-if="loading" justify-center>
            <v-progress-circular
            
            indeterminate
            color="primary"
            >
            </v-progress-circular>
        </v-container>
        
        <v-list 
            shaped
            v-else
        >
      
        <v-list-item-group
            v-model="selectedItem"
            color="secondary"

        >
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="onClick(item.id)"
            >
            <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
        
    </v-card>

</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default:"Başlık",
        },
        items:{
            type: Array,            
        },
        loading:{
            type:Boolean,
            default:false,
        }
    },
    data(){
        return{
            selectedItem: 0,

        }
    },
    methods: {
        onClick(ID){
            this.$emit("onChange",ID);
        }
    },
}
</script>

<style>

</style>