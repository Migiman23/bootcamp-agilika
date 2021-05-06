<template lang="html">
    <section class="ps-page--simple">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-order-tracking">
            <div class="container">
                <div class="ps-section__header header-orders">
                    <h3>My Orders</h3>
                </div>
                <div v-if="orders.length > 0">
                    <UserOrder 
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
import UserOrder from '~/components/partials/account/UserOrder';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        BreadCrumb,
        UserOrder,
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
        this.$store.dispatch('order/actionGetUserOrders');
    },
    computed: {
        ...mapState({
            orders: (state) => state.order.orders,
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
