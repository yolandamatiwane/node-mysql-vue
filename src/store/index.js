import { createStore } from 'vuex'
import axios from 'axios'
// import {toast} from 'vue3-toastify'
// import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies'
import router from '@/router'

// also helps us get cookies //I think 
axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')


export default createStore({
  state: {
    fruits:null
  },
  getters: {
  },
  mutations: {
    setFruits(state, payload) {
      state.fruits = payload 
      
    }
  },
  actions: {
    async addUser({commit},info){
      let data = await axios.post('http://localhost:3010/users/insert',info)
      console.log(data)
    },
    async loginUser({commit},info){
      let {data} = await axios.post('http://localhost:3010/login',info)
      $cookies.set('token',data.token)
      // if(data){
      //   toast("Hello! Wow so easy!", {
      //     "theme": "auto",
      //     "type": "default",
      //     "dangerouslyHTMLString": true
      //   })
      // }
      console.log(data.token)
      await router.push('/')
      location.reload()
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:3010/fruits')
      commit('setFruits',data)
    },
    async addToCart({commit},fruit_id){
      let {data} = await axios.post('http://localhost:3010/cart',{id:fruit_id})
      console.log(data)
    }
  },
  modules: {
  }
})
