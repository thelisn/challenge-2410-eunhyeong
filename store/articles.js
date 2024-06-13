export const state = () => ({
    name: 'articles',
});

export const mutations = {
    bye(state) {
        state.name = 'test articles';
    }
};