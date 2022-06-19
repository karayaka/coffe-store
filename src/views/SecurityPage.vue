<template>
    <v-layout align-center justify-center class="mt-15">
        <v-flex xs12 sm9 md5>
            <v-tabs v-model="tab" show-arrows background-color="primary" icons-and-text dark grow>
                <v-tabs-slider color="primary"></v-tabs-slider>
                <v-tab v-for="i in tabs" :key="i.id">
                    <v-icon large>{{ i.icon }}</v-icon>
                    <div class="caption py-1">{{ i.name }}</div>
                </v-tab>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="loginForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginModel.phoneNumber" :rules="loginPhoneRules" label="Telefon"
                                            required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginModel.password" :append-icon="show1 ? 'eye' : 'eye-off'"
                                            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                            name="input-10-1" label="Şifre" hint="Minimum 8 Karakter Olmalı" counter
                                            @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                        <v-btn x-large block :disabled="!valid" :loading="loginLoading" color="secondary" @click="login"> Giriş
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="registerForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="registerModel.name" :rules="[rules.required]" label="Ad"
                                            maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="registerModel.surname" :rules="[rules.required]" label="Soyad"
                                            maxlength="20" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="registerModel.email" label="Email" required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="registerModel.phoneNumber" :rules="emailRules" label="Telefon" required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="registerModel.password"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                            name="input-10-1" label="Şifre" hint="Minimum 8 Karakter Olmalı" counter
                                            @click:append="show1 = !show1">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field block v-model="registerModel.verify"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'"
                                            name="input-10-1" label="Şifre Doğrula" counter
                                            @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                        <v-btn x-large block :disabled="!valid" :loading="loginLoading" color="secondary" @click="register">
                                            Kayıt Ol
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="forgatPasswordForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="forgatPhoneNumber" :rules="loginPhoneRules" label="Telefon"
                                            required>
                                        </v-text-field>
                                    </v-col>                                    
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                        <v-btn x-large block :disabled="!valid" color="secondary" @click="forgatPassword"> Gönder
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-flex>
      
    </v-layout>
    
</template>
<script>
import { mapMutations ,mapActions,mapGetters} from 'vuex';
import router from '@/router';
export default {
    computed: {
        ...mapGetters({
            loginLoading: "getLoginLoading",
        }),
        passwordMatch() {
            return () => this.registerModel.password === this.registerModel.verify || "Şifreler Eşit Olmalı";
        }
    },
    methods: {
        ...mapMutations({
            showErrorMessage: "globalMessage/showErrorMessage",
        }),
        ...mapActions({
            loginAsync: "login",
            registerAsync: "register",
        }),
        async login() {
            if (this.$refs.loginForm.validate()) {
                //apiler
                var result = await this.loginAsync(this.loginModel);
                if (result.type == 2) {
                    router.push("/products");
                }
            }
        },
        async register() {
            if (this.$refs.registerForm.validate()) {
                var result = await this.registerAsync(this.registerModel);
                console.log(result);
                if (result.type == 2) {
                    this.confirmeCode = result.data.confirmeCode;
                }
            }
        },
        forgatPassword() {
            if (this.$refs.forgatPasswordForm.validate()) {
                console.log(this.forgatPhoneNumber);
            }
        }
    },
    data: () => ({
        tab: 0,
        tabs: [
            { id: 1, name: "Giriş", icon: "mdi-account" },
            { id: 2, name: "Kayıt", icon: "mdi-account-outline" },
            { id: 3, name: "Şifremi Unuttum", icon: "mdi-email" }
        ],
        valid: true,
        confirmeCode: "",
        loginModel: {
            phoneNumber: "",
            password: "",
        },
        registerModel: {
            name: "",
            surname: "",
            phoneNumber: "",
            password: "",
            verify: "",
            email: ""
        },
        forgatPhoneNumber: "",
        loginPhoneRules: [
            v => !!v || "Zorunlu Alan",
        ],
        emailRules: [
            v => !!v || "Zorunlu Alan",
        ],
        show1: false,
        rules: {
            required: value => !!value || "Zorunlu Alan",
            min: v => (v && v.length >= 8) || "Minimum 8 Karakter Olmalı"
        }
    }),    
}
</script>
