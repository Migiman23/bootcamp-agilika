<template>
    <v-container>
        <v-card
            class="card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"
        >
            <v-spacer></v-spacer>
            <h2 class="mb-12">Add Title</h2>
            <textarea
                class="form-control mb-8"
                name="add-product-title"
                cols="5"
                rows="1"
                maxlength="60"
                :value="value"
                @input="onChange"
            />
            <v-spacer />
            <v-row>
                <v-col class="column">
                    <button class="ps-btn ps-btn--red">CANCEL</button>
                </v-col>
                <v-col class="column">
                    <nuxt-link to="/vendor/add/details">
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
    created () {
        this.$store.dispatch('product/getCategories');
    },
    computed: {
        ...mapState({
            value: (state) => state.addProduct.product.title,
        }),
    },
    methods: {
        onChange(e) {
            this.$store.dispatch('addProduct/actionSetProduct', {
                name: 'title',
                value: e.target.value,
            });
        },
    },
};
</script>

<style scoped>
.card-container {
    height: fit-content;
}
textarea {
    text-align: center;
}
button {
    min-width: 175px;
    max-height: 50px;
}
.column {
    text-align: center;
}
</style>
