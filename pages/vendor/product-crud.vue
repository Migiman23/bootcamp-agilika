<template lang="html">
    <div class="ps-compare ps-section--shopping">
        <div class="container">
            <div class="ps-section__header">
                <h1>Manage Product</h1>
                <nuxt-link to="/vendor/add/title">
                    <button class="ps-btn mt-4">Add Product</button>
                </nuxt-link>
            </div>

            <v-container>


             <v-data-iterator
                :items-per-page.sync="itemsPerPage"
                :page.sync="page"
                :sort-by="sortBy.toLowerCase()"
                :sort-desc="sortDesc"
                hide-default-footer
                :items="myProducts"
                :search="search"
            >
            <template v-slot:header>

                        <v-text-field
                        v-model="search"
                        clearable
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Search"
                    ></v-text-field>

            </template>
            <template v-slot:default="props">
                <div>
                    <ItemListProductCrud
                        v-for="(products, index) in props.items"
                        :key="index"
                        :image="products.images[0].urlImage"
                        :title="products.title"
                        :brand="products.brand"
                        :stock="products.stock"
                        :id="products.id"
                        :toEdit="products"
                    />
                </div>
            </template>
                        
                        <template v-slot:footer>
                <v-pagination v-model="page" :length="2" circle></v-pagination>
            </template>
             
            </v-data-iterator>

            </v-container>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductMiniCart from '~/components/elements/product/ProductMiniCart';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import { getListOfProductId } from '~/utilities/product-helper';
import ProductDefault from '~/components/elements/product/ProductDefault';
import ItemListProductCrud from '~/components/partials/vendor/ItemListProductCrud';
import firebase from 'firebase/app';
export default {
    data() {
        return {
            itemsPerPageArray: [5, 10, 15],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 2,
            sortBy: 'title',
            keys: ['title', 'brand', 'stock'],
        };
    },
    components: {
        ProductShoppingCart,
        ProductMiniCart,
        ProductDefault,
        ItemListProductCrud,
    },
    created() {
        this.$store.dispatch('productCrud/getProductsToFirestore');
        this.$store.dispatch('shop/getUserOrders')
    },
    computed: {
        ...mapState({
            total: (state) => state.compare.total,
            compareItems: (state) => state.product.compareItems,
            myProducts: (state) => state.productCrud.myProducts,
        }),
        paginationLenght() {
            if (this.total % 12 === 0) {
                return parseInt(this.total / this.pageSize);
            } else {
                return parseInt(this.total / 12 + 1);
            }
        },
        numberOfPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        filteredKeys() {
            return this.keys.filter((key) => key !== 'title');
        },
    },
    methods: {
        handleRemoveItemFromCompareList(product) {
            this.$store.dispatch('compare/removeItemFromCompare', product);
            this.loadCompareProducts();
            this.$notify({
                group: 'addCartSuccess',
                title: 'Remove Item!',
                text: `${product.title} has been removed from your wishlist!`,
            });
        },
        async loadCompareProducts() {
            const compareItems = this.$cookies.get('compare', {
                parseJSON: true,
            });
            if (compareItems) {
                const queries = getListOfProductId(compareItems.items);
                if (queries.length > 0) {
                    const response = await this.$store.dispatch(
                        'product/getCompareProducts',
                        queries
                    );
                }
            }
        },
        async handleChangePagination(value) {
            const params = {
                _start: value === 1 ? 0 : (value - 1) * 12,
                _limit: 12,
            };
            await this.$store.dispatch('product/getProducts', params);
        },
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number;
        },
    },
};
</script>

<style lang="scss" scoped>
#table-compare {
    tbody {
        tr {
            td {
                width: 100px;
                &:first-child {
                    width: 400px;
                }
            }
        }
    }
}
</style>