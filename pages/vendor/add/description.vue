<template>
    <v-container>
        <v-card
            class="card-container d-flex pt-15 pb-15 pl-15 pr-15 flex-column align-center justify-center mt-15 mb-15"
        >
            <nuxt-link
                tag="button"
                class="button-go-back ps-btn d-flex align-center"
                to="/vendor/add/images"
            >
                <v-icon>mdi-arrow-left </v-icon>
                Go Back
            </nuxt-link>
            <v-spacer />
            <h2 class="mb-12">Description</h2>
            <client-only>
                <quill-editor
                    ref="editor"
                    class="text-editor mb-12"
                    v-model="content"
                    :options="editorOption"
                />
            </client-only>
            <v-row>
                <v-col class="column">
                    <button class="ps-btn ps-btn--red button-actions">
                        CANCEL
                    </button>
                </v-col>
                <v-col class="column">
                    <nuxt-link to="/vendor/product-crud">
                        <button
                            @click="onChangeUploadDescription"
                            class="ps-btn button-actions"
                        >
                            FINISH
                        </button>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import 'firebase/database';
import firebase from 'firebase/app';

export default {
    name: 'quill-example-nuxt',
    async created() {
        if (this.description.length > 0) {
            await fetch(
                this.description
            )
                .then((response) => response.text())
                .then((result) => (this.content = result))
                .catch((error) => console.log('error', error));
        }
    },
    data() {
        return {
            descriptionContent: '',
            content: '',
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        [
                            'blockquote',
                            'code-block',
                            'image',
                            { list: 'ordered' },
                            { list: 'bullet' },
                        ],
                    ],
                },
            },
        };
    },
    methods: {
        onChangeUploadDescription() {
            this.$store.dispatch('addProduct/actionUploadDescription', {
                value: this.content,
                finish: this.product,
                id: this.productId,
            });
        },
    },
    computed: {
        ...mapState({
            product: (state) => state.addProduct.product,
            productId: (state) => state.addProduct.product.id,
            description: (state) => state.addProduct.product.description,
        }),
    },
};
</script>

<style lang="scss" scoped>
.text-editor {
    width: 100%;
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
.button-delete-image {
    position: absolute;
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
</style>
