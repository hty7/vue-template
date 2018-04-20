import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    userInfo
  }
})
