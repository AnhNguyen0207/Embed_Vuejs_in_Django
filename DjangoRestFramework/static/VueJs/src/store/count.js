const Count = {
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
    },
    actions: {
        asyncIncrement({commit}) {
            commit("increment");
        },
    },
    getters: {
        getCount(state) {
            return state.count;
        },
    }
};

export default Count;
