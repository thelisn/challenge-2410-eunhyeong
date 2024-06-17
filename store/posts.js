export const state = () => ({
    mainPosts: [],
    searchedPosts: []
});

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    searchPost(state, payload) {

        const searchedKey = payload.searchKey;
        console.log(searchedKey);

        state.searchedPosts = payload;

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