import Vue from 'vue'
import Vuex from 'vuex'
import room from './room'

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      room
    }
  });
  return Store
}