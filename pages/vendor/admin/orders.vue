<template lang="html">
    <section class="ps-page--simple">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-order-tracking">
            <div class="container">
                <div class="ps-section__header header-orders">
                    <h3>Market Orders</h3>
                </div>
                <div v-if="orders.length > 0">
                    <MarketOrders 
                        :orders="orders"
                    />
                </div>
                <div v-else>
                    No Orders
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MarketOrders from '~/components/partials/vendor/MarketOrders';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        BreadCrumb,
        MarketOrders,
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'Order Tracking',
                },
            ],
        };
    },
    created(){
        this.$store.dispatch('order/actionGetMarketOrders');
    },
    computed: {
        ...mapState({
            orders: (state) => state.order.marketOrders,
        }),
    },
};
</script>

<style lang="scss" scoped>
.header-orders{
    margin: 0 !important;
    padding: 0 !important;
}
</style>
