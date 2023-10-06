const Member = {
    state: {
        dataPage: {},
        listMember: [],
    },

    mutations: {
        SET_LIST_MEMBER(state, payload) {
            state.listMember = payload;
        },
    },

    actions: {
        async getListMember({commit}, payload) {
            commit("SET_LIST_MEMBER", payload);
        },
    },

    getters: {
        listMember(state) {
            return state.listMember;
        },
        getDataPage(state) {
            return state.dataPage
        }
    }
}

export default Member;
