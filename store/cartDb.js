import { db } from '@/plugins/firebase.js'

export const state = () => ({
    carrito: [],
    totalCarrito: 0,
    cantidadProductos: 0
});

export const mutations = {
    setProductos(state, payload) {
        state.carrito = payload
    },
    setTotal(state, payload) {
        state.totalCarrito = payload.total
        state.cantidadProductos = payload.productos
    },
    setTotalSum(state, payload) {
        state.totalCarrito = state.totalCarrito + payload
        state.cantidadProductos = state.cantidadProductos + 1
    },
    setTotalRes(state, payload) {
        state.totalCarrito = state.totalCarrito - payload
        state.cantidadProductos = state.cantidadProductos - 1
    }
};

export const actions = {
    getCart({ commit }, idUsuario) {
        const productos = []
        let total = 0
        let productosNum = 0
        // console.log(idUsuario)
        db.collection('cart').where('userId', '==', idUsuario).get()
            .then(res => {
                res.forEach(doc => {
                    if (!doc.empty) {
                        let producto = doc.data()
                        producto.totalString = producto.total.toLocaleString()
                        producto.id = doc.id
                        productos.push(producto)

                        total += producto.precioUnitario * producto.cantidad;
                        productosNum += producto.cantidad
                    }
                })

                console.log(productos)
                commit('setProductos', productos)
                commit('setTotal', { total: total, productos: productosNum })

            })
            .catch(err => console.log(err))
    },
    addProductToCart({ commit }, producto) {
        //producto.total = producto.precioUnitario * producto.cantidad,
        // Consultamos si ya existe el producto
        console.log('add',producto);
        db.collection('cart').where('userId', '==', producto.userId).where('id', '==', producto.id).get()
            .then((res) => {
                if (!res.empty) {
                    const cantidadSum = res.docs[0].data().quantity + producto.quantity
                    db.collection('cart').doc(res.docs[0].id).update({
                        quantity: cantidadSum
                    })
                        .catch(err => console.log(err))
                    // return;
                } else {
                    console.log('No existe: ', res)

                    db.collection('cart').add({ producto })
                        .then(doc => {
                            console.log('Se agregó correctamente')
                        })
                        .catch(err => console.log(err))
                }
            }).catch(err => {
                console.log('Error al obtener producto', err);
            });

    },
    cambiarCantidad({ commit }, producto) {
        db.collection('cart').doc(producto.id).update({
            cantidad: producto.cantidad,
            total: producto.cantidad * producto.precioUnitario
        }).then(() => {
            console.log('Se modificó')
        }).catch(err => {
            console.log(err)
        })
    },
    sumarTotal({ commit }, cantidad) {
        commit('setTotalSum', cantidad)
    },
    restarTotal({ commit }, cantidad) {
        commit('setTotalRes', cantidad)
    },
    comprarCarrito({ commit }, idUsuario) {
        alert(`El usuario (${idUsuario}) compró todo :)`)
    },
    resetCarrito({ commit, state }) {
        let total = 0
        let productosNum = 0

        state.carrito.forEach(producto => {
            if (!producto.empty) {
                total += producto.precioUnitario * producto.cantidad;
                productosNum += producto.cantidad
            }
        })
        commit('setTotal', { total: total, productos: productosNum })
    },
    setOrdenes({ commit, state }) {

        let productos = []
        state.carrito.forEach(producto => {
            let productoCar = {
                idProducto: producto.idProducto,
                nombre: producto.nombre,
                modelo: producto.modelo,
                cantidad: producto.cantidad,
                precioUnitario: producto.precioUnitario,
                subtotal: producto.total
            }
            productos.push(productoCar)
        })

        let compraMultiple = {
            userId: state.carrito[0].idUsuario,
            total: state.totalCarrito,
            cantidad: cantidadProductos,
            estatus: "SolicitudLista",
            fecha: new Date(),
            productos: productos
        }
        console.log(compraMultiple)

        db.collection('ordenCompra').add(compraMultiple).then(doc => {
            alert('Compra exitosa con el identificador: ' + doc.id)
        }).catch(error => alert(error))
    }
};

export const getters = {};

