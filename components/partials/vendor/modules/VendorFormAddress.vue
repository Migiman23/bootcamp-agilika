<template>
    <form @submit.prevent="changeVendor" class="ps-form--edit-address mt-4">
        <div class="ps-form__content">
            <div class="form-group">
                <label> Country <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.country.$model"
                    :class="{ 'is-invalid': $v.vendor.country.$error }"
                />
                <p class="text-danger mt-1" v-if="$v.vendor.country.$error">
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> Street Address <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.address.$model"
                    :class="{ 'is-invalid': $v.vendor.address.$error }"
                />
                <p class="text-danger mt-1" v-if="$v.vendor.address.$error">
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> State <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.state.$model"
                    :class="{ 'is-invalid': $v.vendor.state.$error }"
                />
                <p class="text-danger mt-1" v-if="$v.vendor.state.$error">
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> Postcode <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.postcode.$model"
                    :class="{ 'is-invalid': $v.vendor.postcode.$error }"
                />
                <p class="text-danger mt-1" v-if="$v.vendor.postcode.$error">
                    This field is required
                </p>
            </div>
            <v-btn color="primary" @click="back" class="float-left">
                Back
            </v-btn>
            <div class="float-right">
                <v-btn color="primary" type="submit">
                    Save
                </v-btn>

                <v-btn color="warning">Cancel</v-btn>
            </div>

            <!-- <div class="form-group submit text-right">
                <button class="ps-btn">Save</button>
            </div> -->
        </div>
    </form>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import { mapState, mapGetters } from 'vuex';
export default {
    data() {
        return {
            vendor: {
                country: '',
                address: '',
                state: '',
                postcode: ''
            }
        };
    },
    props: {
        update: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        vendorState(newCount, oldCount) {
            this.llenarForm();
        }
    },
    computed: {
        ...mapState({
            vendorState: state => state.vendor.vendor
        }),
        ...mapGetters('vendor', ['getByPag', 'getVendor'])
    },
    validations: {
        vendor: {
            country: {
                required
            },
            address: {
                required
            },
            state: {
                required
            },
            postcode: {
                required
            }
        }
    },
    methods: {
        llenarForm() {
            this.vendor = {
                country:
                    this.vendorState && this.vendorState.country !== ''
                        ? this.vendorState.country
                        : null,
                address:
                    this.vendorState && this.vendorState.address !== ''
                        ? this.vendorState.address
                        : null,
                state:
                    this.vendorState && this.vendorState.state !== ''
                        ? this.vendorState.state
                        : null,
                postcode:
                    this.vendorState && this.vendorState.postcode !== ''
                        ? this.vendorState.postcode
                        : null
            };
        },
        changeVendor() {
            this.$v.$touch(); //Cuando se haga clic en el elemento submit va a reaccionar a la validacion $invalid
            if (this.$v.$invalid) {
                console.log('se genero un error');
            } else {
                this.$store.dispatch('vendor/updateVendorAd', this.vendor);

                if (this.update) {
                    this.$store.dispatch('vendor/updateVendor');
                } else this.$store.dispatch('vendor/createVendor');
            }
        },
        back() {
            this.$emit('accion');
        }
    }
};
</script>

<style></style>
