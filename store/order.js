import Vue from 'vue';
import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { nanoid } from 'nanoid';
import store from '@/store';

export const state = () => ({
    orders: [],
    marketOrders: []
});

export const mutations = {
    mutationGetUserOrders(state, payload) {
        const allOrders = payload.docs.map(elem => {
            return elem.data();
        });
        state.orders = allOrders;
    },
    mutationGetMarketOrders(state, payload) {
        const allOrders = payload.docs.map(elem => {
            return elem.data();
        });
        state.marketOrders = allOrders;
    }
};

export const actions = {
    async actionCreateOrder(context) {
        let cart = this.$cookies.get('cart', { parseJSON: true });
        let userParams = this.$cookies.get('auth');

        const markets = [];

        cart.cartItems.map(elem => {
            markets.push(elem.idVendor);
        });

        const uniqueMarkets = [...new Set(markets)];

        let status = [];

        uniqueMarkets.map(elem => {
            status.push({ [elem]: 'confirmed' });
        });

        const orderId = nanoid();

        try {
            Vue.notify({
                group: 'addCartSuccess',
                title: 'Your purchase has been successful!'
            });
            await firebase
                .firestore()
                .collection('users')
                .doc(userParams.userUid)
                .collection('Orders')
                .doc(orderId)
                .set({
                    productos: cart.cartItems,
                    orderId: orderId,
                    orderStatus: status,
                    buyer: userParams.userUid
                });

            uniqueMarkets.map(async e => {
                const products = await cart.cartItems.filter(elem => {
                    return elem.idVendor == e;
                });

                await firebase
                    .firestore()
                    .collection('vendors')
                    .doc(e)
                    .collection('Orders')
                    .doc(orderId)
                    .set({
                        productos: products,
                        orderId: orderId,
                        orderStatus: 'confirmed',
                        buyer: userParams.userUid
                    });
            });

            cart.cartItems.map(async items => {
                await firebase
                    .firestore()
                    .collection('products')
                    .doc('vendors')
                    .collection(items.userId)
                    .doc(items.url)
                    .update({
                        stock: firebase.firestore.FieldValue.increment(
                            -items.quantity
                        )
                    });
            });
        } catch (error) {
            console.log(error);
        } finally {
            this.$cookies.remove('cart');
            context.dispatch('cart/clearCart', '', { root: true });
        }
    },
    async actionGetUserOrders({ commit }, payload) {
        let userParams = this.$cookies.get('auth');
        const orders = await firebase
            .firestore()
            .collection('users')
            .doc(userParams.userUid)
            .collection('Orders')
            .get();

        commit('mutationGetUserOrders', orders);
    },
    async actionGetMarketOrders({ commit }, payload) {
        let userParams = this.$cookies.get('auth');
        const marketOrders = await firebase
            .firestore()
            .collection('vendors')
            .doc(userParams.vendorId)
            .collection('Orders')
            .get();

        commit('mutationGetMarketOrders', marketOrders);
    },
    async actionChangeOrderMarketStatus({ commit }, payload) {
        let userParams = this.$cookies.get('auth');

        try {
            await firebase
                .firestore()
                .collection('vendors')
                .doc(userParams.vendorId)
                .collection('Orders')
                .doc(payload.id)
                .update({
                    orderStatus: payload.status
                });

            const aux = await firebase
                .firestore()
                .collection('users')
                .doc(payload.buyer)
                .collection('Orders')
                .doc(payload.id)
                .get();

            const placeEditing = aux.data().orderStatus.map((elem, index) => {
                if (Object.keys(elem) == payload.buyer) {
                    return index;
                }
            });

            const editado = aux.data().orderStatus;

            editado[placeEditing] = {
                [payload.buyer]: payload.status
            };

            await firebase
                .firestore()
                .collection('users')
                .doc(payload.buyer)
                .collection('Orders')
                .doc(payload.id)
                .update({
                    orderStatus: editado
                });
        } catch (error) {
            console.log('ERROR:', error);
        } finally {
            const marketOrders = await firebase
                .firestore()
                .collection('vendors')
                .doc(userParams.vendorId)
                .collection('Orders')
                .get();

            commit('mutationGetMarketOrders', marketOrders);
        }
    }
};
