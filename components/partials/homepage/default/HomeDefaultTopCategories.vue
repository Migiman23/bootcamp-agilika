<template lang="html">
    <div class="ps-top-categories">
        <div class="ps-container">
            <h3>{{ $t('autopart.topCategories') }}</h3>
            <div class="row categories-container">
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Cameras & photography</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Cell Phones, Smart Watches & Accessories</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Computers & Accessories</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Surveillance & Smart Home Electronics</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Vehicle Electronics & GPS</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Video Games</p>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 category-home-default">
                    <div class="ps-block--category">
                        <nuxt-link to="/shop">
                            <a class="ps-block__overlay"></a>
                        </nuxt-link>
                        <p>Virtual Reality Headsets, Parts & Accessories</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeDefaultTopCategories'
};
</script>

<style lang="scss" scoped>
.category-home-default{
    min-height: 100px !important;
}
    .ps-block--category{
        min-height: 50px !important;
    }
    .categories-container{
        display: flex;
        justify-content: space-around;
        min-height: 100px !important;
    }
</style>
