<template lang="html">
    <div class="header__actions">
        <nuxt-link to="/vendor/admin" v-if="admin">
            <a class="header__extra">
                <i class="icon-chart-bars icono-admin"></i>
            </a>
        </nuxt-link>
        <!-- <nuxt-link to="/account/wishlist">
            <a class="header__extra">
                <i class="icon-heart"></i>
                <span>
                    <i>{{ wishlistTotal ? wishlistTotal : 0 }}</i>
                </span>
            </a>
        </nuxt-link> -->
        <mini-cart />
        <header-user-area />
    </div>
</template>

<script>
import MiniCart from './MiniCart';
import { mapState } from 'vuex';
import HeaderUserArea from '~/components/shared/headers/modules/HeaderUserArea';
export default {
    name: 'HeaderActions',
    components: { HeaderUserArea, MiniCart },
    mounted() {
        if (this.isLoggedIn) {
            this.isAdmin();
        }
    },
    computed: {
        ...mapState({
            total: (state) => state.cart.total,
            wishlistTotal: (state) => state.wishlist.total,
            compareTotal: (state) => state.compare.total,
            isLoggedIn: (state) => state.auth.isLoggedIn,
            admin: state => state.auth.isVendor
        }),
    },
    methods: {
        isAdmin() {
            let userCookies = this.$cookies.get('auth');
            if(userCookies)
                this.$store.dispatch('auth/actionVerifyVendor', userCookies.userUid)
        },
    },
};
</script>

<style lang="scss" scoped>
.icono-admin{
    color: white !important;
    &:hover{
        color: gray !important;
    }
}
</style>
