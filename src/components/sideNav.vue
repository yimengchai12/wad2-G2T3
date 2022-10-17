<template>
    <div>
        <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sideNav">
            <a href="#" class="navbar-brand text-light mt-5">
                <div class="display-5 font-weight-bold"></div>
            </a>
            <ul class="navbar-bar d-flex flex-column mt-5 w-100">
                <li class="nav-item w-100">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#login" v-if="!isLoggedIn">Sign in</a>
                </li>
                <li class="nav-item w-100">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#register" v-if="!isLoggedIn">Register</a>
                </li>
                <li class="nav-item w-100">
           
                        <router-link to="/profile" class="nav-link text-light pl-4" v-if="isLoggedIn">Profile</router-link>
                 
                </li>
                <li class="nav-item w-100">
                    <a class="nav-link text-light pl-4">Marketplace</a>
                </li>
                <li class="nav-item dropdown w-100">
                    <a class="nav-link dropdown-toggle text-light pl-4" id="creators_dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Creators</a>
                    <ul class="dropdown-menu w-100" aria-labelledby="creators_dropdown">
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">Create Listing</a></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">2nd Option</a></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">3rd Option</a></li>
                    </ul>
                </li>
                <li class="nav-item w-100">
                    <a class="nav-link text-light pl-4" @click="handleSignOut" v-if="isLoggedIn">Sign out</a>
                </li>
            </ul>
        </nav>
    </div>
    
</template>

<script setup>
import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

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


export default {
    name: 'sideNav',
    components: {
    
    }
}
</script>
<style scoped>
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;

    }

    body {
        min-height: 100vh;
        background-color: white;
    }

    .navbar {
        width: 250px;
        height: 100vh;
        position: fixed;
        /* margin-left: -300px; */
        background-color: #7952B3;
        transition: 0.3s ease;
    }

    .nav-link {
        font-size: 1.25em;

    }

    .nav-link:active,
    .nav-link:focus,
    .nav-link:hover{
        background-color: #ffffff26;
    }

    .dropdown-menu{
        background-color: #7952B3;
    }

    .dropdown-item:active,
    .dropdown-item:focus,
    .dropdown-item:hover{
        background-color: #ffffff26;
    }
</style>
