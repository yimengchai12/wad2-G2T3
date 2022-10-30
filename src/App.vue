<template>


  <div id="app">

  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/sign-in">Login</router-link> |
    <router-link to="/feed">Feed</router-link> | -->
    <!-- <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button> -->
  <!-- </nav> -->
   <router-view />
  </div>
</template>

<!-- <script setup>
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


</script> -->


<script>
// import { } from "firebase/auth";

// const auth = getAuth();
// const uid = auth.currentUser.uid;

export default {
  name: 'App',
  // data() {
  //   return {
  //     uid: uid,
  //   }
  // },
  components: {
    
}
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

