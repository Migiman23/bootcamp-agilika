<template lang="html">
    <div class="ps-product-list ps-garden-kitchen ps-section--carousel-outside">
        <div class="ps-container">
            <div class="ps-section__header">
                <h3>Most Selled Products</h3>
                <ul class="ps-section__links">
                    <li>
                        <nuxt-link :to="localePath('/shop')">
                            {{ $t('common.viewAll') }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="ps-section__content">
                <carousel-arrows type="simple" />
                <div
                    class="ps-carousel"
                    v-swiper:consumerElectronicCarousel="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="product in listProductsState"
                        >
                            <ProductDetailList :product="product" />
                        </div>
                    </div>
                    <!--Carousel controls-->
 <!--                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
import ProductDetailList from '../../../elements/product/ProductDetailList';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';

export default {
    components: { CarouselArrows, ProductDetailList },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            carouselSetting: {
                ...carouselFullwidth,
                navigation: {
                    nextEl: '.ps-garden-kitchen .swiper-next',
                    prevEl: '.ps-garden-kitchen .swiper-prev'
                }
            }
        };
    },
    computed: {
        ...mapState({
            listProductsState: state => state.productCrud.allProductsHome,
            collections: state => state.collection.collections
        }),
        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    },
    async fetch() {
        await this.$store.dispatch('productCrud/getAllProducts')
    },
};
</script>
