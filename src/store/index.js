import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allJobs: [],
    jobs: [],
    page: 1
  },
  actions: {
    LOAD_ALL_JOBS: function ({commit}, query) {
      return axios.get('/positions.json', {
        params: {
          description: query.description,
          location: query.location
        }
      })
      .then(response => {
        commit('SET_JOBS_LIST', {list: response.data})
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_JOBS_LIST: (state, {list}) => {
      state.allJobs = list.map(job => {
        job.isOpen = false
        return job
      })
    },
    SET_JOBS_PAGE: (state, page) => {
      page = parseInt(page)
      state.page = page
      if (page === 1) {
        state.jobs = state.allJobs.slice(0, 25)
      } else {
        state.jobs = state.allJobs.slice(25)
      }
    },
    TOGGLE_JOB_EXPANDED: (state, id) => {
      state.allJobs = state.allJobs.map(job => {
        if (job.id === id) {
          job.isOpen = !job.isOpen
        } else {
          job.isOpen = false
        }
        return job
      })
    }
  }
})

export default store
