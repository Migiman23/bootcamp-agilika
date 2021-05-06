<template>
    <v-container>
        <v-card
            class="card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"
        >
            <nuxt-link
                tag="button"
                class="button-go-back ps-btn d-flex align-center"
                to="/vendor/add/details"
            >
                <v-icon>mdi-arrow-left </v-icon>
                Go Back
            </nuxt-link>
            <v-spacer />
            <h2 class="mb-12">Images & Stock</h2>

            <label
                class="image-drop-container d-flex flex-column align-center justify-center"
                v-if="imagesState.length === 0"
            >
                <input type="file" @change="testImage" style="display: none" />
                <v-icon>mdi-image-search</v-icon>
                <span>Click to upload a photo</span>
            </label>
            <div
                class="image-drop-container-after d-flex align-center justify-start pl-2 pr-2"
                v-else
            >
                <label
                    class="image-drop-after mr-5 d-flex flex-column align-center justify-center"
                    v-if="imagesState.length < 4"
                >
                    <input
                        type="file"
                        @change="testImage"
                        style="display: none"
                    />
                    <v-icon>mdi-image-search</v-icon>
                    <span>Click to upload a photo</span>
                </label>
                <div v-for="(image, index) in imagesState" :key="index">
                    <v-btn
                        class="button-delete-image"
                        icon
                        color="red"
                        @click="deleteImage(image.nameImage, index)"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <img
                        :src="image.urlImage"
                        alt="imageProduct"
                        class="image-into mr-5"
                    />
                </div>
            </div>
            <v-row class="d-flex justify-space-around mt-8 mb-8">
                <v-col cols="5">
                    <v-text-field
                        label="Stock"
                        single-line
                        @input="onChangeStock"
                        :value="stock"
                    />
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        label="SKU"
                        single-line
                        @input="onChangeSKU"
                        :value="sku"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        label="Price"
                        single-line
                        @input="onChangePrice"
                        :value="price"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="column">
                    <button class="ps-btn ps-btn--red button-actions">
                        CANCEL
                    </button>
                </v-col>
                <v-col class="column">
                    <nuxt-link to="/vendor/add/description">
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
    components: {},
    computed: {
        ...mapState({
            imagesState: (state) => state.addProduct.product.images,
            stock: (state) => state.addProduct.product.stock,
            sku: (state) => state.addProduct.product.sku,
            price: (state) => state.addProduct.product.price,
        }),
    },
    methods: {
        testImage(e) {
            this.$store.dispatch('addProduct/actionUploadImage', {
                value: e.target.files[0],
            });
        },
        deleteImage(image, index) {
            this.$store.dispatch('addProduct/actionDeleteImage', {
                value: image,
                index: index,
            });
        },
        onChangeStock(value) {
            this.$store.dispatch('addProduct/actionSetStock', {
                value: value,
            });
        },
        onChangeSKU(value) {
            this.$store.dispatch('addProduct/actionSetSKU', {
                value: value,
            });
        },
        onChangePrice(value) {
            this.$store.dispatch('addProduct/actionSetPrice', {
                value: value,
            });
        },
    },
};
</script>

<style scoped lang="scss">
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
.button-delete-image {
    position: absolute;
    margin-left: 60px;
    min-width: 35px !important;
    max-width: 35px !important;
}
.card-container {
    height: fit-content;
}
.button-actions {
    min-width: 175px;
    max-height: 50px;
}
.image-drop-container {
    width: 440px;
    height: 100px;
    border: 1px dashed #3483fa;
    border-radius: 3px;
    &:hover {
        border: solid 2px #3483fa;
    }
}
.image-drop-container-after {
    width: 440px;
    height: 100px;
}
.image-drop-after {
    width: 90px;
    height: 90px;
    border: 1px dashed #3483fa;
    border-radius: 3px;
    &:hover {
        border: solid 2px #3483fa;
    }
    span {
        text-align: center;
        font-size: 11px;
    }
}
.image-into {
    width: 90px;
    height: 90px;
}
</style>
