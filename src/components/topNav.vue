<template>
    <!-- <div class="container-fluid">
        <div class="row">
            <header class="headerfixed">
                    <div class="col-2">
                        <a href="/" class="navbar text-light vertical-center text-decoration-none p-3">
                            <div class="display-5 font-weight-bold">Avalon</div>
                        </a>
                    </div>
                    <div class="col-10">
                        <div class="d-flex justify-content-center center">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control rounded-pill" style="width:500px; background-color:#20172b; border-color: #20172b;" placeholder="Search collections and creations" />
                            </div>
                        </div>
                    </div>
            </header>
        </div>
    </div> -->

    
    <header class="headerfixed">
        <div class="navbar-dark d-block d-xl-none ms-3">
        <button class='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon p-3 "></span>
        </button>
        </div>
        <h1 id="nav-title"><a href="/" id="nav-title" class="text-light vertical-center text-decoration-none ps-3"><img src="../assets/Avalon-1.png" style="width:129.44px;" class="img-fluid topnav-brand"></a></h1>
        <nav>
            <ul>
                <li> 
                    <div class="form-outline center">
                        
                        <input type="text" id="form1" autocomplete="none" class="form-control rounded-pill d-none d-lg-block" style="width:500px; height:40px; background-color:#20172b; border-color: #20172b; padding:20px; padding-left: 40px; margin-left:-100px;" placeholder="Search collections and creations" />
                    </div>
                </li>
                <li class="nav-item" id="login">
                    <a class="nav-link rounded-pill signin-on-hover light-text py-1 px-3 mx-1" v-if="!isLoggedIn" data-bs-toggle="modal" data-bs-target="#login" >Sign in</a>
                </li>
                <li class="nav-item"  id="register">
                    <a class="nav-link rounded-pill register-on-hover light-text py-1 px-3 mx-1" v-if="!isLoggedIn" data-bs-toggle="modal" data-bs-target="#register" >Register</a>
                    
                </li>
                <li class="nav-item" id="signout">
                <div class="dropdown">
                    <button id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link rounded-pill register-on-hover light-text py-1 px-3 mx-1 pl-4" v-if="isLoggedIn" >Chat</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                        <ChatPage :currentUser="{'id': id, 'name': name, 'email': email, 'photoUrl':photoUrl}"></ChatPage>
                    </ul>
                </div>
                </li>
                <li class="nav-item" id="signout">
                    <button class="nav-link rounded-pill register-on-hover light-text py-1 px-3 mx-1 pl-4" v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
                </li>
                <li class="nav-item">
           
                    <router-link to="/profile" class="nav-link light-text py-1 px-3 mx-1" v-if="isLoggedIn"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></router-link>
    
                </li>
            </ul>
        </nav>          
    </header>
    
</template>

<script setup>
import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

const isLoggedIn = ref(true);

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
import ChatPage from "../components/Chat.vue"
export default {
    name: 'topNav',
    components:{
        ChatPage
    },
    data(){
        return{
            id: "12345",
            name:"Jan",
            email:"test@gmail.com",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6EIQlkehqQvaTOa4XoNPzIdkvIrXIgGM74dUa8Ll0A&s"
        }
    }
    
}
</script>
<style scoped>
    /* Global */
.white, .white a {
  color: #fff;
}

::-webkit-input-placeholder {
    font-size: 14px;
}
.nav-link:hover {
    color:#fefffe
}
.headerfixed {
    position:fixed;
    z-index: 99;
    padding:0;
    top:0px;
    padding-right:50px;
}
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica;
}

input[type=text]{
    color:#fefffe;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(108,117,125,255)' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 13px;
}

input[type=text]:focus {
    box-shadow: none;
}

/* Header */
header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #120c18;
    width: 100vw;
    height: 80px;
}

#nav-title {
    margin-right:auto;
    font-size: 1.5em;
}

header li {
    list-style: none;
    display: inline-block;
}

header a {
    text-decoration: none;
    color: #fefffe;
    transition: all 0.3s ease 0s;
}

.dropdown-menu{
    width: max-content;
}

    
</style>