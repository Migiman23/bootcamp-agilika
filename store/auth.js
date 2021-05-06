import 'firebase/database';
import firebase from 'firebase/app';
import Vue from 'vue';

export const state = () => ({
    isLoggedIn: false,
    isToken: null,
    credentials: null,
    isVendor: false
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setIsToken(state, payload) {
        state.isToken = payload;
    },
    setCredentials(state, payload) {
        state.credentials = payload
    },
    mutationSetIsVendor(state) {
        state.isVendor = true;
    },
    mutationSetVendorFalse(state) {
        state.isVendor = false;
    },
    clearCart: state => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
    }
};

export const actions = {
    async actionVerifyVendor({ commit }, userId) {
        // buscar vendedor por usuario
        firebase
            .firestore()
            .collection('vendors')
            .where('responsable', '==', userId)
            .get()
            .then(res => {
                const exist = res.docs.map(elem => {
                    elem.data();
                });

                if (exist.length > 0) {
                    commit('mutationSetIsVendor');
                }
            })
            .catch(err => console.log(err));
    },
    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);
        const cookieParams = {
            isLoggedIn: state.isLoggedIn
        };

        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
        //   firebase.auth().onAuthStateChanged(function(user) {
        //       if (user) {
        //           console.log('hay usuario');
        //           commit('setIsLoggedIn', true);
        //           // User is signed in.
        //       } else {
        //           console.log('no hay usuario logeado');
        //           // No user is signed in.
        //       }
        //   });
    },
    actionLogOut({ commit, dispatch }, payload) {
        dispatch('product/getCartProducts', [], { root: true });
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                commit('setIsLoggedIn', false);
                commit('setCredentials', null);
                console.log('deslogeado');
                this.$cookies.remove('auth');
                dispatch('clearCart');
                commit('mutationSetVendorFalse');
                this.$router.push('/');
            })
            .catch(error => {
                console.log('error: ', error);
                // An error happened.
            });
    },
    actionRegisterAccount({ commit }, payload) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.username, payload.password)
            .then(user => {
                this.$router.push('login');
                Vue.notify({
                    group: 'addCartSuccess',
                    title: 'Account Created!',
                    text: `Your account ${payload.username} has been created, please login`
                });
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    },
    actionLoginAccountUsername({ commit, dispatch }, payload) {
        dispatch('product/getCartProducts', [], { root: true });
        const cookieParams = {}

        firebase
            .auth()
            .signInWithEmailAndPassword(payload.username, payload.password)
            .then(async user => {
                await firebase
                    .firestore()
                    .collection('vendors')
                    .where('responsable', '==', user.user.uid)
                    .get()
                    .then(res => {
                        const exist = res.docs.map(elem => {
                            return elem.data();
                        });
                        if (exist.length > 0) {
                            commit('mutationSetIsVendor');
                            cookieParams.vendorId = exist[0].responsable
                            cookieParams.isVendor = true
                            cookieParams.marketName = exist[0].company
                        } else {
                            cookieParams.vendorId = null
                            cookieParams.isVendor = false
                        }

                    })
                    .catch(err => console.log(err));


                this.$router.push('/');
                commit('setIsLoggedIn', payload.username);
                commit('setIsToken');

                cookieParams.isLoggedIn = true
                cookieParams.userUid = user.user.uid
                commit('setCredentials', cookieParams);

                this.$cookies.set('auth', cookieParams, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });

                console.log('logeado',cookieParams );
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage, cookieParams);
            });
    },
    actionLoginAccountGoogle({ commit }, payload) {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                this.$router.push('/');
                commit('setIsLoggedIn', true);
                const cookieParams = {
                    isLoggedIn: true
                };
                this.$cookies.set('auth', cookieParams, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });
            })
            .catch(error => {
                console.log('error: ', error);
            });
    },
    actionLoginAccountTwitter({ commit }, payload) {
        const providerTwitter = new firebase.auth.TwitterAuthProvider();
        firebase
            .auth()
            .signInWithPopup(providerTwitter)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                this.$router.push('/');
                commit('setIsLoggedIn', true);
                const cookieParams = {
                    isLoggedIn: true
                };
                this.$cookies.set('auth', cookieParams, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });
            })
            .catch(error => {
                console.log('error: ', error);
            });
    },
    actionLoginAccountFacebook({ commit }, payload) {
        const providerFacebook = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(providerFacebook)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                this.$router.push('/');
                commit('setIsLoggedIn', true);
                const cookieParams = {
                    isLoggedIn: true
                };
                this.$cookies.set('auth', cookieParams, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });
            })
            .catch(error => {
                console.log('error: ', error);
            });
    },
    clearCart({ commit }) {
        commit('clearCart');
        const cookieParams = {
            total: 0,
            amount: 0,
            cartItems: []
        };
        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
