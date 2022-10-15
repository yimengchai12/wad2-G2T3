<template>

    <div class="modal fade" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header text-center">
        <h2 class="modal-title w-100" id="exampleModalLabel">Create an account</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p><input type="text" placeholder="Email" v-model="email" @keyup.enter="signin"/></p>
        <p><input type="password" placeholder="Password" v-model="password" @keyup.enter="register"/></p>
        <p><button @click="register" class="btn btn-primary">Register</button></p> 

    </div>
    
    </div>
    </div>
    </div>

    <!-- <h1>Create an account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Register</button></p> -->

</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Successfully registered!");
            router.push('/sign-in')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
}
</script>

<script>
export default {
    name: "registerUser",  
    // components: {
    //     sideNav
    // },
} 
</script>