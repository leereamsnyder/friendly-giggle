<template>
  <div id="app">
    <header class="header">
      <div class="page-container">
        <h1 class="header__title">
          <b>Github</b> Jobs (for Validic)
        </h1>
      </div>
    </header>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.page-container {
  padding: 0 15px;
  margin: 0 auto;
  max-width: 960px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
}

.header {
  margin: 0;
  padding: 0;
  background: #0072bc;
  border-bottom: 2px solid #d1cfce;
}

.header__title {
  margin: 0;
  padding: 8px 0;
  font-size: 28px;
  color: #fff;
  font-weight: 400;
}
</style>
