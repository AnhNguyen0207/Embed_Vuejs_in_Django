const state = () => ({
    dataPage: {},
    listMember: [],
});

const mutations = {
    SET_LIST_MEMBER(state, payload) {
        state.listMember = payload;
    }
};


const actions = {
    async getListMember({commit}, payload) {
        commit("SET_LIST_MEMBER", payload);
    }
};

const getters = {
    listMember(state) {
        return state.listMember;
    }
    ,
    getDataPage(state) {
        return state.dataPage
    }
};


export default {
    state,
    getters,
    actions,
    mutations,
};
