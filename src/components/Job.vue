<template>
  <li class="job">
    <div class="job__left">
      <button
        class="job__title"
        type="button"
        @click="toggleJob(job.id)">{{job.title}}</button>
      <div class="job__company">{{job.company}}</div>
      <div class="job__description" v-if="job.isOpen">
        <h3>Job Description</h3>
        <button class="job__description-close" type="button" @click="toggleJob(job.id)">Close</button>
        <div class="job__description-body" v-html="job.description"></div>
        <h3>Apply</h3>
        <div v-html="job.how_to_apply"></div>
      </div>
    </div>
    <div class="job__right">
      <div class="job__location">
        {{job.location}}
      </div>
      <div class="job__date">
        {{job.created_at | date_format}}
      </div>
    </div>
  </li>
</template>

<script>
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default {
  name: 'job',
  props: ['job'],
  methods: {
    toggleJob (id) {
      this.$store.commit('TOGGLE_JOB_EXPANDED', id)
    }
  },
  filters: {
    date_format: function (value) {
      let d = new Date(value)
      let monthIdx = d.getUTCMonth()
      let date = d.getUTCDate()
      let year = d.getUTCFullYear()
      return `${months[monthIdx]} ${date}, ${year}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ccc;
}

.job__left {
  margin-right: auto;
  position: relative;
}

button {
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  color: #0073b7;
  cursor: pointer;
}

button:hover {
  color: #5d95c5;
}

.job__title {
  font-size: 16px;
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  color: #0073b7;
  cursor: pointer;
}

.job__company {
  font-size: 13px;
  color: #999;
}

.job__description {
  position: absolute;
  z-index: 1;
  left: 101%;
  top: -20px;
  width: 500px;
  background: #fff;
  border: 3px solid #efefef;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.08);
}

.job__description h3 {
  margin: 0 0 5px;
  border-bottom: 1px solid #ddd;
}

.job__description-close {
  position: absolute;
  top: 12px;
  right: 10px;
}

.job__description-body {
  margin-bottom: 15px;
}

.job__right {
  text-align: right;
  font-size: 13px;
}

.job__date {
  color: #999;
}
</style>
