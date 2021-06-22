import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profile/index';
import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
       // a simple property
    },
    modules: {
        profile
    },
    plugins: [
        createPersistedState({
            paths: ['profile', 'isLogged', 'profile.<nameOfThePropretyInState>'],
            getState: (key) => Cookie.getJSON(key), 
            setState: (key, state) => Cookie.set(key, state, { expires: 1, secure: false })
        })
     ]
};

export default new Vuex.Store<RootState>(store);