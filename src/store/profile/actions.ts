import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../types';
import axios from "@/utils/axios";


export const actions: ActionTree<ProfileState, RootState> = {
   async  fetchData({ commit },payload): any {
      try {
        const response = await axios.post("/login", payload)
        console.log(response.data)
        if (response?.data?.accessToken) {
         localStorage.setItem("token", response.data.accessToken);
         commit('profileLoaded', true);
      
         
    
   
        }
      } catch (error) {
       console.log("Error");
       console.log(error);
     }
    },

    async LOG_OUT({ commit },payload): any {
      try {
       
         localStorage.removeItem("token");
         commit('profileLoaded', false);
      
         
    
   
        
      } catch (error) {
       console.log("Error");
       console.log(error);
     }
    },
};