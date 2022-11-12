<template>
    <logIn></logIn>

    <body>
        <stripe-checkout v-if="loaded" ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
            :successUrl="successURL" :cancelUrl="cancelURL" />
        <navBars :data="{
            chatUserEmail: 'Helper@gmail.com',
            chatUserName: 'Alexa Help',
            chatUserPhoto:
                'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78=',
        }">
        </navBars>
        <pageBody class="mt-5 pt-3">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="row flex-column px-1">
                            <img id="collectionImg" v-bind:src="collectionImg"
                                alt="" class="row img-fluid p-0" style="max-height:70vh; width:100%;object-fit: scale-down; outline: 1px solid #25192f ;border-radius:20px;"/>  
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


                                <a v-if="purchased" :href="collectionImg"  class="rounded-pill signin-on-hover light-text py-2 px-3 mx-1 text-center" style="text-decoration:none; width:100%; height:auto;" >Download </a>

                                <a v-else-if="!own && !purchase" class="rounded-pill signin-on-hover light-text py-2 px-3 mx-1 text-center" style="text-decoration:none; width:100%; height:auto;" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="loaded=true">Purchase</a>



                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content backdrop light-text">
                                    <div class="modal-header text-center border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">
                                            Confirmation
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" @click="reloadPage"></button>
                                    </div>
                                    <div class="modal-body">Proceed to purchase page?</div>
                                    <div class="modal-footer border-0 d-flex justify-content-center">
                                        <button type="button" @click="reloadPage" class="btn signin-on-hover"
                                            data-bs-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn register-on-hover" @click="submit">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row" style="margin-top: 30px;margin-bottom: 100px; color: white; text-align: start;">
                
                <!-- about the artwork -->
                <div class="col-lg-6 col-sm-12" style="margin-bottom: 30px;">
                    <h2 class="text-start pt-5">About the Artwork</h2>
                    <hr/>
                    <h4 style="margin-left: 10px">{{ collectionTitle }}</h4>
                    <span style="margin-left: 10px">{{ collectionDesc }}</span>
                </div>

                <!-- about the artist -->
                <div class="col-lg-6 col-sm-12">
                    <h2 class="text-start pt-5">About the Artist</h2>
                    <hr/>

                    <div class="row" style="margin-top: 40px;">
                        <div class="col-5" style="width: 220px;">
                             <img class="thumbnail img-fluid rounded-circle" style="margin-left: 10px" v-bind:src="artistProfile.profilePicture" alt="" />
                        </div>

                        <div class="col-7" style="margin-top: 20px; margin-left: 10px;">
                            <router-link to="/profile" v-if="artistUid == currentUid">
                                <h4 >{{ artistProfile.name }}</h4>
                            </router-link>

                            <router-link :to="'/profile/' + artistUid" v-else>
                                <h4 style="">{{ artistProfile.name }}</h4>
                            </router-link>

                            <span style="">{{ bio }}</span>
                        </div>
                    </div>
                       

                        

                        

                    
                </div>
            </div>
            

        </pageBody>
    </body>
</template>

<script>
import logIn from "../src/components/SignIn.vue";
import navBars from "../src/components/navBars.vue";
import pageBody from "../src/components/pageBody.vue";

import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../src/main.js";
import { StripeCheckout } from "@vue-stripe/vue-stripe";

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
        StripeCheckout,
    },
    data(){
        return{
            bought: [],
            purchased: false,
            purchase: true,
            own:true, 
            artistProfile: {},
            buyDescription: {},
            title: this.$route.params.id,
            collectionImg: "",
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
            publishableKey: process.env.VUE_APP_STRIPE_API_KEY,
            loading: false, 
            lineItems:[
                {
                    price: "",
                    quantity: 1
                }
            ],
            tags:[],
            successURL: '', 
            cancelURL: ''
        }
    },


    created(){
        this.loaded=false
        this.cancelURL = 'https://curious-frangollo-807bf4.netlify.app/buy/' + this.$route.params.id.split(' ').join('%20');
        this.successURL = 'https://curious-frangollo-807bf4.netlify.app/success/' + this.$route.params.id.split(' ').join('%20');
        this.readData();
    },

    methods: {
        reloadPage() {
            this.loaded = false;
            window.location.reload();
        },

        submit() {
            this.loaded = true;
            this.$refs.checkoutRef.redirectToCheckout();
        },

        async readData() {
            const docRef = doc(db, "images", this.title);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.buyDescription = docSnap.data();
                this.tags = this.buyDescription.tags
                this.collectionImg = this.buyDescription.image
                this.collectionName = this.buyDescription.title
                this.collectionDate = this.buyDescription.listDate
                // this.artistName = this.buyDescription.artistName
                this.collectionTitle = this.buyDescription.title;
                this.collectionPrice = this.buyDescription.price;
                this.artistUid = this.buyDescription.userid;
                this.collectionDesc = this.buyDescription.details;
                var img = new Image();
                img.src = this.buyDescription.image;
                var img_width = img.width;
                var img_height = img.height;
                var str = `${img_width}x${img_height}px`;
                this.dimension = str;
                console.log("HI");
                console.log(this.dimension);

                //get artist profile
                const artistRef = doc(db, "profiles", this.artistUid);
                const artistSnap = await getDoc(artistRef);
                if (artistSnap.exists()) {
                    console.log("Document data:", artistSnap.data());
                    this.artistProfile = artistSnap.data();
                    this.bio = this.artistProfile.bio;
                } else {
                    console.log("No such document!");
                }

                //get currently logged in user
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    this.currentUid = user.uid;
                    this.photoUrl = user.photoURL;
                    console.log(user)
                    
                }
                else {
                    console.log("No user")
                }

                if (this.currentUid != this.artistUid){
                    this.own = false
                }

                const userRef = doc(db, "profiles", this.currentUid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    console.log("Document data:", userSnap.data());
                    this.bought = userSnap.data().bought;
                    if (this.bought.includes(this.title)){
                        this.purchased = true
                        this.purchase = true
                    }
                    else {
                        this.purchased = false
                        this.purchase = false
                    }
                    
                } else {
                    console.log("No such document!");
                }

                if (this.collectionPrice == '50'){
                    this.lineItems[0].price = "price_1M2ElaLPH9sbKlnPbEJ6ugug"
                }
                else if (this.collectionPrice == '100'){
                    this.lineItems[0].price = "price_1M2EkuLPH9sbKlnPu730PHac"
                }
                else if (this.collectionPrice == '150'){
                    this.lineItems[0].price = "price_1M3Bl5LPH9sbKlnPGjvETXDK"
                }
                else if (this.collectionPrice == '200'){
                    this.lineItems[0].price = "price_1M3BlULPH9sbKlnPlQJY7Vi2"
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        },
    },
};
</script>

<style scoped>
.thumbnail {
    width: 200px;
    height: 200px;
}

h1,
h2,
h3,
h5 {
    color: white;
}

table {
    width: 95%;
    margin-bottom: 10px;
}

table,
tr,
td,
th {
    border: 1px solid #25192f;
    text-align: left;
    color: white;
    padding: 8px;
}

a {
    color: white;
    text-decoration: none;
}

.like:hover,
.share:hover {
    color: #e42474;
}
</style>
