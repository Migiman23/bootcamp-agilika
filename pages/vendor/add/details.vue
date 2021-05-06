<template>
    <v-container>
        <v-card
            class="card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"
        >
            <nuxt-link
                tag="button"
                class="button-go-back ps-btn d-flex align-center"
                to="/vendor/add/title"
            >
                <v-icon>mdi-arrow-left </v-icon>
                Go Back
            </nuxt-link>
            <v-spacer />
            <h2 class="mb-12">Details</h2>

            <v-text-field
                :value="valueBrand"
                @input="onChangeBrand"
                class="mb-5"
                counter="25"
                label="Brand"
                required
            />
            <v-select
                :items="optionCondition"
                label="Condition"
                :value="valueCondition"
                @input="onChangeCondition"
            />
            <v-select
                label="Categories"
                :items="categories"
                :value="valueCategory"
                @input="onChangeCategorie"
            />

            <v-col v-if="productDetails.length < 5">
                <v-form @submit.prevent="addDetails">
                    <v-text-field
                        v-model="textDetails"
                        append-icon="mdi-plus-circle"
                        @click:append="addDetails"
                        label="Add Product Details"
                        single-line
                        solo
                    />
                </v-form>
            </v-col>

            <div v-for="(elem, ind) in productDetails" :key="ind">
                <v-col>
                    <v-text-field
                        :value="elem"
                        label="Solo"
                        solo
                        readonly
                        append-icon="mdi-delete"
                        @click:append="deleteDetails(ind)"
                    />
                </v-col>
            </div>

            <v-spacer />
            <v-row>
                <v-col class="column">
                    <button class="ps-btn ps-btn--red">CANCEL</button>
                </v-col>
                <v-col class="column">
                    <nuxt-link to="/vendor/add/images">
                        <button class="ps-btn">CONTINUE</button>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
    
    data: () => ({
        textDetails: '',
    }),

    computed: {
        ...mapState({
            valueBrand: (state) => state.addProduct.product.brand,
            optionCondition: (state) => state.addProduct.condition,
            valueCondition: (state) => state.addProduct.product.condition,
            valueCategory: state => state.addProduct.product.category,
            productDetails: (state) => state.addProduct.product.details,
            categories: (state) => state.product.categories,
        }),
    },
    methods: {
        onChangeBrand(value) {
            this.$store.dispatch('addProduct/actionSetBrand', {
                value,
            });
        },
        onChangeCondition(value) {
            this.$store.dispatch('addProduct/actionSetCondition', {
                value,
            });
        },
        onChangeCategorie(value) {
            this.$store.dispatch('addProduct/actionSetCategory', {
                value,
            });
        },
        addDetails() {
            this.$store.dispatch('addProduct/actionSetDetails', {
                value: this.textDetails,
            });
            this.textDetails = '';
        },
        deleteDetails(ind) {
            this.$store.dispatch('addProduct/actionDeleteDetails', {
                value: ind,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.card-container {
    height: fit-content;
}
button {
    min-width: 175px;
    max-height: 50px;
    &.button-go-back {
        position: absolute;
        padding: 10px !important;
        left: 25px;
        top: 25px;
        min-width: 110px !important;
    }
}
.column {
    text-align: center;
}
</style>
