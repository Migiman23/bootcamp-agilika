<template lang="html">
    <client-only>
        <v-app>
            <v-main>
                <header-default />
                <header-mobile />
                <nuxt />
                <footer-fullwidth />
                <navigation-list />
                <mobile-drawer />
                <notify />
            </v-main>
        </v-app>
    </client-only>
</template>

<script>
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import Notify from '~/components/elements/commons/notify';
import NavigationList from '~/components/shared/mobile/NavigationList';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';

export default {
    name: 'layout-default',
    components: {
        FooterFullwidth,
        MobileDrawer,
        NavigationList,
        HeaderMobile,
        HeaderDefault,
        Notify
    }
};
</script>

<style lang="scss" scoped></style>
