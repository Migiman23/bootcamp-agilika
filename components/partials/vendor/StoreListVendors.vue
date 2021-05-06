<template>
    <section class="ps-store-list">
        <div class="container">
            <!--    <div class="ps-section__header">
                <h3>Store list</h3>
            </div> -->
            <div class="ps-section__wrapper">
                <!-- <div class="ps-section__left">
                    <aside
                        v-if="show"
                        class="widget widget--vendor"
                    >
                        <nuxt-link :to="`/vendor/${adminId}`"
                            ><h3>My store</h3></nuxt-link
                        >
                    </aside>
                    <aside class="widget widget--vendor">
                        <h3 class="widget-title">Search</h3>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Search..."
                            v-model="searchName"
                            @input="onSearchChange($event)"
                        />
                    </aside>
                </div> -->
                <div class="ps-section__right">
                    <section class="ps-store-box">
                        <div class="ps-section__header">
                            <p>Showing 1 -8 of 22 results</p>
                            <!-- <select
                                class="form-control"
                                :style="{ maxWidth: 200 }"
                                v-model="sort"
                                @input="onSortChange($event)"
                            >
                                <option
                                    key="0"
                                    value="0"
                                    disabled
                                    selected
                                    hidden
                                    >Sort by</option
                                >
                                <option key="1" value="1"
                                    >Sort by Newest: old to news</option
                                >
                                <option key="2" value="2"
                                    >Sort by Newest: New to old</option
                                >
                                <option key="3" value="3"
                                    >Sort by average rating: low to
                                    hight</option
                                >
                                <option key="4" value="4"
                                    >Sort by average rating: hight to
                                    low</option
                                >
                            </select> -->
                        </div>
                        <div class="ps-section__content">
                            <div class="row">
                                <div
                                    class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "
                                    v-for="(vendor, i) in vendors"
                                    :key="i"
                                >
                                    <article class="ps-block--store">
                                        <div
                                            class="ps-block__thumbnail bg--cover"
                                            v-bind:style="{
                                                height: 'auto',
                                                backgroundImage: vendor.image
                                                    ? 'url(' +
                                                      vendor.image +
                                                      ')'
                                                    : 'url(/img/404.jpg)'
                                            }"
                                        ></div>

                                        <div class="ps-block__content">
                                            <div class="ps-block__author">
                                                <nuxt-link
                                                    class="ps-btn"
                                                    :to="`/vendor/${vendor.id}`"
                                                >
                                                    Visit Store
                                                </nuxt-link>
                                            </div>
                                            <h4>
                                                {{ vendor.company }}
                                            </h4>
                                            <!-- <Rating
                                                :rating="
                                                    vendor.rating
                                                        ? vendor.rating
                                                        : 0
                                                "
                                            /> -->
                                            <p>
                                                {{
                                                    vendor.address +
                                                        ', ' +
                                                        vendor.state
                                                }}
                                            </p>
                                            <ul class="ps-block__contact">
                                                <li>
                                                    <i
                                                        class="icon-envelope"
                                                    ></i>
                                                    <span>
                                                        {{ vendor.email }}
                                                    </span>
                                                </li>
                                                <li>
                                                    <i
                                                        class="icon-telephone"
                                                    ></i>
                                                    {{ vendor.contactNumber }}
                                                </li>
                                            </ul>
                                            <div class="ps-block__inquiry">
                                                <a href="#">
                                                    <i
                                                        class="icon-question-circle"
                                                    ></i>
                                                    inquiry
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="ps-pagination">
                        <div class="text-xs-center ">
                            <v-pagination
                                v-model="page"
                                :length="totalPages"
                                :total-visible="8"
                                @input="onPageChange"
                            ></v-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Rating from '../../elements/RatingMod';

export default {
    components: { Rating },
    data() {
        return {
            page: 1,
            vendors: [],
            sort: 0,
            searchName: '',
            adminId: this.$cookies.get('auth').userUid
        };
    },
    computed: {
        ...mapState({
            vendorsState: state => state.vendor.vendors,
            vendorState: state => state.vendor.vendor,
            totalPages: state => state.vendor.totalPages,
            pageState: state => state.vendor.page,
            sortState: state => state.vendor.sortDefault,
            userLoged: state => state.auth.user,
            credentials: state => state.auth.credentials
        }),
        ...mapGetters('vendor', ['getByPag']),
        show() {
            console.log('cred', this.credentials);
            if(this.credentials && this.credentials.isVendor) {
                return true
            } else return false
        }
    },
    methods: {
        ...mapMutations('vendor', ['setPage', 'setSort']),
        onPageChange() {
            this.vendors = this.getByPag(this.page);
            this.setPage(this.page);
        },
        async onSortChange(event) {
            let sortObj = null;
            switch (event.target.value) {
                case '1':
                    sortObj = {
                        sort: 'date',
                        type: 'asc'
                    };
                    break;
                case '2':
                    sortObj = {
                        sort: 'date',
                        type: 'desc'
                    };
                    break;
                case '3':
                    sortObj = {
                        sort: 'rating',
                        type: 'asc'
                    };
                    break;
                case '4':
                    sortObj = {
                        sort: 'rating',
                        type: 'desc'
                    };
                    break;
                default:
                    sortObj = this.sortState;
            }
            this.setSort(sortObj);
            await this.$store.dispatch('vendor/getSortVendors');
            //Se inicia la paginación en 1
            this.vendors = this.getByPag(1);
            this.setPage(1);
            this.page = 1;
            this.searchName = '';
        },
        async onSearchChange(event) {
            console.log(event.target.value);
            if (event.target.value.length > 0) {
                await this.$store.dispatch(
                    'vendor/getByName',
                    event.target.value
                );
                this.vendors = this.getByPag(1);
                this.setPage(1);
                this.page = 1;
            } else {
                await this.$store.dispatch('vendor/getSortVendors');
                //Se inicia la paginación en 1
                this.vendors = this.getByPag(1);
                this.setPage(1);
                this.page = 1;
            }
            // Se inicializa el filtro, sino se queda "colgado"
            this.setSort(this.sortState);
            this.sort = 0;
        }
    },
    async created() {
        //Verificamos si usuario es vendedor
        let userCookies = this.$cookies.get('auth');
        if (userCookies)
            this.$store.dispatch(
                'vendor/searchStoreVendor',
                userCookies.userUid
            );

        await this.$store.dispatch('vendor/getVendors');
        this.page = this.pageState;
        this.vendors = this.getByPag(this.pageState);
    }
};
</script>

<style></style>
