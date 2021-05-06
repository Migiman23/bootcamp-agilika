<template lang="html">
    <div class="ps-product__content">
        <v-tabs background-color="white" color="warning" class="ps-tab-list">
            <v-tab :ripple="false" tag="li">
                <a class="list-item">Description</a>
            </v-tab>
            <v-tab-item>
                <div class="tab-content">
                    <div v-html="content"></div>
                </div>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import PartialDescription from '~/components/elements/detail/modules/PartialDescription';
export default {
    components: {
        PartialDescription
    },
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
        watch: {
        product(newCount, oldCount) {
            console.log('cambio');
           this.getDescription()
        },
    },
    data() {
        return {
            content: 'nada'
        }
    },
    created() {

    },
    methods: {
        getDescription() {
                            if (this.product && this.product.description && this.product.description.length > 0) {
            fetch(
               this.product.description
            )
                .then((response) => response.text())
                .then((result) => (this.content = result))
                .then((result) => (console.log(result)))
                .catch((error) => console.log('error', error));
        }
        }
    }
};
</script>

<style lang="scss" scoped>
.tab-content {
    padding-top: 30px;
}
li[aria-selected='true'] {
    a {
        color: $color-heading !important;
    }
}
a.list-item {
    position: relative;
    display: block;
    color: #999999;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    text-transform: none;
    @media screen and (min-width: 992px) {
        font-size: 20px;
    }
}
</style>
