<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <div class="form-group">
                <v-text-field
                    v-model="username"
                    class="ps-text-field"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    placeholder="Email"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    type="password"
                    class="ps-text-field"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Please enter password"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-checkbox label="Remember me" color="warning" />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Login
                </button>
            </div>
        </div>
        <div class="ps-form__footer">
            <p>Connect with:</p>
            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook" @click='loginFacebook'>
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google" @click="loginGoogle">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter" @click="loginTwitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            username: null,
            password: null
        };
    },
    validations: {
        username: { required },
        password: { required }
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const username = this.username;
                const password = this.password;
                this.$store.dispatch('auth/actionLoginAccountUsername', {
                    username,
                    password
                });
            }
        },
        loginGoogle() {
            this.$store.dispatch('auth/actionLoginAccountGoogle');
        },
        loginTwitter() {
            this.$store.dispatch('auth/actionLoginAccountTwitter');
        },
        loginFacebook() {
            this.$store.dispatch('auth/actionLoginAccountFacebook');
        }
    }
};
</script>

<style lang="scss" scoped></style>
