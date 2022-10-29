<template>
    <div class="modal fade mt-5" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h2 class="modal-title w-100" id="exampleModalLabel">
                        Create an account
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        <input type="text" placeholder="Name" v-model="name" @keyup.enter="register" />
                    </p>
                    <p>
                        <input type="text" placeholder="Email" v-model="email" @keyup.enter="register" />
                    </p>
                    <p>
                        <input type="password" placeholder="Password" v-model="password" @keyup.enter="register" />
                    </p>
                    <p>
                        <button @click="register" class="btn btn-primary">Register</button>
                        <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>
                    </p>
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
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { setDoc, doc } from "firebase/firestore"; 
import { db } from "../main.js";

const name = ref("")
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((user) => {
            console.log("Successfully registered!");
            console.log(user.user.uid);
            setDoc(doc(db, "profiles", user.user.uid), {
                name: name.value ,
                email: email.value,
                images: []
            })
            router.push("/");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};
</script>

<script>
export default {
    name: "registerUser",

   
};
</script>

