<template lang="html">
    <div class="ps-shopping vendor-shop">
        <div class="ps-shopping__header">
            <p>
                <strong>
                    {{ productListState.length }}
                </strong>
                Products found
            </p>
            <!-- <div class="ps-shopping__actions">
                <select class="form-control" data-placeholder="Sort Items">
                    <option>Sort by latest</option>
                    <option>Sort by popularity</option>
                    <option>Sort by average rating</option>
                    <option>Sort by price: low to high</option>
                    <option>Sort by price: high to low</option>
                </select>
                <div class="ps-shopping__view">
                    <p>View</p>
                    <ul class="ps-tab-list">
                        <li :class="gridMode === true ? 'active' : ''">
                            <a href="#">
                                <i class="icon-grid"></i>
                            </a>
                        </li>
                        <li :class="gridMode !== true ? 'active' : ''">
                            <a href="#">
                                <i class="icon-list4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
        <div class="ps-shopping__content">
            <div v-if="gridMode === true" class="ps-shopping-product">
                <div class="row">
                    <div
                        v-for="product in productListState"
                        class="col-lg-3 col-md-4 col-sm-6 col-6 "
                        :key="product.id"
                    >
                        <ProductDefault :product="product" />
                    </div>
                </div>
            </div>
            <div v-else class="ps-shopping-product">
                <!--<ProductWide product="{product}" key="{product.id}" />-->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { relatedProduct } from '~/static/data/product.json';
import ProductDefault from '../../../elements/product/ProductDefault';
export default {
    name: 'VendorProducts',
    components: { ProductDefault },
    fetch () {
        this.$store.dispatch('productCrud/getProductsVendor', this.$route.params.id);
    },
    props: {
        vendor: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            gridMode: true,
            products: relatedProduct
        };
    },
       computed: {
        ...mapState({
            productListState: state => state.productCrud.myProducts
        }),
    },
};
</script>

<style lang="scss" scoped></style>
