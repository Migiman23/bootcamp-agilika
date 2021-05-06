<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
        <vendor-store />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorStore from '~/components/partials/vendor/VendorStore';

export default {
    fetch() {
        this.$store.dispatch('vendor/getVendor', this.$route.params.id);
       // this.$store.dispatch('productCrud/getProductsToFirestore', null);
    },
    components: {
        BreadCrumb,
        VendorStore
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Vendor store'
                }
            ]
        };
    } /* ,
    created() {
        this.$store.dispatch('vendor/getVendors');
    } */
    // Eliminar vendor-store
};
</script>

<style lang="scss" scoped></style>
