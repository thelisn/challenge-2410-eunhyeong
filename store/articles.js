export const state = () => ({
    article: [],
});

export const mutations = {
    createArticle(state, payload) {
        state.article = payload;
    },
};

export const actions = {
    createArticle( { commit }, payload) {
        commit('createArticle', payload);
    },
}