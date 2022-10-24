<template>
    <div id="navigation" class="w-75">
        <nav class="navbar navbar-expand d-flex flex-column navborder" id="sideNav">
            
            <ul class="navbar-bar d-flex flex-column mt-0 p-2" style="list-style-type:none; width:100%">
                <li class="nav-item">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#login" v-if="!isLoggedIn">Sign in</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#register" v-if="!isLoggedIn">Register</a>
                </li>
                <li class="nav-item">
           
                        <router-link to="/profile" class="nav-link text-light pl-4" v-if="isLoggedIn">Profile</router-link>
                 
                </li>
                <li class="nav-item">
           
                    <router-link to="/feedpage" class="nav-link text-light pl-4" v-if="isLoggedIn">Feedpage</router-link>
    
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light pl-4">Marketplace</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-light pl-4" id="creators_dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Creators</a>
                    <ul class="dropdown-menu" aria-labelledby="creators_dropdown">
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">Create Listing</a></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">2nd Option</a></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">3rd Option</a></li>
                    </ul>
                </li>
                <li class="nav-item">
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
        height: 100vh;
        /* margin-left: -300px; */
        background-color: #120c18;
        transition: 0.3s ease;
        
    }

    .nav-link {
        font-size: 1.25em;

    }

    .nav-link:active,
    .nav-link:focus,
    .nav-link:hover{
        background-color: #25192f;
        border-radius: 5px;
    }

    .dropdown-menu{
        background-color: #120c18;
    }

    .dropdown-item:active,
    .dropdown-item:focus,
    .dropdown-item:hover{
        background-color: #25192f;
        border-radius: 5px;
    }

    .navborder {
        border-right: 1px solid #25192f;
    }


</style>
