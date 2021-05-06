<template>
    <div class="container mt-4 mb-4">
        <div class="text-center">
            <h2 v-if="!update">Register your store</h2>
            <h2 v-else>Update your store</h2>
        </div>
        <template>
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                        General
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2">
                        Address
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <VendorFormGeneral @accion="stepOne" :update="update" />
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <VendorFormAddress @accion="stepTwo" :update="update" />
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import VendorFormGeneral from './modules/VendorFormGeneral';
import VendorFormAddress from './modules/VendorFormAddress';
// import VendorFormBankAccount from './modules/VendorFormBankAccount';
export default {
    components: {
        VendorFormGeneral,
        VendorFormAddress
        // VendorFormBankAccount
    },
    data() {
        return {
            tabs: null,
            e1: 1,
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        };
    },
    props: {
        update: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        ...mapState({
            userLoged: state => state.auth.user
        })
    },
    methods: {
        stepOne() {
            this.e1 = 2;
        },
        stepTwo() {
            this.e1 = 1;
        } /*  */
    }
};
</script>
