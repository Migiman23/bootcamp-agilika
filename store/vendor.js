import Vue from 'vue';
import { db, storage } from '@/plugins/firebase.js';

var vendorDefault = {
    id: null,
    company: '',
    description: '',
    contactNumber: '',
    email: '',
    responsable: '',
    image: null,
    country: '',
    address: '',
    state: '',
    postcode: ''
};

export const state = () => ({
    vendor: vendorDefault,
    changeImage: false,
    vendors: [],
    pageNum: 4,
    size: 0,
    page: 1,
    totalPages: 0,
    sortDefault: {
        sort: 'date',
        type: 'asc'
    },
    sort: {
        sort: 'date',
        type: 'asc'
    }
});

export const mutations = {
    mutationSetIsVendor(state, payload) {
        state.isVendor = true;
    },
    setChangeImage(state, payload) {
        state.changeImage = payload;
    },
    setPage(state, payload) {
        state.page = payload;
    },
    setSort(state, payload) {
        state.sort = payload;
    },
    setVendor(state, payload) {
        state.vendor = payload;
    },
    setVendors(state, payload) {
        state.vendors = payload;
    },
    setPageData(state, payload) {
        state.size = payload.size;
        state.totalPages = payload.totalPages;
    },
    setVendorsPage(state, payload) {
        state.vendors = payload.vendors;
        state.lastPage = payload.last;
    },
    setVendorG(state, payload) {
      /*   console.log('SeguirErrorMutation', payload);
        console.log('State', state.vendor); */
        state.vendor.company = payload.company;
        state.vendor.description = payload.description;
        state.vendor.contactNumber = payload.contactNumber;
        state.vendor.email = payload.email;
        // state.vendor.responsable = payload.responsable
        state.vendor.image = payload.image;
    },
    setVendorAd(state, payload) {
        state.vendor.country = payload.country;
        state.vendor.address = payload.address;
        state.vendor.state = payload.state;
        state.vendor.postcode = payload.postcode;
    }
    // async setImageStorage(state, payload) {
    //     try {
    //         const refImagen = storage.ref().child('imgProductos').child(payload.idVendor)
    //         await refImagen.put(payload.imagen)
    //         // Se ontiene el URL de la imagen
    //         const urlImagen = await refImagen.getDownloadURL()
    //         //Después de guardar en storage se modifica el campo imagen del vendedor
    //         db.collection('vendors').doc(payload.idVendor).update({
    //             imagen: urlImagen
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
};

export const actions = {
    updateVendorG({ commit }, vendor) {
        commit('setVendorG', vendor);
    },
    updateVendorAd({ commit }, vendor) {
        commit('setVendorAd', vendor);
        // enviar a firestore
    },
    getVendor({ commit }, idVendor) {
        commit('setVendor', vendorDefault);
        db.collection('vendors')
            .where('responsable','==',idVendor)
            .get()
            .then(doc => {
                let vendor = doc.docs.map(e => e.data())[0]
                vendor.id = vendor.responsable;
                commit('setVendor', vendor);
            });
    },
    async getVendors({ commit, state }) {
        let userCookies = this.$cookies.get('auth');
        await db
            .collection('vendors')
            .orderBy('date', 'asc')
            .limit(20)
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = vendor.responsable;
                    vendors.push(vendor);
                });
                commit('setVendors', vendors);
                let pages = Math.ceil(res.size / state.pageNum); // Redondea hacia ariba
                commit('setPageData', { size: res.size, totalPages: pages });
            })
            .catch(err => console.log(err));
    },
    getChangePage({ commit, state }, pagina) {
        db.collection('vendors')
            .orderBy('company')
            .startAfter(state.pageNum * (pagina - 1))
            .limit(state.pageNum)
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id;
                    vendors.push(vendor);
                });
                commit('setVendors', vendors);
            })
            .catch(err => console.log(err));
        //Obtenemos el primer y último elemento
        /* const after = snapshot.docs[0]
        const last = snapshot.docs[snapshot.docs.length - 1]
        commit('setVendorsPage', { vendors: snapshot, after: after, last: last }) */
    },
    async getSortVendors({ commit, state }) {
        await db
            .collection('vendors')
            .orderBy(state.sort.sort, state.sort.type)
            .limit(20)
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id;
                    vendors.push(vendor);
                });
                commit('setVendors', vendors);
                let pages = Math.ceil(res.size / state.pageNum); // Redondea hacia ariba
                commit('setPageData', { size: res.size, totalPages: pages });
            })
            .catch(err => console.log(err));
    },
    async getByName({ commit, state }, name) {
        await db
            .collection('vendors')
            .orderBy('company')
            .startAt(name)
            .endAt(name + '~')
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id;
                    vendors.push(vendor);
                });
                commit('setVendors', vendors);
                let pages = Math.ceil(res.size / state.pageNum); // Redondea hacia ariba
                commit('setPageData', { size: res.size, totalPages: pages });
            })
            .catch(err => console.log(err));
    },
    async createVendor({ commit, state }) {
        let userCookies = this.$cookies.get('auth');
        let vend = {};
        vend = state.vendor;
        vend.date = new Date();
        vend.responsable = userCookies.userUid;
        let imagenDB = vend.image;
        delete vend.image; // Se elimina la propiedad imagen del objeto
        delete vend.id;

        const doc = await db
            .collection('vendors')
            .doc(userCookies.userUid)
            .set(vend);

        const cookieParams = {
            isVendor: true,
            vendorId: userCookies.userUid,
            isLoggedIn: userCookies.isLoggedIn,
            userUid: userCookies.userUid
        };

        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });

        commit('auth/setCredentials', cookieParams, { root: true });
        if (imagenDB !== undefined && imagenDB !== null) {
            const refImagen = storage
                .ref()
                .child('vendors')
                .child(userCookies.userUid);
            const res = await refImagen.put(imagenDB);
            const urlImagen = await refImagen.getDownloadURL();
            await db
                .collection('vendors')
                .doc(userCookies.userUid)
                .update({
                    image: urlImagen
                });
        }
        Vue.notify({
            group: 'addCartSuccess',
            title: 'Successful registered seller!'
        });
        this.$router.push('/vendor/store-list');
        commit('setVendor', this.vendorDefault);
    },
    updateVendor({ commit, state }) {
        let vend = state.vendor;
        let imagenDB = vend.image;
        delete vend.image; // Se elimina la propiedad imagen del objeto
        db.collection('vendors')
            .doc(state.vendor.id)
            .update(vend)
            .then(async () => {
                // Si se modificó la imagen se debe de actualizar en el storage
                if (state.changeImage) {
                    const refImagen = storage
                        .ref()
                        .child('vendors')
                        .child(state.vendor.id);
                    const res = await refImagen.put(imagenDB);
                    const urlImagen = await refImagen.getDownloadURL();
                    await db
                        .collection('vendors')
                        .doc(state.vendor.id)
                        .update({
                            image: urlImagen
                        });
                    //commit('setVendor', vendorDefault)
                } else console.log('No cambió la imagen ');
                Vue.notify({
                    group: 'addCartSuccess',
                    title: 'Account updated!'
                });
            })
            .catch(error => console.log('ErrorUpdateVendor', error));
    },
    searchStoreVendor({ commit }, userId) {
        // buscar vendedor por usuario
        db.collection('vendors')
            .where('responsable', '==', userId)
            .get()
            .then(res => {
                const vendors = [];
                res.forEach(doc => {
                    let vendor = doc.data();
                    vendor.id = doc.id;
                    vendors.push(vendor);
                });
                commit('setVendor', vendors[0]);
            })
            .catch(err => console.log(err));
    }
};

export const getters = {
    getByPag: state => page => {
        let pagina = state.vendors.slice(
            state.pageNum * (page - 1),
            state.pageNum * page
        );
        return pagina;
    },
    getVendor: state => () => {
        return state.vendor;
    },
    getCompany(state) {
        return state.vendor.company;
    }
};

/*                 localStorage.setItem('vendorUser', JSON.stringify(vendorStorage))
                let store = JSON.parse(localStorage.getItem('vendorUser'))
                console.log(store.isVendor, store.vendorId); */
