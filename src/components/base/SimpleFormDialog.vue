<template>
    <v-row justify="center">
        <v-dialog
          v-model="modal"
          persistent
          max-width="600px"
        >
        <v-card>
            <v-card-title>{{title}}</v-card-title>
            <v-card-text>
              <slot name="form"></slot>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="action"></slot>
          </v-card-actions>
        </v-card>
  
        </v-dialog>
    </v-row>
  </template>
  
  <script>
  export default {
      props:{
          dialogModel:{
            default:false,
            type: Boolean,
          },
          title:{
              default:"Form",
          },
      },
      data(){
          return{
            modal:false,
          
          }
      },
      watch:{
        dialogModel(payload){
          this.modal=payload;
        },
        
      }
  }
  </script>
  
  <style>
  </style>