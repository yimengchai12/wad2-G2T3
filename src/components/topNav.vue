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
            <button class='navbar-toggler' type="button" data-bs-toggle="offcanvas" data-bs-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon p-3 "></span>
            </button>
        </div>
        <h1 id="nav-title"><a href="/" id="nav-title" class="text-light vertical-center text-decoration-none ps-3 d-none d-md-block"><img
                    src="../assets/Avalon-1.png" style="width:129.44px;" class="img-fluid topnav-brand"></a>
                    <a href="/" id="nav-title" class="text-light vertical-center text-decoration-none ps-3 d-md-none d-block"><img
                    src="../assets/A-1.png" style="height:40px;" class="img-fluid topnav-brand"></a></h1>
        <nav>
            <ul>
                <li class="nav-item d-none d-lg-inline">
                    <div class="form-outline center">
                        <input type="text" v-model="searchText" id="form1" autocomplete="none"
                            class="form-control rounded-pill"
                            style="width:500px; height:40px; background-color:#20172b; border-color: #20172b; padding:20px; padding-left: 40px; margin-left:-100px;"
                            placeholder="Search collections and creations" @keyup.enter="click1()"
                           />
                    </div>
                </li>

                <router-link id="searchbutton" :to="'/search/'+searchvalue">qwdqwd[qwpodj]</router-link>

                <li class="nav-item" id="myDIV" style="display:none;">
                    <div class="form-outline center mt-5">
                        
                        <input type="text" v-model="searchText"  id="form2" autocomplete="none"
                            class="form-control rounded-pill"
                            style="height:40px; background-color:#20172b; border-color: #20172b; padding:20px; padding-left: 40px; width:300px; margin:auto"
                            placeholder="Search collections and creations" aria-describedby="button-addon2" @keyup.enter="click2()">
                        </div>
                    
                       
                </li>


                <li class="nav-item d-lg-none d-inline">
                    <a role="button" @click="togglehide()"><i class="bi bi-search mx-1 px-3" style="color:#fffeee;font-size: 1.3rem; z-index:100"></i></a>
                </li>
                
                <li class="nav-item" id="login">
                    <a class="d-none d-md-block nav-link rounded-pill signin-on-hover light-text p-0 px-3 mx-1" v-if="!isLoggedIn"
                        data-bs-toggle="modal" data-bs-target="#login">Sign in</a>
                </li>
                <!-- <li class="nav-item"  id="register">
                    <a class="nav-link rounded-pill register-on-hover light-text px-3 mx-1" v-if="!isLoggedIn" data-bs-toggle="modal" data-bs-target="#register" >Register</a>
                    
                </li> -->
                <li class="nav-item me-1">
                <div class="dropdown d-none d-lg-block">
                    <a role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" class="light-text px-3 mx-1 pl-4" v-if="isLoggedIn" ><i class="bi bi-chat-left-dots-fill" style="font-size: 1.3rem;"></i></a>
                    <ul class="dropdown-menu" style="background-color:white" id="chatbox" aria-labelledby="dropdownMenuButton1">
                        <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                        <!-- <ChatPage :currentUser="{'id': id, 'name': name, 'email': email, 'photoUrl_chat':photoUrl_chat}"></ChatPage> -->
                        <ChatPage :currentUser="currentUserEmail" :currentUserName="currentUserName" :data="data"></ChatPage>

                    </ul>
                </div>
                <div class="dropdown d-lg-none">
                    <a role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" class="light-text px-1 mx-1 pl-4" style="height:100px;" v-if="isLoggedIn" ><i class="bi bi-chat-left-dots-fill" style="font-size: 1.3rem;"></i></a>
                    <ul class="dropdown-menu" style="background-color:white" id="chatbox" aria-labelledby="dropdownMenuButton1">
                        <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                        <ChatPage v-if="currentUser" :currentUser="currentUserEmail" :currentUserName="currentUserName" :data="data"></ChatPage>
                    </ul>
                </div>
                </li>

                <li class="nav-item dropdown" v-if="isLoggedIn">
                    <a class="text-light pl-4 px-2" id="profile_dropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false" style="height:40px; font-size:1.em; font-weight:bolder;"><img style="width:40px;height:40px;object-fit:cover; margin-right: 10px; border-radius: 50%;"  :src="photoUrl"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#F5F3F7" class="tw-transform">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#F5F3F7" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg></a>
                    
                    <ul class="dropdown-menu dropdown_menu--animated dropdown_menu-6 mt-5 p-1"
                        style="border: 1px solid #25192f;" aria-labelledby="profile_dropdown">
                        <li class="dropdown-item light-text pl-4 p-2">
                            <router-link to="/profile" v-if="isLoggedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg><span class="ps-2">Profile</span>
                            </router-link>
                        </li>
                        <li class="dropdown-item light-text pl-4 p-2">
                            <router-link to="/listing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-plus-square" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <span class="ps-2">Create Listing</span>
                            </router-link>
                        </li>
                        <li class="dropdown-item pl-4 p-2" id="signout" @click="handleSignOut">
                            <a class="text-danger" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg><span class="ps-2">Log Out</span></a>
                        </li>
                    </ul>
                
                </li>
            </ul>
        </nav>
    </header>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

const isLoggedIn = ref(true);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
            console.log(user.displayName)
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
    props:["data"],
    data(){
        return{
            username: '',
            currentUserEmail: '',
            currentUserName: '',
            searchText:'',
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif",
            searchvalue:''

        }
    },

    created(){ 
        let auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.username=auth.currentUser.displayName
            this.currentUserName = auth.currentUser.displayName
            this.currentUserEmail = user.email;
            this.photoUrl=auth.currentUser.photoURL
            this.photoUrl_chat=auth.currentUser.photoURL
        } else {
            console.log('no uid')
        }

    });



    },
    methods: {

        click1(){
            
            var searchvalue = document.getElementById('form1').value
            this.searchvalue = searchvalue
            console.log(this.searchText)
            console.log(searchvalue)
            console.log(this.searchvalue)
            // var searchbutton = document.getElementById('searchbutton')
            // searchbutton.click()

        },

        click2(){
            var searchbutton = document.getElementById('searchbutton')
            var searchvalue = document.getElementById('form2').value
            this.searchvalue = searchvalue
            console.log(this.searchText)
            console.log(searchvalue)
            searchbutton.click()
        },

        togglehide() {
            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
                x.style.display = "inline";
            } else {
                x.style.display = "none";
            }
            }
    }
    
}
</script>
<style scoped>
/* Global */
.dropdown_menu-6 {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
}

.nav-link {

    font-size: 1em;
    line-height: 40px;
}

.nav-link:active,
.nav-link:focus,
.nav-link:hover {
    background-color: #25192f;
    border-radius: 5px;
}

.dropdown-menu {
    position: absolute;
    background-color: #120c18;
}
.dropdown-menu-chat {
    position: absolute;
    /* background-color: #120c18; */
}
.dropdown-item:active,
.dropdown-item:focus,
.dropdown-item:hover {
    background-color: #25192f;
    border-radius: 5px;
}

@keyframes growDown {
    0% {
        transform: scaleY(0)
    }

    80% {
        transform: scaleY(1.1)
    }

    100% {
        transform: scaleY(1)
    }
}


::-webkit-input-placeholder {
    font-size: 14px;
}

.nav-link:hover {
    color: #fefffe
}

@media screen and (max-width:1199px){
.headerfixed {
    position: fixed;
    z-index: 99;
    padding: 0;
    top: 0px;
    padding-right: 15px;
}
}


@media screen and (min-width:1200px){
.headerfixed {
    position: fixed;
    z-index: 99;
    padding: 0;
    top: 0px;
    padding-right: 50px;
}
}



* {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

input[type=text] {
    color: #fefffe;
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
    margin-right: auto;
    font-size: 1.5em;
    padding-left: 9px;
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

#chatbox.dropdown-menu{
    width: max-content;
}

    
</style>