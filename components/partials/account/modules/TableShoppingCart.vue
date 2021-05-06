<template lang="html">
    <table class="table ps-table--responsive ps-table--shopping-cart">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in cartItems" :key="index">
                <td data-label="Product">
                    <product-shopping-cart
                        :product="product ? product : null"
                    />
                </td>
                <td data-label="Price" class="price">
                    $ {{ product ? product.price : '0' }}
                </td>
                <td data-label="Quantity">
                    <div class="form-group--number">
                        <button
                            class="up"
                            @click="aumentarCantidad(product.id, product.price)"
                            :disabled="cartItem(product.id).quantity === 99"
                        >
                            +
                        </button>
                        <button
                            class="down"
                            @click="
                                disminuirCantidad(product.id, product.price)
                            "
                            :disabled="cartItem(product.id).quantity === 1"
                        >
                            -
                        </button>
                        <input
                            class="form-control"
                            type="text"
                            v-model="cartItem(product.id).quantity"
                            disabled
                        />
                    </div>
                </td>
                <td data-label="Total">
                    ${{
                        (cartItem(product.id).quantity * product.price).toFixed(
                            2
                        )
                    }}
                </td>
                <td data-label="Action">
                    <a
                        href="#"
                        @click.prevent="handleRemoveProductFromCart(product)"
                    >
                        <i class="icon-cross"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';

export default {
    name: 'TableShoppingCart',
    components: { ProductShoppingCart },
    data() {
        return {
            productDefault: {
                id: 0,
                quantity: 0,
                price: 0
            }
        };
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts
        })
    },
    methods: {
        cartItem(id) {
            let product = this.cartItems.find(cart => cart.id === id);
            return product ? product : this.productDefault;
        },
        ...mapMutations('cart', [
            'increaseItemQuantity',
            'decreaseItemQuantity'
        ]),
        async loadCartProducts() {
            const cookieCart = this.$cookies.get('cart', { parseJSON: true });
            let queries = [];
            cookieCart.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (this.cartItems && this.cartItems.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        },
        handleRemoveProductFromCart(product) {
            const cartItem = this.cartItems.find(
                item => item.id === product.id
            );
            this.$store.dispatch('cart/removeProductFromCart', cartItem);
            this.loadCartProducts();
        },
        aumentarCantidad(id, price) {
            let item = {
                id: id,
                quantity: 1,
                price: price
            };
            //this.increaseItemQuantity(item);
            this.$store.dispatch('cart/addProductToCart', item);
        },
        disminuirCantidad(id, price) {
            let item = {
                id: id,
                quantity: -1,
                price: price
            };
            //this.decreaseItemQuantity(item);
            this.$store.dispatch('cart/addProductToCart', item);
        }
    }
};
</script>

<style lang="scss" scoped></style>
