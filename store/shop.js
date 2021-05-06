import data from '~/static/data/products.json';
import 'firebase/database';
import 'firebase/firestore';
import firebase from 'firebase/app';

export const state = () => ({
    products: data.data
});

export const getters = {
    getAllProducts: state => {
        return state.products;
    },
    getFeaturedProducts: state =>
        state.products.filter(el => el.feature === true)
};

export const mutations = {};

export const actions = {
    async getUserOrders({ commit }, payload) {
        try {
            const dataOrders = await firebase
                .firestore()
                .collection('vendors')
                .doc('2mypsiCVhUnG7OWKKK0F')
                .collection('Ordenes')
                .get();

            const orderId = [];

            dataOrders.docs.map(elem => {
                orderId.push(elem.id);
            });

            const listOrders = [];

            orderId.map(async idOrder => {
                const itemsOrder = await firebase
                    .firestore()
                    .collection('vendors')
                    .doc('2mypsiCVhUnG7OWKKK0F')
                    .collection('Ordenes')
                    .doc(idOrder)
                    .collection('Items')
                    .get();

                const arrAux = [];

                itemsOrder.forEach(elem => {
                    arrAux.push({
                        product: elem.id,
                        quantity: elem.data().Cantidad
                    });
                });

                listOrders.push({
                    [idOrder]: [
                        {
                            ...arrAux
                        }
                    ]
                });
            });
            // console.log('ITEMS', listOrders) ---> Lista de ordenes total
        } catch (error) {
            console.log('err', error);
        }
    }
};

// --------> Query Productos de una orden

// const dataOrders = await firebase
//     .firestore()
//     .collection('vendors')
//     .doc('2mypsiCVhUnG7OWKKK0F') // ---> Id Vendedor
//     .collection('Ordenes')
//     .doc('c8r6FW8LLbfBHn1Aznnl') // ---> Id Orden
//     .collection('Items')
//     .get();

// console.log(
//     'dataOrders',
//     dataOrders.docs.map(doc => {
//         return {
//             nameProduct: doc.id,
//             quantity: doc.data().Cantidad
//         };
//     })
// );

// --------> Query TODAS LAS ORDER ID

// const dataOrders = await firebase
//     .firestore()
//     .collection('vendors')
//     .doc('2mypsiCVhUnG7OWKKK0F')
//     .collection('Ordenes')
//     .get();

// const orderId = [];

// dataOrders.docs.map(elem => {
//     orderId.push(elem.id);
// });

// --------> Query TODAS LAS ORDENES, ORDENADAS

// const dataOrders = await firebase
//     .firestore()
//     .collection('vendors')
//     .doc('2mypsiCVhUnG7OWKKK0F')
//     .collection('Ordenes')
//     .get();

// const orderId = [];

// dataOrders.docs.map(elem => {
//     orderId.push(elem.id);
// });

// const listOrders = [];

// orderId.map(async idOrder => {
//     const itemsOrder = await firebase
//         .firestore()
//         .collection('vendors')
//         .doc('2mypsiCVhUnG7OWKKK0F')
//         .collection('Ordenes')
//         .doc(idOrder)
//         .collection('Items')
//         .get();

//     const arrAux = [];

//     itemsOrder.forEach(elem => {
//         arrAux.push({
//             product: elem.id,
//             quantity: elem.data().Cantidad
//         });
//     });

//     listOrders.push({
//         [idOrder]: [
//             {
//                 ...arrAux
//             }
//         ]
//     });
// });
