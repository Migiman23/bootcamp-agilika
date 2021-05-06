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
 /*     fetch({ store }) {
      /*   return db
            .collection('vendors')
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id;
                    vendors.push(vendor);
                });
                console.log('origin',vendors);
                return store.commit('setVendors', vendors);
            })
            .catch(err => console.log(err)); *
            store.dispatch('vendor/getVendors')
    }, */
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
    } ,
    // created() {
    //     this.$store.dispatch('vendor/getVendors');
    // }
};
</script>

<style lang="scss" scoped></style>
