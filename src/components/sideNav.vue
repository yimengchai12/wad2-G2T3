<template>

    <div class="col sidenav-parent sidenav-position margin-not-mobile p-0 d-flex" style="height:calc(100% - 80px);">
        <nav class="navbar navbar-expand-xl navborder" id="sideNav">
            <div id="navigation" style="width:250px; justify-content: space-between;" class="offcanvas offcanvas-start backdrop margin-mobile d-flex">
                <ul class="navbar-bar px-3 mb-0" style="list-style-type:none; width:inherit; text-align: left; ">
                    <li class="d-lg-none nav-item" id="login">
                    <a class="nav-link rounded-pill signin-on-hover light-text mt-2 text-center" style="margin:auto" v-if="!isLoggedIn"
                        data-bs-toggle="modal" data-bs-target="#login">Sign in</a>
                        
                    </li>
                    <hr class="d-lg-none"  v-if="!isLoggedIn" style="width:100%">
                    <li class="nav-item dropdown">
                        <a class="nav-link text-light d-flex px-2" id="marketplace_dropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-shop"></i><span class="ms-2">Marketplace</span>
                            <span class="ms-auto"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#F5F3F7" class="tw-transform">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#F5F3F7" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg></span></span></a>

                        <ul class="dropdown-menu dropdown_menu dropdown_menu--animated dropdown_menu-6"
                            aria-labelledby="marketplace_dropdown">
                            <!-- <li>
                                <router-link to="/listing" class="dropdown-item text-light pl-4 p-2">Popular Artwork
                                </router-link>
                            </li> -->
                            <li><router-link to="/commission" class="dropdown-item text-light pl-4 p-2">Request Commission</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-light px-2 d-flex" id="creators_dropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-palette"></i><span class="ms-2">Creators</span>
                            <span class="ms-auto"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#F5F3F7" class="tw-transform">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#F5F3F7" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg></span></span></a>
                        <ul class="dropdown-menu dropdown_menu dropdown_menu--animated dropdown_menu-6"
                            aria-labelledby="creators_dropdown">
                            <li>
                                <router-link to="/listing" class="dropdown-item text-light pl-4 p-2">Create Listing
                                </router-link>
                            </li>
                            <li><router-link  to="/commission" class="dropdown-item text-light pl-4 p-2">Commission Requests</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-light px-2 d-flex" target="_blank" href="https://github.com/yimengchai12/wad">
                            <i class="bi bi-book"></i><span class="ms-2">Resources</span></a>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-light px-2 d-flex" target="_blank" to="/aboutus">
                            <i class="bi bi-code-slash"></i><span class="ms-2">About Us</span></router-link>
                    </li>
                    <!-- <li class="nav-item" v-if="!isLoggedIn" id="login">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#login" >Sign in</a>
                </li>
                <li class="nav-item" v-if="!isLoggedIn" id="register">
                    <a class="nav-link text-light pl-4" data-bs-toggle="modal" data-bs-target="#register" >Register</a>
                </li>
                <li class="nav-item" v-if="isLoggedIn" id="signout">
                    <a class="nav-link text-light pl-4" @click="handleSignOut" >Sign out</a>
                </li> -->
                </ul>
                <div class="sub_div light-text">
                    <!-- <hr style="width:240px;"> -->
                    <div class="d-flex flex-column justify-content-center pb-4 px-1">
                        <hr class="mx-auto">
                        <div class="container-fluid">
                            <div class="row mb-2 mt-1">
                                <div class="col p-0">
                                   <a type="button" rel="noreferrer noopener" target="_blank" href="https://github.com/yimengchai12/wad" class="sidenav-button light-text" style="width:90%; text-decoration: none;"><i class="bi bi-github me-2"></i><span style="font-size:smaller">Github</span></a>
                                </div>
                                <div class="col p-0">
                                   <a type="button" rel="noreferrer noopener" target="_blank" href="https://discord.com/invite/artist" class="sidenav-button light-text" style="width:90%; text-decoration: none;"><i class="bi bi-discord me-2"></i><span style="font-size:smaller">Discord</span></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col p-0">
                                    <a type="button" rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/accounts/login/?next=%2Fzipcy%2F&source=omni_redirect" class="sidenav-button light-text" style="width:90%; text-decoration: none;"><i class="bi bi-instagram me-2"></i><span style="font-size:smaller">Instagram</span></a>
                                </div>
                                <div class="col p-0">
                                    <a type="button" rel="noreferrer noopener" target="_blank" href="https://twitter.com/hashtag/art" class="sidenav-button light-text" style="width:90%; text-decoration: none;"><i class="bi bi-twitter me-2"></i><span style="font-size:smaller">Twitter</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </nav>


    </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged} from "firebase/auth";
// import router from "../router";

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

</script>


<script>


export default {
    name: 'sideNav',
    components: {

    },
    // created(){ 
    //     let auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         this.username=auth.currentUser.displayName
    //     } else {
    //         console.log('no uid')
    //     }

    // });



    // }
}
</script>
<style scoped>
/* BELOW IS SIDENAV */


.sidenav-button {
    background-color: transparent;
    border: 1px solid #32263f;
    border-radius: 5px;
    padding:5px;
    padding-left: 10px;
    text-align: left;
}
.sidenav-button:hover{
    background-color: #21142a;
}


/* .sub_div {
    position: absolute;
    clear: both;
    z-index: 1;
    width:100%;
    top:180px;
    bottom: 0px;
    
    
} */


.navbar {
    height: 100vh;
    /* margin-left: -300px; */
    background-color: #120c18;
    transition: 0.3s ease;
    padding-top: 0;
    display: contents
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
    position: relative;
    background-color: #120c18;
    margin-left: 20px;
}


.dropdown-item:active,
.dropdown-item:focus,
.dropdown-item:hover {
    background-color: unset;
    border-radius: 5px;
    filter: brightness(90%);

}

.dropdown-item {
    filter: brightness(60%);

}

.navborder {
    border-right: 1px solid #25192f;
}

.nav-item {
    margin-top: 0;
    margin-bottom: 10px;
}

@media screen and (min-width:1200px) {
    .sidenav-parent {
        width: 250px;
        height: 100vh;
        box-sizing: border-box;
        overflow-y: scroll;
    }
}
.sidenav-parent::-webkit-scrollbar {
  display: none;
}
.margin-mobile::-webkit-scrollbar {
  display: none;
}

.sidenav-position {
    position: fixed;
    z-index: 99;
}

/* END OF SIDENAV */


@media screen and (min-width:1200px) {
    .margin-not-mobile {
        margin-top:80px;
        border-right: 1px solid #25192f;
    }
}

@media screen and (max-width:1199px) {
    .margin-mobile {
        margin-top: 80px;
        border-right: 1px solid #25192f;
        overflow-y: scroll;
    }
}

.dropdown_menu-6 {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
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
</style>
