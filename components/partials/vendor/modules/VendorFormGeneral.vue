<template>
    <form @submit.prevent="updateVendor" class="ps-form--edit-address mt-4">
        <div class="ps-form__content">
            <div class="form-group">
                <label> Company Name<sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.company.$model"
                    v-uppercase
                    :class="{ 'is-invalid': $v.vendor.company.$error }"
                />
                <p class="text-danger" v-if="!$v.vendor.company.minLength">
                    Company is wrong.
                </p>
                <p
                    class="text-danger mt-1"
                    v-if="
                        $v.vendor.company.minLength && $v.vendor.company.$error
                    "
                >
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> Description <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.description.$model"
                    :class="{ 'is-invalid': $v.vendor.description.$error }"
                />
                <p class="text-danger" v-if="!$v.vendor.description.minLength">
                    Description is wrong.
                </p>
                <p
                    class="text-danger mt-1"
                    v-if="
                        $v.vendor.description.minLength &&
                        $v.vendor.description.$error
                    "
                >
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> Contact number <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.contactNumber.$model"
                    :class="{ 'is-invalid': $v.vendor.contactNumber.$error }"
                />
                <p
                    class="text-danger"
                    v-if="!$v.vendor.contactNumber.minLength"
                >
                    Number is wrong.
                </p>

                <p
                    class="text-danger mt-1"
                    v-if="
                        $v.vendor.contactNumber.minLength &&
                        $v.vendor.contactNumber.$error
                    "
                >
                    This field is required
                </p>
            </div>
            <div class="form-group">
                <label> Email address <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.email.$model"
                    :class="{ 'is-invalid': $v.vendor.email.$error }"
                />
                <p class="text-danger" v-if="!$v.vendor.email.email">
                    Email is wrong
                </p>

                <p
                    class="text-danger mt-1"
                    v-if="$v.vendor.email.$error && $v.vendor.email.email"
                >
                    This field is required
                </p>
            </div>
            <!--  <div class="form-group">
                <label>Responsable</label>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="$v.vendor.responsable.$model"
                    :class="{ 'is-invalid': $v.vendor.responsable.$error }"
                />

                <p class="text-danger mt-1" v-if="$v.vendor.responsable.$error">
                    This field is required
                </p>
            </div> -->

            <div class="form-group">
                <label>Perfil Image</label>
                <br />
                <!--   <input
                    type="button"
                    id="loadFileXml"
                    large
                    value="Select image"
                    class="btn btn-primary"
                    onclick="document.getElementById('file').click();"
                /> -->
                <v-btn
                    color="primary"
                    id="loadFileXml"
                    large
                    value="Select image"
                    onclick="document.getElementById('file').click();"
                >
                    Select image
                </v-btn>
                <input
                    type="file"
                    style="display: none"
                    id="file"
                    name="file"
                    @change="buscarImagen($event)"
                />
                <div class="mt-2 text-center">
                    <img :src="urlTemp" class="imgV" />
                </div>
            </div>

            <div class="float-right">
                <v-btn color="primary" type="submit"> Continue </v-btn>

                <v-btn color="warning" @click="$router.go(-1)">Cancel</v-btn>
            </div>
            <!--             <div class="form-group submit text-right">
                <button class="ps-btn">Next</button>
            </div> -->
        </div>
    </form>
</template>

<script>
import Vue from 'vue';
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import { mapState, mapGetters } from 'vuex';

/*     ...mapMutations({
      toggle: 'todos/toggle'
    }) */

Vue.directive('uppercase', {
	update (el) {
		el.value = el.value.toUpperCase()
	},
})

export default {
    data() {
        return {
            vendor: {
                company: '',
                description: '',
                contactNumber: '',
                email: '',
                responsable: '',
                image: null,
            },
            file: null,
            urlTemp: '',
        };
    },
    props: {
        update: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        vendorState(newCount, oldCount) {
            this.llenarForm();
        },
    },
    computed: {
        ...mapState({
            vendorState: (state) => state.vendor.vendor,
        }),
        ...mapGetters('vendor', ['getByPag', 'getVendor']),
    },
    validations: {
        vendor: {
            company: {
                required,
                minLength: minLength(2),
            },
            description: {
                required,
                minLength: minLength(10),
            },
            contactNumber: {
                required,
                minLength: minLength(10),
            },
            email: {
                required,
                email,
            },
        },
    },
    methods: {
        llenarForm() {
            this.urlTemp =
                this.vendorState && this.vendorState !== null
                    ? this.vendorState.image
                    : null;
                
            this.vendor = {
                company:
                    this.vendorState && this.vendorState.company !== ''
                        ? this.vendorState.company
                        : '',
                description:
                    this.vendorState && this.vendorState.description !== ''
                        ? this.vendorState.description
                        : '',
                contactNumber:
                    this.vendorState && this.vendorState.contactNumber !== ''
                        ? this.vendorState.contactNumber
                        : '',
                email:
                    this.vendorState && this.vendorState.email !== ''
                        ? this.vendorState.email
                        : '',
                image:
                    this.vendorState && this.vendorState.image !== null
                        ? this.vendorState.image
                        : null,
            };
        },
        updateVendor() {
            this.$v.$touch(); //Cuando se haga clic en el elemento submit va a reaccionar a la validacion $invalid
            if (this.$v.$invalid) {
                console.log('se genero un error');
            } else {
                this.$emit('accion'); // Siguiente formulario
                console.log('VENDOR', this.vendor)
                console.log('VENDORSTATE', this.vendorState);
                this.$store.dispatch('vendor/updateVendorG', this.vendor);
            }
        },
        buscarImagen(event) {
            //Verificar el tamaño de la imagen
            if (event.target.files[0]) {
                this.file = event.target.files[0];
                //  this.producto.imagen = event.target.files[0];

                this.vendor.image = event.target.files[0];

                const reader = new FileReader();
                reader.readAsDataURL(this.file);
                reader.onload = (e) => {
                    this.$store.commit('vendor/setChangeImage', true);
                    this.urlTemp = e.target.result;
                };
            }
        },
    },
};
</script>

<style>
.imgV {
    height: 250px;
    widows: 200px;
}
</style>
