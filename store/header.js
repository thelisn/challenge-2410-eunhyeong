export const state = () => ({
    headerMain: [],
    headerReset: null,
});

export const mutations = {
    changeHeader(state, payload) {
        state.headerMain = payload;
    },
    resetPage(state, payload) {
        state.headerReset = payload;
        console.log(payload);
    }
};

export const actions = {
    main ( { commit }, payload ) {
        commit('changeHeader', payload);
    },
    reset ( { commit }, payload ) {
        commit('resetPage', payload);
    }
}