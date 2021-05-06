<template lang="html">
    <div class="ps-page--single ps-page--vendor">
        <bread-crumb :breadcrumb="breadCrumb" />
       <!--  <store-list /> -->
       <StoreListVendors />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreList from '../../components/partials/vendor/StoreList';
import StoreListVendors from '../../components/partials/vendor/StoreListVendors';

export default {
    components: {
        StoreList,
        BreadCrumb,
        StoreListVendors
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Store List'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
