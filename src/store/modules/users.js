import hito_api from '../../api/hito'

const state = () =>({
    user:{},
    authenticated: false,
    user_login:{
        username: '',
        password: ''
    }
})

const getters = {
    getUthenticatedStatus:(state)=>{
        return state.authenticated;
    },
    getUser:(state)=>{
        return state.user;
    }
}

const actions = {
    getUserLogin({ commit }, user) {
        commit('setUser', user);
        //console.log(user);
            commit('setAuthenticated', true);
        // var apiToken = localStorage.getItem('apiToken');
        // if (apiToken) {
        //   hito_api.getUserLogin(apiToken, (value) => {
        //     commit('setUser',value.data.user);
        //     commit('setAuthenticated', true);
        //   });
        // }
      },
    changeStatusAuthenticated({ commit }, status){
        commit('setAuthenticated', status);
    },
    updateUserInfo({commit, state}, userUpdate){
        commit('updateUser', userUpdate);
      hito_api.updateUser(state.user, localStorage.getItem('apiToken'));

    }


    
}

const mutations = {
    setUser(state, user){
        state.user = user;
    },
    setAuthenticated(state, status){
        state.authenticated = status;
    },
    updateUser(state, userUpdate){
        state.user.name = userUpdate.name;
        state.user.birth_day = userUpdate.birth_day;
        state.user.birth_place = userUpdate.birth_place;
        state.user.department = userUpdate.department;
        state.user.phone_number = userUpdate.phone_number;
        state.user.email = userUpdate.email;
    }
}



export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}