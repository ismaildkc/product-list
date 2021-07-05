import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formValue: [],
    conversation_id: '',
    donation_status: '',
    userInfo: {}
  },
  mutations: {
    _formValue(state, formValue){
      state.formValue = formValue;
    },
    _conversation_id(state, id){
      state.conversation_id = id;
    },
    _donation_status(state, id){
      state.donation_status = id;
    },
    _selectedDonatinPrice(state, id){
      state.selectedDonatinPrice = id;
    },
    _userInfo(state, data){
      state.userInfo = data;
    }
  },
  actions: {},
  modules: {}
});
