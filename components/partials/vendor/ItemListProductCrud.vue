<template>
    <v-card class="d-flex justify-space-between pa-5 mb-3 mt-3">
        <div class="img-container">
            <img :src="image" alt="iageProduct" width="100" />
        </div>
        <div class="text-container d-flex flex-column">
            <h3>{{ title }}</h3>
            <h5>{{ brand }}</h5>
            <h5>STOCK: {{ stock }}</h5>
        </div>
        <div class="buttons-container">
            <nuxt-link to="/vendor/add/title">
                <v-btn @click="editProduct" icon>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </nuxt-link>
            <v-btn icon @click="deleteProduct">
                <v-icon> mdi-delete </v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'ItemListProductCrud',
    props: {
        image: {
            type: String,
        },
        title: {
            type: String,
        },
        brand: {
            type: String,
        },
        stock: {
            type: String,
        },
        id: {
            type: String,
        },
        toEdit: {
            type: Object,
        },
    },
    methods: {
        deleteProduct() {
            this.$store.dispatch('productCrud/deleteProduct', {
                id: this.id,
            });
        },
        editProduct() {
            this.$store.dispatch('addProduct/actionEditProduct', this.toEdit);
        },
    },
};
</script>

<style lang="scss" scoped>
.text-container {
    width: 75%;
    @media (max-width: 960px) {
        width: 60%;
    }
    @media (max-width: 540px) {
        width: 40%;
    }
}
h3 {
    @media (max-width: 960px) {
        font-size: 20px;
    }
    @media (max-width: 540px) {
        font-size: 16px;
    }
}
h5 {
    font-weight: 300 !important;
    @media (max-width: 960px) {
        font-size: 12px;
    }
    @media (max-width: 540px) {
        font-size: 10px;
    }
}
.buttons-container {
    place-self: flex-end;
}
</style>