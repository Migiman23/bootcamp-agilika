<template lang="html">
    <div>
        <h1>{{ product.title }}</h1>
        <div class="ps-product__meta">
            <p>
                Brand:
                <nuxt-link :to="`/vendor/${product.vendorId}`">
                    <a class="ml-2 text-capitalize">
                        {{ product.brand }}
                    </a>
                </nuxt-link>
            </p>
        </div>
        <h4 class="ps-product__price">${{ getPrice }}</h4>
    </div>
</template>

<script>
import RatingMod from '~/components/elements/RatingMod';
export default {
    name: 'ModuleProductInfo',
    components: { RatingMod },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        getPrice() {
            if (this.product && this.product.price) {
                let num = this.product.price.split('.');
                console.log(num);
                let numRet = ''
                if(num.length > 1) {
                    numRet = num[0] + '.' + num[1].substr(0, 2);
                } else 
                    numRet = num[0]
                numRet = Number(numRet).toLocaleString()
                return numRet;
            } else return '';
        }
    }
};
</script>

<style lang="scss" scoped></style>
