import 'firebase/database';
import firebase from 'firebase/app';
import Vue from 'vue';
import { nanoid } from 'nanoid';

export const state = () => ({
    condition: ['New', 'Used', 'Renewed'],
    product: {
        id: '',
        title: '',
        brand: '',
        condition: '',
        category: '',
        details: [],
        images: [],
        stock: '',
        sku: '',
        price: '',
        description: ''
    }
});

export const mutations = {
    mutationSetProduct(state, payload) {
        state.product = {
            ...state.product,
            [payload.name]: payload.value.toUpperCase()
        };
        if (!state.product.id) {
            state.product = {
                ...state.product,
                id: nanoid()
            };
        }
    },
    mutationSetBrand(state, payload) {
        state.product = {
            ...state.product,
            brand: payload.value
        };
    },
    mutationSetStock(state, payload) {
        state.product = {
            ...state.product,
            stock: payload.value
        };
    },
    mutationSetSKU(state, payload) {
        state.product = {
            ...state.product,
            sku: payload.value
        };
    },
    mutationSetCondition(state, payload) {
        state.product = {
            ...state.product,
            condition: payload.value
        };
    },
    mutationSetCategory(state, payload){
        state.product = {
            ...state.product,
            category: payload.value
        }
    },
    mutationSetPrice(state, payload){
        state.product = {
            ...state.product,
            price: payload.value
        }  
    },
    mutationSetDescription(state, payload) {
        state.product = {
            ...state.product,
            description: payload.value
        };
    },
    mutationSetDetails(state, payload) {
        const auxDetails = state.product.details;
        auxDetails.push(payload.value);
        state.product = {
            ...state.product,
            details: auxDetails
        };
    },
    mutationDeleteDetails(state, payload) {
        const auxNewDetails = state.product.details.filter((elem, index) => {
            return index !== payload.value;
        });
        state.product = {
            ...state.product,
            details: auxNewDetails
        };
    },
    mutationAddImageProduct(state, payload) {
        const auxImages = [...state.product.images, payload];
        state.product = {
            ...state.product,
            images: auxImages
        };
    },
    mutationDeleteImageProduct(state, payload) {
        const newAuxImages = state.product.images.filter((elem, index) => {
            return index !== payload;
        });
        state.product = {
            ...state.product,
            images: newAuxImages
        };
    },
    async mutationAddDescriptionProduct(state, payload) {

        try {
            state.product = {
                ...state.product,
                description: payload.urlDescription,
                vendorId: payload.userLoged.vendorId,
                marketName: payload.userLoged.marketName
            };
            await firebase
                .firestore()
                .collection('products')
                .doc('vendors')
                .collection(payload.userLoged.vendorId)
                .doc(state.product.id)
                .set(state.product);

            await firebase
            .firestore()
            .collection("products")
            .doc('allProducts')
            .collection('products')
            .doc(state.product.id)
            .set(state.product)
            
        } catch (error) {
            console.log('err', error);
        } finally {
            state.product = {
                id: '',
                title: '',
                brand: '',
                condition: '',
                category:'',
                details: [],
                images: [],
                stock: '',
                sku: '',
                price: '',
                description: ''
            };
        }
    },
    async mutationEditProduct(state, payload) {
        state.product = {
            ...payload
        };
    }
};

export const actions = {
    actionSetProduct({ commit }, payload) {
        commit('mutationSetProduct', payload);
    },
    actionSetBrand({ commit }, payload) {
        commit('mutationSetBrand', payload);
    },
    actionSetCondition({ commit }, payload) {
        commit('mutationSetCondition', payload);
    },
    actionSetCategory({ commit }, payload) {
        commit('mutationSetCategory', payload);
    },
    actionSetStock({ commit }, payload) {
        commit('mutationSetStock', payload);
    },
    actionSetSKU({ commit }, payload) {
        commit('mutationSetSKU', payload);
    },
    actionSetPrice({ commit }, payload) {
        commit('mutationSetPrice', payload);
    },
    actionSetDetails({ commit }, payload) {
        commit('mutationSetDetails', payload);
    },
    actionDeleteDetails({ commit }, payload) {
        commit('mutationDeleteDetails', payload);
    },
    actionDeleteImage({ commit }, payload) {
        const imageToDelete = firebase
            .storage()
            .ref()
            .child(`Products/idTienda/idProduct/${payload.value}.jpg`);
        imageToDelete
            .delete()
            .then(() => {
                commit('mutationDeleteImageProduct', payload.index);
            })
            .catch(err => {
                console.log('err', err);
            });
    },
    async actionUploadImage({ commit }, payload) {
        const nameImage = nanoid();
        try {
            const storageRef = firebase
                .storage()
                .ref()
                .child(`Products/idTienda/idProduct/${nameImage}.jpg`);
            const res = await storageRef.put(payload.value);
            const urlImage = await storageRef.getDownloadURL();
            commit('mutationAddImageProduct', { urlImage, nameImage });
        } catch (error) {
            console.log('error: ', error);
        }
    },
    async actionUploadDescription({ commit }, payload) {
        const textBase64 = btoa(unescape(encodeURIComponent((payload.value))))
        const userLoged = this.$cookies.get('auth');
        try {
            const storageRef = firebase
                .storage()
                .ref()
                .child(`Products/idTienda/${payload.id}/description.html`);
            const res = await storageRef.putString(textBase64, 'base64');
            const urlDescription = await storageRef.getDownloadURL();
            commit('mutationAddDescriptionProduct', {
                urlDescription,
                userLoged
            });
        } catch (error) {
            console.log('error: ', error);
        }
    },
    async actionEditProduct({ commit }, payload) {
        commit('mutationEditProduct', payload);
    }
};
