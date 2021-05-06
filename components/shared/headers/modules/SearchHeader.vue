<template lang="html">
    <form
        class="ps-form--quick-search"
        @submit.prevent="handleSubmit"
        v-click-outside="handleClickOutside"
    >
        <div class="ps-form__categories">
            <select
                class="form-control"
                v-model="category"
                @change="setCategoryOption()"
            >
                <option v-for="item in categorias" :value="{ item }">
                    {{ item }}
                </option>
            </select>
        </div>
        <div class="ps-form__input">
            <input
                v-model="searchText"
                class="form-control"
                type="text"
                placeholder="I'm shopping for..."
                @keyup="handleSearch"
                v-uppercase
            />
            <v-progress-circular
                v-if="isLoading"
                indeterminate
                color="#fcb800"
                width="2"
                size="16"
            />
        </div>

        <button class="button-search-header">
            {{ $t('menu.navigationList.search') }}
        </button>
        <div
            :class="
                `ps-panel--search-result ${
                    isSearching === true && isLoading === false ? 'active' : ''
                }`
            "
        >
            <div class="ps-panel__content">
                <template v-if="products && products.length > 0">
                    <product-result
                        v-for="product in products"
                        :product="product"
                        :key="product.id"
                    />
                </template>
                <!--  <template v-if="searchResults && searchResults.length > 0">
                    <product-result
                        v-for="product in searchResults"
                        :product="product"
                        :key="product.id"
                    />
                </template> -->
                <span v-else>Not found! Try with another keyword.</span>
            </div>
            <div class="ps-panel__footer text-center">
                <nuxt-link to="/shop">
                    See all products
                </nuxt-link>
            </div>
        </div>
    </form>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import { db, storage } from '@/plugins/firebase.js';
import ProductResult from '~/components/elements/product/ProductResult';

Vue.directive('uppercase', {
    update(el) {
        el.value = el.value.toUpperCase();
    }
});

export default {
    name: 'SearchHeader',
    components: { ProductResult },
    data() {
        return {
            categorias: [
                'All Categories',
                'Cameras y Photography',
                'CellPhones, SmartWatches y Accessories',
                'Computers y Accessories',
                'Surveillance y Smart Home Electronics',
                'Vehicle Electronics y GPS',
                'Video Games',
                'Virtual Reality Headsets, Parts y Accessories'
            ],
            isSearching: false,
            isLoading: false,
            searchText: '',
            category: {
                item: 'All Categories'
            }
        };
    },
    computed: {
        ...mapState({
            products: state => state.search.products,
            categoryState: state => state.search.categoryState,
            nameState: state => state.search.nameState
        })
    },

    methods: {
        ...mapMutations('search', ['setCategory', 'setName']),
        async handleSearchProduct(e) {
            if (e.target.value !== '') {
                this.isSearching = true;
                const query = {
                    title_contains: e.target.value
                };
                this.isLoading = true;
                const result = await this.$store.dispatch(
                    'product/getProductByKeyword',
                    query
                );
                if (result) {
                    setTimeout(
                        function() {
                            this.isLoading = false;
                        }.bind(this),
                        500
                    );
                }
            } else {
                this.isSearching = false;
            }
        },
        async handleSearch(e) {
            this.setName(this.searchText);
            if (e.target.value === '') {
                this.isSearching = false;
            }
        },
        handleClickOutside() {
            this.setCategory('All Categories');
            this.setName('');
            this.searchText = '';
            this.category.item = 'All Categories';
            this.isSearching = false;
            this.isLoading = false;
        },
        setCategoryOption() {
            console.log(this.category);
            this.setCategory(this.category.item);
        },
        async handleSubmit() {
            this.isSearching = true;
            this.isLoading = true;

            console.log(this.category.item);
            if (
                this.category.item !== 'All Categories' &&
                this.category.item != ''
            ) {
                await this.$store.dispatch('search/getByCat');
            } else {
                this.setCategory('All Categories');
                await this.$store.dispatch('search/getAll');
            }

            if (this.products.length > 0) {
                setTimeout(
                    function() {
                        this.isLoading = false;
                    }.bind(this),
                    500
                );
            } else this.isLoading = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-form--quick-search {
    .ps-form__input {
        position: relative;
        width: 100%;
        .v-progress-circular {
            @include vertical-align();
            right: 10px;
            z-index: 20;
        }
    }
}
.button-search-header {
    background-color: grey !important;
}
</style>
