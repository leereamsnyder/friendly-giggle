<template>
  <div class="jobs-search">
    <form class="jobs-search__form" v-on:submit.prevent="onSubmit">
      <div class="jobs-search__field">
        <label for="description">Language</label>
        <select v-model="description" id="description">
          <option value="">Any</option>
          <option value="python">Python</option>
          <option value="node">Node</option>
          <option value="javascript">JavaScript</option>
          <option value="ruby">Ruby</option>
          <option value=".net">.NET</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </select>
      </div>
      <div class="jobs-search__field">
        <label for="location">Location</label>
        <select v-model="location" id="location">
          <option value="">Any</option>
          <option value="boston">Boston</option>
          <option value="san francisco">San Francisco</option>
          <option value="los angeles">Los Angeles</option>
          <option value="denver">Denver</option>
          <option value="boulder">Boulder</option>
          <option value="chicago">Chicago</option>
          <option value="new york">New York</option>
        </select>
      </div>
      <div class="jobs-search__field">
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'jobsSearch',
  data () {
    return {
      description: '',
      location: ''
    }
  },
  methods: {
    onSubmit () {
      let query = {
        page: '1',
        description: this.description,
        location: this.location
      }
      this.$router.push({name: 'Home', query})
    }
  },
  created () {
    this.description = this.$route.query.description || ''
    this.location = this.$route.query.location || ''
  },
  watch: {
    '$route' (to, from) {
      this.description = to.query.description || ''
      this.location = to.query.location || ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobs-search__form {
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

label {
  display: block;
  font-size: 14px;
}

select {
  min-width: 200px;
}

button {
  cursor: pointer;
  border: 0;
  appearance: none;
  padding: 8px 20px;
  color: #fff;
  font-weight: bold;
  background: #85a0ad;
  border-radius: 3px;
}

button:hover {
  background: #94afbc;
}
</style>
