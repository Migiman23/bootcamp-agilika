<template lang="html">
    <div class="ps-product">
        <div class="ps-product__thumbnail">
            <nuxt-link :to="`/product/${product.id}`">
                <img class='image-product' :src="`${product.images[0].urlImage}`" alt="product-image" />
            </nuxt-link>
            <!-- <div v-if="isSale === true" class="ps-product__badge">sale</div> -->
            <ul v-if="productCrud" class="ps-product__actions">
                <li>
                    <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        @click.prevent="quickviewDialog = true"
                    >
                        <i class="icon-pencil"></i>
                    </a>
                </li>
                <li>
                    <a
                        class="trash"
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        @click.prevent="quickviewDialog = true"
                    >
                        <i class="icon-trash"></i>
                    </a>
                </li>
            </ul>
            <ul v-else class="ps-product__actions">
                <li>
                    <a
                        to="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to cart"
                        @click.prevent="handleAddToCart"
                    >
                        <i class="icon-bag2"></i>
                    </a>
                </li>
                <li>
                    <nuxt-link
                        :to="`/product/${product.id}`"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                    >
                        <i class="icon-eye"></i>
                    </nuxt-link>
                    <!--                     <a
                        :to="`/product/${product.id}`"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                    >
                        <!- @click.prevent="quickviewDialog = true" >
                        <i class="icon-eye"></i>
                    </a> -->
                </li>
            </ul>
        </div>
        <div class="ps-product__container">
            <nuxt-link :to="`/vendor/${product.vendorId}`" class="ps-product__vendor">
                {{ product.marketName }}
            </nuxt-link>
            <div class="ps-product__content">
                <nuxt-link
                    :to="`/product/${product.id}`"
                    class="ps-product__title"
                >
                    {{ product.title }}
                </nuxt-link>
                <div v-if="!productCrud" class="ps-product__rating mt-2">
                    <RatingMod :rating="product.ratingCount" />
                </div>
                <p class="ps-product__price">
                    {{ currency }}{{ product.price }}
                </p>
            </div>
            <div class="ps-product__content hover">
                <nuxt-link :to="`/product/${product.id}`">
                    <a class="ps-product__title">{{ product.title }}</a>
                </nuxt-link>
                <p
                    v-if="product.is_sale === true"
                    class="ps-product__price sale"
                >
                    ${{ product.price }}
                    <del class="ml-2"> ${{ product.sale_price }}</del>
                </p>
                <p v-else class="ps-product__price">${{ product.price }}</p>
            </div>
        </div>
        <v-dialog v-model="quickviewDialog" width="1200">
            <div class="ps-dialog">
                <a
                    class="ps-dialog__close"
                    @click.prevent="quickviewDialog = false"
                >
                    <i class="icon icon-cross"></i>
                </a>
                <product-quickview :product="product" />
            </div>
        </v-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
import RatingMod from '../RatingMod';
import ProductQuickview from '~/components/elements/detail/ProductQuickview';

export default {
    components: { ProductQuickview, RatingMod },
    props: {
        productCrud: Boolean,
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },

    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency
        }),
        baseUrl() {
            return baseUrl;
        },
        isSale() {
            if (this.product.is_sale) {
                return true;
            }
            return false;
        }
    },

    data: () => ({
        productRating: 5,
        productModal: false,
        productPreload: true,
        isImageLoaded: false,
        quickviewDialog: false
    }),
    methods: {
        test(){
            console.log(this.product)
        },
        handleAddToCart() {
            let item = {
                id: this.product.title,
                quantity: 1,
                price: this.product.price,
                image: this.product.images[0].urlImage,
                url: this.product.id,
                vendor: this.product.marketName,
                idVendor: this.product.vendorId
            };

            this.$store.dispatch('cart/addProductToCart', item);
            this.getCartProduct(this.cartItems);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.title} has been added to your cart!`
            });
        },

        handleAddItemToWishlist() {
            let item = {
                id: this.product.id
            };

            this.$store.dispatch('wishlist/addItemToWishlist', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to wishlist!',
                text: `${this.product.title} has been added to your wishlist !`
            });
        },

        handleAddItemToCompare() {
            let item = {
                id: this.product.id
            };
            this.$store.dispatch('compare/addItemToCompare', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to compare!',
                text: `${this.product.title} has been added to your compare !`
            });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            const response = await this.$store.dispatch(
                'product/getCartProducts',
                listOfIds
            );
            if (response) {
                this.$store.commit('cart/setLoading', false);
            }
        }
    }
};
</script>
<style lang="scss" scoped>

.image-product{
    max-height: 208px !important;
}

</style>