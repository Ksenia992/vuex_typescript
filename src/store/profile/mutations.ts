import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

export const mutations: MutationTree<ProfileState> = {
    profileLoaded(state, payload: boolean) {
        
        state.isLogged = payload;
    },
    // profileError(state) {
    //     state.isLogged = payload
     
    // }
};