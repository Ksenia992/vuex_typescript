<template>
    <div class="container">
       
          <v-text-field label='username' v-model='username'></v-text-field>
            <v-text-field label='password' v-model='password'></v-text-field>
            <v-btn color='primary' @click='submit'>Sign In</v-btn>

            <v-btn @click='logout'>Log Out</v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { State, Action, Getter, } from 'vuex-class';
    import Component from 'vue-class-component';
    import { ProfileState, User } from '../store/profile/types';
    const namespace: string = 'profile';
@Component
    export default class UserDetail extends Vue {
        @State('profile') isLogged!: ProfileState;
        @Action('fetchData', { namespace }) fetchData: any;
        @Getter('fullName', { namespace }) fullName!: string;
         @Action('LOG_OUT', { namespace }) LOG_OUT:any
        
       

          username!:''
        password!:''
  

        // mounted() {
        //     // fetching data as soon as the component's been mounted
        //     this.fetchData();
        // }

        // // computed variable based on user's email
        // get email() {
        //     const user = this.profile && this.profile.user;
        //     return (user && user.email) || '';
        // }
        async submit () {
         const formData = {
      username: this.username,
      password: this.password,
    };
    console.log(formData)

    await this.fetchData(formData)
    console.log(this.isLogged.isLogged)
        }
        async logout () {
           await this.LOG_OUT()
           console.log(this.isLogged.isLogged)
        }
    }
</script>