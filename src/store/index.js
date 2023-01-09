import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    dans : [
     
    ]
  },
  getters: {
    allDans: (state) => state.dans,
  },
  actions: {
    addDan({commit}, id){
      commit("addDan", id);
    },
    deleteDan({commit}, id){
      commit("deleteDan", id);
    },updateDan({commit},id){
      commit("updateDan", id);
    }
  },
  mutations: {
    addDan(state,id){
      state.dans.push(id);
    },
    deleteDan(state,id){
      state.dans = state.dans.filter(dan =>dan.id != id);
    }, 
    updateDan(state, id){
      let index = state.dans.findIndex(dan =>dan.id == id);
      if(index == -1){
        state.dans[index] = id;
      }
    },
  },
  
  modules: {

  }, plugins : [createPersistedState({
    paths:["dans"]
  })]
});

