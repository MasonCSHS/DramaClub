<template>
  <div id="app">
    <div id="nav">
      <span v-for="(route, i) in routes" :key="route.path">
        <span v-if="route.header === true">
          <router-link :to="route.path" style="padding: 0.5em">{{ route.name }}</router-link>
          <span v-if="i !== routes.length - 1">|</span>
        </span>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {routes} from "./router/index.js"

export default {
  name: 'App',
  data() {
    return {
      routes
    }
  },
  created() {
    setTimeout(()=>console.log(this.routes), 10000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
