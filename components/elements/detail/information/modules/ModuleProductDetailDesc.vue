<template lang="html">
    <div class="ps-product__desc">
        <p>
            Sold By:
            <nuxt-link :to="`/vendor/${product.vendorId}`">
                <strong> {{ product.marketName }}</strong>
            </nuxt-link>
        </p>
        <ul
            class="ps-list--dot"
            v-for="(detail, i) in product.details"
            :key="i"
        >
            <li>{{ detail }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
