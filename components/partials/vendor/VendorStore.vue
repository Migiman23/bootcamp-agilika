<template lang="html">
    <div class="ps-vendor-store">
        <div class="container">
            <div class="ps-section__container">
                <div class="ps-section__left">
                    <VendorProfile :vendor="vendorState"/>
                </div>
                <div class="ps-section__right">
                    <VendorProducts :vendor="vendorState"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import VendorProfile from './modules/VendorProfile';
import ProductDefault from '~/components/elements/product/ProductDefault';

import { relatedProduct } from '~/static/data/product.json';
import VendorProducts from './modules/VendorProducts';

export default {
    name: 'VendorStore',
    components: { VendorProducts, VendorProfile, ProductDefault },
    data() {
        return {
            bestSellerItems: relatedProduct,
            swiperOption: {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.ps-carousel__next',
                    prevEl: '.ps-carousel__prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            }
        };
    },
    computed: {
        ...mapState({
            vendorState: state => state.vendor.vendor
        }),
    }
};
</script>

<style lang="scss" scoped></style>
