import { createStore } from 'vuex'

export default createStore({
  state: {
    dans : [
     
    ]
  },
  getters: {
    allDans: (state) => state.dans,
  },
  actions: {
    addDan({commit}, dan){
      commit("add_dan", dan);
    },
    deleteDan({commit}, id){
      commit("delete_dan", id);
    },updateDan({commit}, dan){
      commit("update_dan", dan);
    }
  },
  mutations: {
    add_dan(state,dan){
      state.dans.push(dan);
    },
    delete_dan(state,id){
      state.dans = state.dans.filter(dan =>dan.id != id);
    }, 
    update_dan(state, dan){
      let index = state.dans.findIndex(t=>t.id == dan.id);
      if(index != -1){
        state.dans[index] = dan;
      }
    },
  },
  
  modules: {
  }
});
