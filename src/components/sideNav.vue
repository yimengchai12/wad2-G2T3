<template>
    
    <div  class="sidenav-parent sidenav-position margin-not-mobile p-0" >
        <nav class="navbar navbar-expand-xl navborder" id="sideNav" >
            <div id="navigation" style="width:33vw;" class="offcanvas offcanvas-start backdrop margin-mobile">
            <ul class="navbar-bar d-flex flex-column px-3" style="list-style-type:none; width:inherit; text-align: left; ">
                <!-- <li class="nav-item">
           
                    <router-link to="/feedpage" class="nav-link text-light pl-4" v-if="isLoggedIn">Feedpage</router-link>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link text-light pl-4">Marketplace</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-light pl-4" id="creators_dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Creators</a>
                    <ul class="dropdown-menu dropdown_menu dropdown_menu--animated dropdown_menu-6" aria-labelledby="creators_dropdown">
                        <li><router-link to="/listing" class="dropdown-item text-light pl-4 p-2">Create Listing</router-link></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">My Listings</a></li>
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">3rd Option</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light pl-4">Marketplace</a>
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
        </div>
        </nav>
    </div>
    
</template>




<script>


export default {
    name: 'sideNav',
    components: {
    
    }
}
</script>
<style scoped>

/* BELOW IS SIDENAV */


.navbar {
    height: 100vh;
    /* margin-left: -300px; */
    background-color: #120c18;
    transition: 0.3s ease;
    padding-top:0;
    display:contents
}

.nav-link {
   
    font-size: 1em;
    line-height:40px;
}

.nav-link:active,
.nav-link:focus,
.nav-link:hover{
    background-color: #25192f;
    border-radius: 5px;
    
}

.dropdown-menu{
    position:relative;
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

.nav-item{
    margin-top:0;
    margin-bottom:10px;
}

@media screen and (min-width:1200px) {
.sidenav-parent {
    width:240px;
    height:100vh;
}
}

.sidenav-position {
    position:fixed;
    border-right: 1px solid #25192f;
    z-index: 99;
}
/* END OF SIDENAV */
    

@media screen and (min-width:1200px){
    .margin-not-mobile {
        margin-top:80px; 
    }
}

@media screen and (max-width:1199px){
    .margin-mobile {
        margin-top:80px; 
        border-right: 1px solid #25192f;
    }
}

.dropdown_menu-6{
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
