<template lang="html">
    <div class="ps-product__shopping extend">
        <div class="ps-product__btn-group">
            <figure>
                <figcaption>Quantity</figcaption>
                <div class="form-group--number">
                    <button class="up" @click="aumentar">
                        <i class="fa fa-plus"></i>
                    </button>
                    <button class="down" @click="disminuir">
                        <i class="fa fa-minus"></i>
                    </button>
                    <input
                        class="form-control"
                        type="text"
                        v-model.number="cantidad"
                        disabled
                    />
                </div>
            </figure>
            <a
                class="ps-btn ps-btn--black"
                href="#"
                @click.prevent="handleAddToCart"
            >
                Add to cart
            </a>
        </div>
        <a class="ps-btn" href="#">
            Buy Now
        </a>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ModuleProductShoppingExtended',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            cantidad: 1
        };
    },
    methods: {
        aumentar() {
            if (this.cantidad < 99) this.cantidad += 1;
        },
        disminuir() {
            if (this.cantidad > 1) this.cantidad -= 1;
        },
        handleAddToCart() {
            let item = {
                id: this.product.id,
                quantity: this.cantidad,
                price: this.product.price,
                userId: this.credentials.userUid
            };
            this.$store.dispatch('cartDb/addProductToCart', item);
            this.$store.dispatch('cart/addProductToCart', item);
            this.getCartProduct(this.cartItems);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.title} has been added to your cart!`
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
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => state.app.currency,
            credentials: state => state.auth.credentials
        })
    }
};
</script>

<style lang="scss" scoped></style>
