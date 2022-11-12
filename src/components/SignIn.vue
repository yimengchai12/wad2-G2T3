<template>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <!-- <div class="modal fade mt-5" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <header class="modal-title w-100" id="exampleModalLabel">
                        <img class="signin-brand img-fluid" src="../assets/Avalon-1-modal.png" style="width:129.44px;">
                    </header>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body page">
                    <div class="mt-3 p-0">
                        <h5>
                            Log in to buy and sell art from artists all over the world!
                        </h5>
                    </div>
                    <div class="field field_v1" v-if="!isLoggedIn">
                        <label for="signin-email" class="ha-screen-reader">Email</label>
                        <input id="signin-email" type="text" class="field__input" placeholder="Please enter your email" v-model="email"
                            @keyup.enter="signin">
                        <span class="field__label-wrap" aria-hidden="true" >
                            <span class="field__label">Email</span>
                        </span>
                    </div>
                    <div class="field field_v2" v-if="!isLoggedIn">
                        <label for="signin-password" class="ha-screen-reader">Password</label>
                        <input type="password" id="signin-password" class="field__input"
                            placeholder="Please enter your password" v-model="password" @keyup.enter="signin">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Password</span>
                        </span>
                    </div>
                </div>
            
                    <div v-if="errMsg" class="light-text" style="padding-bottom:0;">{{ errMsg }}</div>
                    <div v-if="success" class="light-text" style="padding-bottom:0;">{{ success }}</div>
                <div class="mb-3 d-flex flex-column justify-content-center align-items-center">
                    <button @click="signin" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75 mb-1" v-if="!isLoggedIn">
                        Sign In
                    </button>
                    <hr>

                    <button @click="signin" class="light-text signin-on-hover rounded-pill py-2 px-3 w-75 mb-3" v-if="!isLoggedIn">
                        Register
                    </button>

                    <button type="button" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75"
                        data-bs-dismiss="modal" v-if="isLoggedIn">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div> -->

    <div class="modal fade mt-5" id="login" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <header class="modal-title w-100" id="exampleModalLabel">
                        <img class="signin-brand img-fluid" src="../assets/Avalon-1-modal.png" style="width:129.44px;">
                    </header>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body page">
                    <div class="mt-3 p-0">
                        <h5>
                            Log in to buy and sell art from artists all over the world!
                        </h5>
                    </div>
                    <div class="field field_v1" v-if="!isLoggedIn">
                        <label for="signin-email" class="ha-screen-reader">Email</label>
                        <input id="signin-email" type="text" class="field__input" placeholder="Please enter your email"
                            v-model="email" @keyup.enter="signin">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Email</span>
                        </span>
                    </div>
                    <div class="field field_v2" v-if="!isLoggedIn">
                        <label for="signin-password" class="ha-screen-reader">Password</label>
                        <input type="password" id="signin-password" class="field__input"
                            placeholder="Please enter your password" v-model="password" @keyup.enter="signin">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Password</span>
                        </span>
                    </div>
                </div>

                <div v-if="errMsg" class="light-text" style="padding-bottom:0;">{{ errMsg }}</div>
                <div v-if="success" class="light-text" style="padding-bottom:0;">{{ success }}</div>
                <div class="mb-1 d-flex flex-column justify-content-center align-items-center">
                    <button @click="signin" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75"
                        v-if="!isLoggedIn">
                        Sign In
                    </button>
                    <button type="button" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75 mb-3"
                        data-bs-dismiss="modal" v-if="isLoggedIn">
                        Close
                    </button>

                </div>
                
                

                <div class="modal-body" v-if="!success">
                    Don't have an account?
                    <a href="#" class="link-secondary" v-if="!isLoggedIn"
                        data-bs-target="#register" data-bs-toggle="modal" data-bs-dismiss="modal">Register now</a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade mt-5" id="register" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <header class="modal-title w-100" id="exampleModalLabel">
                        <img class="signin-brand img-fluid" src="../assets/Avalon-1-modal.png" style="width:129.44px;">
                    </header>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body page">
                    <div class="mt-3 p-0">
                        <h5>
                            Register to buy and sell art from artists all over the world!
                        </h5>
                    </div>
                    <div class="field field_v1" v-if="!isLoggedIn">
                        <label for="signup-name" class="ha-screen-reader">Name</label>
                        <input id="signup-name" type="text" class="field__input" placeholder="Please enter your name"
                            v-model="name" @keyup.enter="register">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Name</span>
                        </span>
                    </div>
                    <div class="field field_v2" v-if="!isLoggedIn">
                        <label for="signup-email" class="ha-screen-reader">Email</label>
                        <input id="signup-email" type="text" class="field__input" placeholder="Please enter your email"
                            v-model="email" @keyup.enter="register">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Email</span>
                        </span>
                    </div>
                    <div class="field field_v2" v-if="!isLoggedIn">
                        <label for="signup-password" class="ha-screen-reader">Password</label>
                        <input type="password" id="signin-password" class="field__input"
                            placeholder="Please enter your password" v-model="password" @keyup.enter="signin">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Password</span>
                        </span>
                    </div>
                </div>

                <div v-if="errMsg" class="light-text" style="padding-bottom:0;">{{ errMsg }}</div>
                <div v-if="success" class="light-text" style="padding-bottom:0;">{{ success }}</div>
                <div class="mb-1 d-flex flex-column justify-content-center align-items-center">
                    <button @click="register" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75"
                        v-if="!isLoggedIn">
                        Register now
                    </button>
                
                    <button type="button" class="light-text signin-on-hover rounded-pill mt-3 py-2 px-3 w-75 mb-3"
                        data-bs-dismiss="modal" v-if="isLoggedIn" @click="refresh">
                        Close
                    </button>
              
                </div>


                <div class="modal-body" v-if="!success">
                    Already have an account?
                    <a href="#" class="link-secondary" v-if="!isLoggedIn"
                        data-bs-target="#login" data-bs-toggle="modal" data-bs-dismiss="modal">Login now</a>
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

import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "vue-router";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../main.js";


const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const success = ref("");
const signedin = ref(false);
const isLoggedIn = ref(false);

const name = ref("");

const auth = getAuth();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('signedin')
            isLoggedIn.value = true;

        } else {
            isLoggedIn.value = false;
            success.value = "";
            password.value = "";
            email.value = "";
            console.log('signedout')
        }
    });
});

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((user) => {
            console.log("Successfully registered!");
            console.log(user.user.uid);
            success.value = "Registration successful!";
            signedin.value = true;
            errMsg.value = "";
            setDoc(doc(db, "profiles", user.user.uid), {
                name: name.value,
                namelower: name.value.toLowerCase(),
                email: email.value,
                uid: user.user.uid,
                listedImages: [], 
                bio: 'Tell us more about yourself!', 
                profilePicture: 'https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/profiles%2Fphoto_2022-11-13_00-02-12.jpg?alt=media&token=e25e4cd2-b236-4e27-aadf-687896db19bb', 
                userid: user.user.uid,
                bought: [],
            })
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: name.value, photoURL: "https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/profiles%2Fphoto_2022-11-13_00-02-12.jpg?alt=media&token=e25e4cd2-b236-4e27-aadf-687896db19bb"
            }).then(() => {
                console.log("Profile updated!");
            }).catch((error) => { console.log('errorrrr') })
            router.push("/");
            


        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });


};


const signin = () => {

    console.log(email.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!");
            success.value = "Successfully signed in!";
            signedin.value = true;
            errMsg.value = "";
            router.push("/");
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
        });
};
</script>

<script>
export default {
    name: "logIn",
    // components: {
    //     sideNav
    // },
    data() {
        return {
            login: "login",
        };
    },

    methods: {
        refresh() {
            window.location.reload();
        },

    }
};
</script>

<style scoped>
input[type=text],
input[type=password] {
    color: #fefffe;
}

.modal-dialog,
.modal-content,
.modal-header,
.modal-body {
    color: #fefffe;
    background-color: #120c18;
}


.ha-screen-reader {
    width: var(--ha-screen-reader-width, 1px);
    height: var(--ha-screen-reader-height, 1px);
    padding: var(--ha-screen-reader-padding, 0);
    border: var(--ha-screen-reader-border, none);

    position: var(--ha-screen-reader-position, absolute);
    clip: var(--ha-screen-reader-clip, rect(1px, 1px, 1px, 1px));
    overflow: var(--ha-screen-reader-overflow, hidden);
}

/*
=====
RESET STYLES
=====
*/

.field__input {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    /* -webkit-appearance: none;
  -moz-appearance: none; */

    font-family: inherit;
    font-size: inherit;
}

.field__input:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

/*
=====
CORE STYLES
=====
*/

.field {
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
    --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

    display: var(--fieldDisplay, inline-flex);
    position: relative;
    font-size: var(--fieldFontSize, 1rem);
}

.field__input {
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 3rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input:focus {
    outline: none;
}

.field__input::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input::-moz-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__input:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__label-wrap {
    box-sizing: border-box;
    pointer-events: none;
    cursor: text;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.field__label-wrap::after {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;
}

.field__input:focus~.field__label-wrap::after {
    opacity: 1;
}

.field__label {
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    top: calc(50% - .5em);

    line-height: 1;
    font-size: var(--fieldHintFontSize, inherit);

    transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
}

.field__input:focus~.field__label-wrap .field__label,
.field__input:not(:placeholder-shown)~.field__label-wrap .field__label {
    --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

    top: var(--fieldHintTopHover, .25rem);
}

/* 
effect 1
*/

.field_v1 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: opacity .2s ease-out;
}

/* 
effect 2
*/

.field_v2 .field__label-wrap {
    overflow: hidden;
}

.field_v2 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transform: translate3d(-105%, 0, 0);
    transition: transform .285s ease-out .2s, opacity .2s ease-out .2s;
}

.field_v2 .field__input:focus~.field__label-wrap::after {
    transform: translate3d(0, 0, 0);
    transition-delay: 0;
}

/*
effect 3
*/

.field_v3 .field__label-wrap::after {
    border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: height .2s ease-out, opacity .2s ease-out;
}

.field_v3 .field__input:focus~.field__label-wrap::after {
    height: 100%;
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field {
    --fieldBorderColor: #D1C4E9;
    --fieldBorderColorActive: #673AB7;
}

/*
=====
DEMO
=====
*/

body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.page {
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    display: grid;
    grid-gap: 30px;
}


@media (min-width: 1024px) {

    .linktr {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
}

.r-link {
    --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
    --uirLinkTextColor: var(--rLinkTextColor);
    --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

    display: var(--uirLinkDisplay) !important;
    color: var(--uirLinkTextColor) !important;
    text-decoration: var(--uirLinkTextDecoration) !important;
}
</style>
