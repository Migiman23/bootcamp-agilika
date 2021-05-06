<template>
    <v-container class="mt-4 mb-4">
        <h2 class="text-center">Manage store</h2>
        <br />
        <br />
        <v-row dense justify="center" class="mb-4 mt-5">
            <v-col cols="2">
                <nuxt-link
                    clas="aling-right"
                    :to="`/vendor/product-crud`"
                >
                    <v-card color="#f5f5f5">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline">
                                    All products
                                </v-card-title>
                            </div>
                            <v-avatar class="ma-3" size="50" tile>
                                <v-icon x-large> mdi-dialpad</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                </nuxt-link>
            </v-col>
            <v-col cols="2">
                <nuxt-link clas="aling-right" :to="`/vendor/admin/orders`">
                    <v-card color="#f5f5f5">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline">
                                    Orders
                                </v-card-title>
                            </div>
                            <v-avatar class="ma-3" size="50" tile>
                                <v-icon x-large> mdi-dialpad</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                </nuxt-link>
            </v-col>
            <!-- <v-col cols="2">
                <nuxt-link clas="aling-right" :to="`/vendor/admin/shipments`">
                    <v-card color="#f5f5f5">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline">
                                    Shipments
                                </v-card-title>
                            </div>
                            <v-avatar class="ma-3" size="50" tile>
                                <v-icon x-large> mdi-dialpad</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                </nuxt-link>
            </v-col> -->
        </v-row>
        <v-row dense justify="center" class="mb-4">
            <v-col cols="2">
                <!--  <v-card color="#f5f5f5">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="headline">
                                Account
                            </v-card-title>

                           <!-  <v-card-subtitle>Listen</v-card-subtitle>

                            <v-card-actions>
                                <v-btn text>
                                    Listen Now
                                </v-btn>
                            </v-card-actions> ->
                        </div>
                        <v-avatar class="ma-3" size="50" tile>
                            <v-icon x-large> mdi-dialpad</v-icon>
                        </v-avatar>
                    </div>
                </v-card> -->
            </v-col>
            <v-col cols="2">
                <nuxt-link
                    clas="aling-right"
                    :to="`/vendor/admin/general/${$route.params.id}`"
                >
                    <v-card color="#f5f5f5">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline">
                                    General
                                </v-card-title>
                            </div>
                            <v-avatar class="ma-3" size="50" tile>
                                <v-icon x-large> mdi-dialpad</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                </nuxt-link>
            </v-col>
        </v-row>
        <br /><br /><br /><br />
    </v-container>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People'
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding'
            }
        ]
    })
};
</script>

<style>
.v-card {
    background-color: whitesmoke;
}
</style>
