import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profile/index';
import createPersistedState from 'vuex-persistedstate'



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
            getState: (key) => localStorage.getItem(key), 
            setState: (key, state) => localStorage.setItem(key,  JSON.stringify(state))
        })
     ]
};

export default new Vuex.Store<RootState>(store);