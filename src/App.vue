<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Login</router-link> |
  </nav>
  <router-view />
  <headerB/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerB from './components/headerB.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    headerB
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
  margin-top: 60px;
}
</style>

