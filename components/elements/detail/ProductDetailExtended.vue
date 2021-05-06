<template lang="html">
    <div class="ps-product--detail ps-product--fullwidth">
        <div class="ps-product__header">
            <thumbnail-count-down :product="product" />
            <information-extended :product="product" />
        </div>
        <DescriptionDetail :product="product" />
    </div>
</template>

<script>
import DescriptionDetail from '~/components/elements/detail/modules/DescriptionDetail';

import ThumbnailCountDown from '~/components/elements/detail/thumbnail/ThumbnailCountDown';
import InformationExtended from '~/components/elements/detail/information/InformationExtended';
export default {
    name: 'ProductDetailExtended',
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    components: {
        InformationExtended,
        ThumbnailCountDown,
        DescriptionDetail
    },
    computed: {
    }
};
</script>

<style lang="scss" scoped></style>
