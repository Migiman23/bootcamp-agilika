<template>
    <div class="user-order-container">
        <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in orders" :key="i">
                <v-expansion-panel-header>
                    <v-row>
                        <v-col cols="6" class="d-flex align-center">
                            <h6>Order N°: {{ item.orderId }}</h6>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-center">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        {{ item.orderStatus }}
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(
                                            status, index
                                        ) in orderStatusSelect"
                                        :key="index"
                                    >
                                        <v-list-item-title>
                                            <v-btn
                                                @click="changeOrderStatusMarket({status, id: item.orderId, buyer: item.buyer})"
                                            >
                                                {{ status }}
                                            </v-btn>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-sheet class="mx-auto" elevation="1" max-width="1200">
                        <v-slide-group class="pa-4" center-active show-arrows>
                            <v-slide-item
                                v-for="(n, index) in item.productos"
                                :key="index"
                            >
                                <v-card
                                    class="ma-4 d-flex flex-column align-center"
                                    height="280"
                                    width="200"
                                >
                                    <img
                                        :src="n.image"
                                        alt="ImageProduct"
                                        class="image-card mt-2 mb-2"
                                    />
                                    <p class="product-title">{{ n.id }}</p>
                                    <p>{{ n.quantity }} Units</p>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: 'MarketOrders',
    props: {
        orders: {
            type: Array,
        },
    },
    data() {
        return {
            orderStatusSelect: ['Confirmed', 'On the Way', 'Delivered'],
        };
    },
    methods: {
        changeOrderStatusMarket(status) {
            this.$store.dispatch('order/actionChangeOrderMarketStatus', status)
        },
    },
};
</script>

<style lang="scss" scoped>
.user-order-container {
    width: 100%;
    padding: 35px;

    .text-container {
        min-height: 50px;
    }
}
.image-card {
    width: 90%;
}
.product-title {
    text-align: center;
}
h6 {
    margin: 0 !important;
}
</style>