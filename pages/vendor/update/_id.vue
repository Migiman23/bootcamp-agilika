<template>
    <div>
        <VendorRegister :update="true" :vendorProp="vendorProp" />
    </div>
</template>

<script>
import VendorRegister from '~/components/partials/vendor/VendorRegister';
import { db, storage } from '@/plugins/firebase.js'
export default {
    // asyncData({isDev, route, store, env, params, query, req, res, redirect, error})
    fetch() {
        let userCookies = this.$cookies.get('auth');
            if (userCookies) { //cambiar a id de la tienda
                this.$store.dispatch(
                    'vendor/getVendor',
                    this.$route.params.id
                );
            }
    },
    components: {
        VendorRegister
    },
    data() {
        return {
            vendorProp: {}
        }
    }
};
</script>
