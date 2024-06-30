export const state = () => ({
    mainPosts: [],
    isSearched: []
});

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    searchPost(state, payload) {
        state.isSearched = payload;
        // console.log(payload.searchKey);
    }
};

export const actions = {
    add( { commit }, payload) {
        commit('addMainPost', payload);
    },
    search ( { commit }, payload) {
        commit('searchPost', payload);
    }
}