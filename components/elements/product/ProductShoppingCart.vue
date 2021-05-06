<template lang="html">
    <div class="ps-product--cart">
        <div class="ps-product__thumbnail">
            <nuxt-link :to="`/product/${product.url}`">
                <img
                    :src="product.image"
                    alt="martfury"
                />
            </nuxt-link>
        </div>
        <div class="ps-product__content">
            <nuxt-link :to="`/product/${product.url}`">
                <a class="ps-product__title">{{ product.id }}</a>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
export default {
    name: 'ProductShoppingCart',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        baseUrl() {
            return baseUrl;
        }
    }
};
</script>

<style lang="scss" scoped></style>
