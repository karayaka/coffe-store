<template>
   
    <div v-if="pageLoading" >
        <v-container class="d-flex justify-center" justify-center>
            <v-progress-circular            
              indeterminate
              color="primary"
            >
            </v-progress-circular>
        </v-container>
        
    </div>
    <div v-else>
        <v-card class="pa-5 mt-5">
            <v-card-text>
                <v-form ref="profileForm"  lazy-validation>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="profileModel.name" :rules="[rules.required]" label="Ad"
                                maxlength="20" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="profileModel.surname" :rules="[rules.required]" label="Soyad"
                                maxlength="20" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="profileModel.email" label="Email" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="profileModel.phoneNumber" :rules="emailRules" label="Telefon" required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="profileModel.password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                name="input-10-1" label="Şifre" hint="Minimum 8 Karakter Olmalı" counter
                                @click:append="show1 = !show1">
                            </v-text-field>
                        </v-col>                        
                        <v-spacer></v-spacer>
                        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                            <v-btn x-large block :loading="saveButtonLoading" color="secondary" @click="updateProfileAsync()">
                                Güncelle
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>


    
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data:()=>({
        loginPhoneRules: [
            v => !!v || "Zorunlu Alan",
        ],
        emailRules: [
            v => !!v || "Zorunlu Alan",
        ],
        verificatioRules:[
            v => !!v || "Zorunlu Alan",
            v => (v && v.length == 10) || 'Kod 6 Karakter Olamalı',
        ],
        show1:false,
        rules: {
            required: value => !!value || "Zorunlu Alan",
            min: v => (v && v.length >= 8) || "Minimum 8 Karakter Olmalı"
        }
    }),
    computed:{
        ...mapGetters({
            profileModel:'profile/getProfileModel',
            pageLoading:'profile/getPageLoading',
            saveButtonLoading:'profile/getSaveButtonLoading'
        })
    },
    methods:{
        ...mapActions({
            getProfilePageAsync:'profile/getProfilePage',
            updateProfileAsync:'profile/updateProfile'
        }),
    },
    created(){
        this.getProfilePageAsync();
    }
    
}
</script>
