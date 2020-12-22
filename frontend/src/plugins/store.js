import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      // eslint-disable-next-line no-param-reassign
      state.userProfile = val;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      try {
      // sign user in
        const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);

        // fetch user profile and set in state
        dispatch('fetchUserProfile', user);
        return false;
      } catch (err) {
        return err.code;
      }
    },
    async register({ dispatch }, form) {
      try {
        const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);

        // create user profile object in userCollections
        await fb.usersCollection.doc(user.uid).set({
          fullname: form.fullname,
          username: form.username,
        });

        // fetch user profile and set in state
        dispatch('fetchUserProfile', user);
        return false;
      } catch (err) {
        return err.code;
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit('setUserProfile', {});

      // redirect to login view
      router.push('/login');
    },
    async deleteProfile({ commit }) {
      try {
        const user = fb.auth.currentUser;
        user.delete();
        // clear user data from state
        commit('setUserProfile', {});

        alert('Your account has been successfully deleted');
        router.push('/');
      } catch (err) {
        alert('Something went wrong while deleting your account. Please try again later.');
      }
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;

      try {
      // update user object
        await fb.usersCollection.doc(userId).update({
          fullname: user.fullname,
          username: user.username,
        });
        dispatch('fetchUserProfile', { uid: userId });
        alert('Success! Your account has been updated.');
      } catch (err) {
        alert('Something went wrong while updating your account. Please try again later.');
      }
    },

    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit('setUserProfile', userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === '/login' || router.currentRoute.path === '/register') {
        router.push('/');
      }
    },
  },
});

export default store;
