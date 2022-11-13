<template>
    <logIn></logIn>

    
    <body>
        <!-- <stripe-checkout v-if="loaded" ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :successUrl="successURL" :cancelUrl="cancelURL" /> -->
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <pageBody class="mt-5 pt-3">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="row flex-column px-1">
                            <img id="collectionImg" v-bind:src="collectionImg"
                                alt="" class="row img-fluid p-0" style="max-height:70vh; width:100%;object-fit: scale-down; outline: 1px solid #25192f ;border-radius:20px;"/>  
                        </div>
                        <div class="row justify-content-center mt-3 mb-3">
                                    <div class="col-2 text-center"><a href="#" class="like"><i class="bi bi-heart me-2"></i>Like</a></div>
                                    <div class="col-2 text-center"><a href="#" class="share"><i class="bi bi-share me-2"></i>Share</a></div>
                        </div> 
                        
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-5 pe-5 text-start">
                            <h3>{{collectionName}}</h3>
                            <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%">{{collectionDate}}</h5>
                            <router-link v-if="artistUid == currentUid " to='/profile'>
                                <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%; text-decoration: underline;">{{artistProfile.name}}</h5>
                        </router-link>
                            <router-link v-else :to="'/profile/'+ artistUid">
                                <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%;text-decoration: underline;">{{artistProfile.name}}</h5>
                            </router-link>
                            <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%" class="mt-4">{{dimension}}</h5>
                        <div class="row mt-3">
                            <hr class="my-3" style="width:100%">
                            <h1 class="mb-3" style="font-weight:normal">SGD {{collectionPrice}}</h1>
                                <a :href="downloadLink"  class="rounded-pill signin-on-hover light-text py-2 px-3 mx-1 text-center" style="text-decoration:none; width:100%; height:auto;" >Download </a>


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content backdrop light-text">
                                    <div class="modal-header text-center border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="reloadPage"></button>
                                    </div>
                                    <div class="modal-body">
                                        Proceed to purchase page?
                                    </div>
                                    <div class="modal-footer border-0 d-flex justify-content-center">
                                        <button type="button" @click="reloadPage" class="btn signin-on-hover" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn register-on-hover" @click="submit">Confirm</button>
                                    </div>
                                    </div>
                                </div>
                                </div>


                        </div>
                    </div>
                </div>
                
                <h2 class="text-start pt-5">About the Artwork</h2>
                <hr>
                <table>
                    <th class="d-flex">
                        <h4 style="margin-left: 10px">{{collectionTitle}}</h4>
                    </th>
                    <tr>
                        <td>
                            <span style="margin-left:10px">{{collectionDesc}}</span>
                        </td>
                    </tr>
                </table>

                <table class="mt-3 ">
                    <th class="d-flex">
                        
                        <img class="thumbnail img-fluid rounded-circle" style="margin-left:10px" v-bind:src="artistProfile.profilePicture" alt="">
                            <router-link to="/profile" v-if="artistUid == currentUid">
                                <h4 style="margin-left: 10px">{{artistProfile.name}}</h4>
                            </router-link>
                            <router-link :to="'/profile/' + artistUid" v-else>
                                <h4 style="margin-left: 10px">{{artistProfile.name}}</h4>
                            </router-link>
                    </th>
                    <tr>
                        <td>
                            <span style="margin-left:10px">{{bio}}</span>
                        </td>
                    </tr>
                </table>
            
        </pageBody>
    </body>
</template>

<script>
import logIn from "../src/components/SignIn.vue";
import navBars from "../src/components/navBars.vue";
import pageBody from "../src/components/pageBody.vue";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, } from "firebase/auth";
import { db } from "../src/main.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { StripeCheckout } from "@vue-stripe/vue-stripe"

export default {
    name: "buyPage",
    props: {
        // title: String,
        // userid: String,
        // email: String, 
        // listDate: String,
        // price: String,
        // details: String,
        // tags: Array,
        // image: String
    },
    components: {
        navBars,
        logIn,
        pageBody,
        // StripeCheckout

    },
    data(){
        return{
            bought: [],
            filename: '',
            downloadLink: '',
            artistProfile: {},
            buyDescription: {},
            title: this.$route.params.id,
            collectionImg : "",
            collectionName: "",
            collectionDate: "",
            collectionPrice: "",
            collectionTitle: "",
            collectionTitleImg: "",
            collectionDesc: "",
            artistImg: "",
            // artistName: "",
            artistDesc: "",
            artistUid: "",
            currentUid: "",
            bio: "",
            loaded: false,
            dimension:"",
            publishableKey: '',
            loading: false, 
            lineItems:[
                {
                    price: "",
                    quantity: 1
                }
            ],
            successURL: 'http://localhost:8080/success', 
            cancelURL: 'http://localhost:8080/buy/im%20cute'
        }
    },


    created(){
        alert('Successfully purchased! You may now download your artwork.')
        this.loaded=false

        this.readData();
        
    },
    

    methods: {
        reloadPage() {
            this.loaded= false
            window.location.reload();
        },

        submit(){
            this.loaded=true;
            this.$refs.checkoutRef.redirectToCheckout()
        },

        async readData(){
            const docRef = doc(db, "images", this.title);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                this.buyDescription = docSnap.data();
                this.filename = this.buyDescription.filename;
                this.collectionImg = this.buyDescription.image
                this.collectionName = this.buyDescription.title
                this.collectionDate = this.buyDescription.listDate
                // this.artistName = this.buyDescription.artistName
                this.collectionTitle = this.buyDescription.title
                this.collectionPrice = this.buyDescription.price
                this.artistUid = this.buyDescription.userid
                this.collectionDesc = this.buyDescription.details
                var img = new Image()
                img.src = this.buyDescription.image
                var img_width =img.width;
                var img_height = img.height;
                var str = `${img_width}x${img_height}px`
                this.dimension=str
                // console.log('HI')
                // console.log(this.dimension)

                //get artist profile
                const artistRef = doc(db, "profiles", this.artistUid);
                const artistSnap = await getDoc(artistRef);
                if (artistSnap.exists()) {
                    // console.log("Document data:", artistSnap.data());
                    this.artistProfile = artistSnap.data();
                    this.bio = this.artistProfile.bio

                } else {
                    // console.log("No such document!");
                }

                //get currently logged in user
                const auth = getAuth();
                const user = auth.currentUser;
                if (user){
                    this.currentUid=user.uid;
                    this.photoUrl = user.photoURL;
                    // console.log(user)
                    
                }
                else {
                    // console.log("No user")
                }

                const userRef = doc(db, "profiles", this.currentUid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    // console.log("Document data:", userSnap.data());
                    this.bought = userSnap.data().bought;
                    this.bought.push(this.collectionName);

                    updateDoc(userRef, {
                        bought: this.bought
                    });
                    
                } else {
                    // console.log("No such document!");
                }

                if (this.collectionPrice == '50'){
                    this.lineItems.price = "price_1M2ElaLPH9sbKlnPbEJ6ugug"
                }
                else if (this.collectionPrice == '100'){
                    this.lineItems.price = "price_1M2EkuLPH9sbKlnPu730PHac"
                }
                else if (this.collectionPrice == '150'){
                    this.lineItems.price = "price_1M3Bl5LPH9sbKlnPGjvETXDK"
                }
                else if (this.collectionPrice == '200'){
                    this.lineItems.price = "price_1M3BlULPH9sbKlnPlQJY7Vi2"
                }


                const storage = getStorage();
                // console.log(this.filename)
                const imageRef = ref(storage, 'images/' + this.filename);

                // Get the download URL
                getDownloadURL(imageRef)
                .then((url) => {
                    // console.log( url);
                    this.downloadLink = url;
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        console.log('sdfa' + event)
                    const blob = xhr.response;
                    console.log('adfad' + blob)
                    };
                    xhr.open('GET', url);
                    xhr.send();
                    // Insert url into an <img> tag to "download"
                })

            } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
            }
        
        },
    }
};
</script>

<style scoped>

.thumbnail {
    width: 30px;
    height: 30px;
}

h1, h2, h3, h5{
    color: white;
}

table{
    width: 95%;
    margin-bottom: 10px;
}


table, tr, td, th {
  border: 1px solid #25192f;
  text-align: left;
  color: white;
  padding: 8px;
}

a{
    color: white;
    text-decoration: none;
}

.like:hover, .share:hover{
    color:#e42474;
    
}

</style>
