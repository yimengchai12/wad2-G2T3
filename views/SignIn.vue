
<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
        <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header text-center">
            <h2 class="modal-title w-100" id="exampleModalLabel">Sign In to an account</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p><input type="text" placeholder="Email" v-model="email" @keyup.enter="signin"/></p>
            <p><input type="password" placeholder="Password" v-model="password" @keyup.enter="signin"/></p>
            <p v-if="errMsg">{{ errMsg }}</p>
            <p><button @click="signin" class="btn btn-primary">Sign In</button></p> 

        </div>

        </div>
    </div>
    </div>

    <!-- <h1>Sign In to an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signin">Sign In</button></p>  -->

</template>

<script setup>
// import sideNav from "../src/components/sideNav.vue"

import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

// import { Modal } from 'bootstrap'
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const myModalEl = document.getElementById('login')
const modal = new mdb.Modal(myModalEl)
modal.hide()
console.log(email.value);


const signin = () => {
    const auth = getAuth();
    console.log(email.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!");
            router.push('/profile');
            myModal.hide();
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email address";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        })
       
}


</script>

<script>
export default {
    name: "logIn",  
    // components: {
    //     sideNav
    // },
} 


</script>