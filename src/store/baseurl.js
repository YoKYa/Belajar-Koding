export default ({
    namespaced: true,
    state: {
        baseUrlStorage: ''
    },
    getters: {
        urlStorage(state) {
            return state.baseUrlStorage;
        }
    },
    mutations: {
        SET_BASEURLSTORAGE(state, value) { state.baseUrlStorage = value },
    },
    actions: {
        baseStorageUrl({ commit }, credentials) {
            commit("SET_BASEURLSTORAGE", credentials)
        },
    }
})