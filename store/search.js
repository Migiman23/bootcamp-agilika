import { db, storage } from '@/plugins/firebase.js';

export const state = () => ({
    category: 'All Categories',
    name: '',
    products: [],
});

export const mutations = {
    setCategory(state, payload) {
        state.category = payload;
    },
    setName(state, payload) {
        state.name = payload;
    },
    setProducts(state, payload) {
        state.products = payload;
    }
};

export const actions = {
    async getByCat({ commit, state }) {
        const products = [];
        let nomMayus = state.name.toUpperCase()
        // console.log('filtroCat',state.category, nomMayus);
        await db
            .collection('products')
            .doc('allProducts')
            .collection('products')
            .orderBy('title', 'asc')
            .where('category', '==', state.category)
            .startAt(nomMayus)
            .endAt(
                nomMayus ? nomMayus + '~' : '~'
            )
            .limit(10)
            .get()
            .then(res => {
                res.forEach(doc => {
                    let product = doc.data();
                    product.id = doc.id;
                    products.push(product);
                });
                commit('setProducts', products);
            })
            .catch(err => console.log(err));
    },
    async getAll({ commit, state }) {
        const products = [];
        let nomMayus = state.name.toUpperCase()
       // console.log('filtroAll',state.category, nomMayus);
        await db
            .collection('products')
            .doc('allProducts')
            .collection('products')
            .orderBy('title', 'asc')
            .startAt(nomMayus)
            .endAt(
                nomMayus != '' ? nomMayus + '~' : '~'
            )
            .limit(10)
            .get()
            .then(res => {
                res.forEach(doc => {
                    let product = doc.data();
                    product.id = doc.id;
                    products.push(product);
                });
                commit('setProducts', products);
            })
            .catch(err => console.log(err));
    }
};
/* export const getters = {
    
} */