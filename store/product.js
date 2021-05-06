import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';
import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';

export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    cartProducts: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    total: 0,
    categories: []
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },

    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setBrands(state, payload) {
        state.brands = payload;
    },

    // setCategories(state, payload) {
    //     state.categories = payload;
    // },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    },
    allCategories(state, payload){
        console.log('ASDSDA', payload.data())
        state.categories = payload.data().allCategories
    },
};

export const actions = {
    async getCategories({commit}, payload){
        try {
            const allCategories = await firebase
                .firestore()
                .collection('products')
                .doc('categories')
                .get()

            commit('allCategories', allCategories)
            
        } catch (error) {
            console.log('error', error)
        }
    },
    async getProducts({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getTotalRecords({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                commit('setTotal', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsById({ commit }, payload) {
        const reponse = await Repository.get(`${baseUrl}/products/${payload}`)
            .then(response => {
                commit('setProduct', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCartProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item}`;
            } else {
                query = query + `&id=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setCartProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getWishlishtProducts({ commit }, payload) {
      
    },

    async getCompareProducts({ commit }, payload) {
    },

    async getProductBrands({ commit }) {
    },

    async getProductCategories({ commit }) {
    },

    async getProductsByBrands({ commit }, payload) {
    },
    async getProductsByPriceRange({ commit }, payload) {
    }
};
