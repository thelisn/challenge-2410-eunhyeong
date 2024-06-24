export const state = () => ({
    headerMain: [],
});

export const mutations = {
    changeHeader(state, payload) {
        state.headerMain = payload;
    }
};

export const actions = {
    main ( { commit }, payload ) {
        commit('changeHeader', payload);
    }
}