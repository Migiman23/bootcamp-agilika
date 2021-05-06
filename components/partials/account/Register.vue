<template lang="html">
    <form>
        <div class="ps-form__content">
            <h5>Register An Account</h5>
            <div class="form-group">
                <v-text-field
                    v-model="username"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    placeholder="Email Address"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="password"
                    type="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Register
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
import { email, required, minLength } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            else if (!this.$v.username.email)
                errors.push('Please enter a valid email');
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            if (!this.$v.password.minLength)
                errors.push('The minimum of characters is 6');
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
        username: { required, email },
        password: {
            required,
            minLength: minLength(6)
        }
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                const username = this.username;
                const password = this.password;
                this.$store.dispatch('auth/actionRegisterAccount', {
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
