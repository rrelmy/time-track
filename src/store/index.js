import Vue from 'vue'
import Vuex from 'vuex'
import {mutations, state} from './mutations'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    plugins,
    strict: true
})
