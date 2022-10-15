<template>
  <sideNav></sideNav>
  <div id="app">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Login</router-link> |
    <router-link to="/feed">Feed</router-link> |
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view />
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

import sideNav from "./components/sideNav.vue"

export default {
  name: 'App',
  components: {
    sideNav : sideNav
  }
}
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

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

