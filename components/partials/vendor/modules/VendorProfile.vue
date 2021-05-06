<template lang="html">
    <div class="ps-block--vendor">
        <div class="ps-block__thumbnail">
            <img :src="`${vendor.image}`" alt="market-image" />
        </div>
        <div class="ps-block__container">
            <nuxt-link v-if="$cookies.get('auth') && $cookies.get('auth').userUid === vendor.responsable" clas="aling-right" :to="`/vendor/admin/${vendor.id}`">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on">
                            mdi-wrench
                        </v-icon>
                    </template>
                    <span>Manage options</span>
                </v-tooltip>
            </nuxt-link>
            <div class="ps-block__header">
                <h4>{{ vendor.company }}</h4>
                <!-- <Rating :rating="vendor.rating" class="mt-1" /> -->
                <!-- <p><strong>{{vendor.rating}} Positive</strong> <!- (562 rating) -></p> -->
            </div>
            <div class="ps-block__divider"></div>
            <div class="ps-block__content">
                <p>
                    <strong>{{ vendor.company + ', ' }}</strong
                    >{{
                        vendor.description.length > 150
                            ? vendor.description.substr(0, 150) + '...'
                            : vendor.description
                    }}
                </p>
                <span class="ps-block__divider"></span>
                <!-- <p><strong>Address</strong> {{ vendor.address }}</p>
                <figure>
                    <figcaption>
                        Foloow us on social
                    </figcaption>
                    <ul class="ps-list--social-color">
                        <li>
                            <a class="facebook" href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a class="twitter" href="#">
                                <i class="fa fa-twitter"></i>
                            </a> -->
                        <!-- </li> -->
                        <!--    <li>
                            <a class="linkedin" href="#">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li> -->
                        <!--  <li>
                            <a class="feed" href="#">
                                <i class="fa fa-feed"></i>
                            </a>
                        </li> -->
                    <!-- </ul>
                </figure>
            </div>
            <div class="ps-block__footer">
                <p>
                    Call us directly
                    <strong>{{ vendor.contactNumber }}</strong>
                </p>
                <p>or Or if you have any question</p>
                <a class="ps-btn ps-btn--fullwidth" href="">
                    Contact Seller usuario
                </a>-->
            </div> 
        </div>
    </div>
</template>

<script>
import Rating from '~/components/elements/RatingMod';

export default {
    name: 'VendorProfile',
    components: { Rating },
    props: {
        vendor: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
