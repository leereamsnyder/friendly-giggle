<template>
  <div class="jobs-table">

    <jobs-search></jobs-search>

    <div>
      <div v-if="loading">Loading&hellip;</div>
      <div v-if="! loading && jobs.length === 0">
        No jobs found. Try some other terms?
      </div>
      <div v-if="! loading && jobs.length" >
        <h2>
          Showing {{jobs.length}} jobs
          <span v-if="allJobs.length > 25">(out of {{ allJobs.length }})</span>
        </h2>
        <ul class="jobs">
          <job v-for="job in jobs" :job="job" :key="job.id"></job>
        </ul>
      </div>
      <div v-if="! loading && allJobs.length > 25" class="pagination">
        <span v-show="page != 2">1</span>
        <router-link
          v-show="page == 2"
          :to="{name: 'Home', query: relativePageQuery('1')}">1</router-link>
        <span v-show="page == 2">2</span>
        <router-link
          v-show="page != 2"
          :to="{name: 'Home', query: relativePageQuery('2')}">2</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'jobsTable',
  computed: {
    ...mapState([
      'allJobs',
      'jobs',
      'page'
    ])
  },
  methods: {
    fetch (query = this.$route.query) {
      this.loading = true
      return this.$store.dispatch('LOAD_ALL_JOBS', query)
        .then(() => {
          this.loading = false
          this.$store.commit('SET_JOBS_PAGE', query.page || 1)
        })
    },
    relativePageQuery (page) {
      return { ...this.$route.query, page }
    }
  },
  created () {
    this.fetch()
  },
  beforeRouteUpdate (to, from, next) {
    let justPageChange = to.query.location === from.query.location &&
      to.query.language === from.query.language &&
      to.query.page !== from.query.page

    if (justPageChange) {
      this.$store.commit('SET_JOBS_PAGE', to.query.page || 1)
      next()
    } else {
      this.fetch(to.query).then(() => next())
    }
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobs {
  margin: 0;
  padding: 0;
}
</style>
