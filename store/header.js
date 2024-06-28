export const state = () => ({
    headerMain: null,
    headerReset: null,
});

export const mutations = {
    changeHeader(state, payload) {
        state.headerMain = payload.headerMain;
        console.log('main:', payload.headerMain);
    },
    resetPage(state, payload) {
        state.headerReset = payload.headerReset;
        console.log('reset:', payload.headerReset);
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