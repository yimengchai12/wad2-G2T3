<template>
  <sidenav></sidenav>
  <div id="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Login</router-link> |
    <router-link to="/feed">Feed</router-link> |
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view />
  <headerB/>
  </div>
</template>

<script setup>
import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);

let auth;
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Successfully signed out!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
}


</script>


<script>

import sidenav from "./components/sidenav.vue"

export default {
  name: 'App',
  components: {
    sidenav: sidenav,
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

