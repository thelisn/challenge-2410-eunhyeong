export const state = () => ({
    mainPosts: [ { "title": "x", "date": 1718683360028, "content": "x", "id": 2 }, { "title": "a", "date": 1718683357756, "content": "a", "id": 1 } ],
    isSearched: []
});

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    searchPost(state, payload) {
        state.isSearched = payload;
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