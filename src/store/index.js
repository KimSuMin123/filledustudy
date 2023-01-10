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
    },updateDan({commit},dan){
      commit("updateDan", dan);
    }
  },
  mutations: {
    addDan(state,id){
      state.dans.push(id);
      console.log(id);
    },
    deleteDan(state,id){
      state.dans = state.dans.filter(dan =>dan.id != id);
      console.log(id);
    }, 
    updateDan(state, id){
      let index = state.dans.findIndex(dan =>dan.id == dan.id);
      if(index == -1){
        state.dans[index] = id;
        console.log("sksksksks");
      }
    },
  },
  
  modules: {

  }, plugins : [createPersistedState({
    paths:["dans"]
  })]
});

