import { createStore } from 'vuex'

export default createStore({
  state: {
    itemPayload: {},
    indexPayload: {}
  },
  mutations: {
    updateItemPayload(state, payload) {
      state.itemPayload = payload;
    },

    updateIndexPayload(state, payload) {
      state.indexPayload = payload;
    }
  },
  actions: {
    doUpdateItemPayload(context, payload) {
      context.commit('updateItemPayload', payload);
    },

    doUpdateIndexPayload(context, payload) {
      context.commit('updateIndexPayload', payload);
    }
  }
})
