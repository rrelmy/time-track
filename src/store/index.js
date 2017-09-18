import Vue from 'vue'
import Vuex from 'vuex'
import {mutations, state} from './mutations'
import plugins from './plugins'

Vue.use(Vuex)

const store = {state, mutations, plugins};

// enable strict mode in development env
if (process.env.NODE_ENV !== 'production') {
    store.strict = true;
}

export default new Vuex.Store(store)
