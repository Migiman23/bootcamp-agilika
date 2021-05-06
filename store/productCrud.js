import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';

export const state = () => ({
    myProducts: [],
    allProducts: [],
    allProductsHome: [],
    productDetail: {}
});

export const mutations = {
    mutationGetMyProducts(state, payload) {
        state.myProducts = payload;
    },
    async mutationAllProductsForHome(state, payload) {
        const productToFirstPage = await payload.docs.map(e => {
            return e.data();
        });

        state.allProductsHome = productToFirstPage.slice(0, 16);

        state.allProducts = productToFirstPage;
    },
    mutationNewQuery(state, payload){
        const product = payload.map( e => {
            return e.data()
        })

        state.allProducts = product
    },
    setProductDetail(state, payload) {
        state.productDetail = payload;
    }

};

export const actions = {
    async getProductsVendor({commit}, payload){

        console.log('PAYLOAD', payload)

        try {
            const dataProducts = await firebase
                .firestore()
                .collection('products')
                .doc('vendors')
                .collection(payload)
                .get();
            const data = dataProducts.docs.map(doc => doc.data());
            commit('mutationGetMyProducts', data);
        } catch (error) {
            console.log('err', error);
        }
    },
    async getProductsToFirestore({ commit }, payload) {
        const userLoged = this.$cookies.get('auth');
        try {
            const dataProducts = await firebase
                .firestore()
                .collection('products')
                .doc('vendors')
                .collection(userLoged.vendorId)
                .get();
            const data = dataProducts.docs.map(doc => doc.data());
            commit('mutationGetMyProducts', data);
        } catch (error) {
            console.log('err', error);
        }
    },
    async deleteProduct({ commit }, payload) {
        const userLoged = this.$cookies.get('auth');
        try {
            await firebase
                .firestore()
                .collection('products')
                .doc('vendors')
                .collection(userLoged.vendorId)
                .doc(payload.id)
                .delete();
        } catch (error) {
            console.log('err', error);
        }
    },
    async getAllProducts({ commit }, payload) {
        try {
            const products = await firebase
                .firestore()
                .collection('products')
                .doc('allProducts')
                .collection('products')
                .get();

            commit('mutationAllProductsForHome', products);
        } catch (error) {
            console.log('err', error);
        }
    },
    async actionNewProductQuery({ commit }, payload) {

        console.log(payload)

        if (payload === 'All Categories') {
            try {
                const products = await firebase
                    .firestore()
                    .collection('products')
                    .doc('allProducts')
                    .collection('products')
                    .get();

                commit('mutationAllProductsForHome', products);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const newQuery = await firebase
                    .firestore()
                    .collection('products')
                    .doc('allProducts')
                    .collection('products')
                    .where('category', '==', payload)
                    .get();

                commit('mutationNewQuery', newQuery.docs);
            } catch (error) {
                console.log('err', error);
            }
        }
    },
    async getDetailById({ commit }, payload) {
        try {
            await firebase
                .firestore()
                .collection('products')
                .doc('allProducts')
                .collection('products')
                .doc(payload)
                .get()
                .then(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id
                    commit('setProductDetail', vendor);
                })
        } catch (error) {
            console.log('err', error);
        }
    },
};
