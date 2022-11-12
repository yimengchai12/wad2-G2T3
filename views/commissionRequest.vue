<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <div>
        </div>
        <pageBody>
            

            <div class="container-fluid" style="color: white; text-align: left;">
                <h1 style="padding-top: 50px;">Commissions</h1>

                <!-- nav bar -->
                <div class="row">
                    <section style="padding-top: 30px; padding-left: 0px;">
                        <nav class="stroke">
                            <ul>
                                <li style="padding-right: 40px;"><a id="requestNav" @click="displayRequest()">Request</a></li>
                                <li style="padding-left: 40px;"><a id="inboxNav" @click="displayInbox()">Inbox</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <!-- request -->
                <div class="row" id="requestForm">
                    <div class="col-7 py-3 request">
                        <h3 style="padding-bottom: 20px;">Commission Request</h3>

                        <!-- Detials input TO LOOK INTO TEXT AREA STYLING -->
                        
                        
                        <div class="field field_v3 mb-3">
                        <label for="email" class="ha-screen-reader">Commission Detail</label>
                        <textarea id="email" class="field__input__bio light-text" style="width:50vw" placeholder="What do you want the creation to look like?"
                            v-model="request.details"></textarea>
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Commission Detail</span>
                        </span>
                    </div>
                        <!-- deadline input TO LOOK INTO DATE STYLING-->
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <!-- <span class="input-group-text">$</span>
                                <input type="text" class="form-control" placeholder="0.00" aria-label="Amount" v-model.number="request.price"> -->                      
                                <div>
                                  
                                    
                                        <span class="ms-3"><label class="mb-1" for="datepicker">Commission Deadline</label></span>
                                        <Datepicker id="datepicker" class="dp__theme_dark" v-model="request.reqDeadline" required="true" dark></Datepicker>
                                   
                                </div>
                               
                            </div>    
                        </div>

                        <!-- price input -->
                        <div class="form-group">
                            <div class="input-group mb-3">
                                <!-- <span class="input-group-text">$</span>
                                <input type="text" class="form-control" placeholder="0.00" aria-label="Amount" v-model.number="request.price"> -->                      
                                <div class="field field_v1 w-75">
                                    <label for="listing-price" class="ha-screen-reader">Title</label>
                                    <input id="listing-price" type="text" class="field__input" placeholder="$ 0.00" v-model.number="request.price" aria-label="amount" required="true" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');">
                                    <span class="field__label-wrap" aria-hidden="true" >
                                        <span class="field__label">Price ($)</span>
                                    </span>
                                </div>
                            </div>    
                        </div>

                        <!-- artist input -->
                        <div class="input-group mb-3 mt-3">
                            
                            <div class="field field_v1 w-75">
                                <label for="tags" class="ha-screen-reader">Add Artist</label>
                                <input id="tags" type="text" class="field__input" placeholder="Add Artist" aria-describedby="button-addon2" v-model="sendArtist" @keyup.enter="addArtist">
                
                                <span class="field__label-wrap" aria-hidden="true" >
                                    <span class="field__label">Add Artist</span>
                                </span>
                            </div>
                            <button class="btn btn-outline-secondary buttonStyle add-on-hover" type="button" id="button-addon2" @click="addArtist" >Add Artist</button>
                        </div>

                        <!-- artist tags -->
                        <div class="d-inline-flex flex-wrap" >
                            <p v-for="(sendArtist,index) in request.artistList" :key="sendArtist" style="width:max-content" class="text-start p-2 signin-on-hover me-2">
                                <button type="button " class="btn-close btn-close-white" aria-label="Close" @click="deleteArtist(sendArtist,index)"></button>
                                <span class="p-1 me-2 text-light"> {{sendArtist}}</span>  
                            </p>
                        </div>

                        <!-- submit form button -->
                        <div class="form-group text-center" >
                            <button class="btn register-on-hover rounded-pill" style="width:fit-content; height: 45px;" @click="saveData">Submit Request</button>
                        </div>
                    </div>
                </div>
                <!--  end of request row -->

                <!-- inbox -->
                <div id="inbox">
                    <!-- <button class="btn button" @click="checkList()"> CHECKEHC</button> -->

                    <!-- replies -->
                    <div class="row">
                        <div class="col-10">
                            <h3 class="py-5">Commissions Received</h3> 
                            <!-- <div v-if="requestObj[0][artistResponded][0]== 1">sadfdasfasf</div> -->
                            <div class="commissionReply">
                                <table class="table table-striped table-dark table-bordered ">
                                    <thead>
                                        <tr>
                                            <th>Commission Details</th>
                                            <th>Price</th>
                                            <th>Client Details</th>
                                            <th>Date of Commission</th>
                                            <th>Deadline</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    
                                    <tr v-for="request in requestObj" :key="request">   
                                            <!-- <td>userid: {{request.userid}} </td> -->
                                            <td data-label="Commission Details" >{{request.details}}</td>
                                            <td data-label="Price">${{request.price}} </td>
                                            <td data-label="Client Details">Username: {{request.userName}}<br>Email: {{request.userEmail}}</td>
                                            <td data-label="Commission Date">{{request.reqDate}} </td>
                                            <td data-label="Deadline">{{request.reqDeadline}} </td>
                                            <td v-if="request.artistResponded.includes(this.request.userid)" data-label="Status">{{request.artistResponse[request.artistResponded.indexOf(this.request.userid)]}}</td>
                                            <td v-else >
                                                <div data-label="Status" class="d-flex buttonsFormat" style="background-color:rgb(26, 17, 37); justify-content: center;">
                                                    <button class="btn btn-primary signin-on-hover register-on-hover" style="margin-right: 5px;" @click="updateResponse(request, true)">&#10003;</button>
                                                    <button class="btn btn-primary signin-on-hover register-on-hover" style="margin-left: 5px;" @click="updateResponse(request, false)"> &#10007; </button> 
                                                </div>
                                                
                                            </td>
                                    
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- sent -->
                    <div class="row" style="margin-top: 40px;">
                        <div class="col-10" style="border-top: 2px solid rgb(228,36,116)">
                            <h3 class="py-5">Commission sent</h3>
                            <div class="commissionSent"> 
                                    <table class="table table-striped table-dark table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Commission Details</th>
                                                <th>Price</th>
                                                <th>Client Details</th>
                                                <th>Date of Commission</th>
                                                <th>Deadline</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        

                                        <tr v-for="sent in sentObj" :key="sent"> 
                                            <!-- <td>{{sent.userid}} userid</td> -->
                                            <td data-label="Commission Details">{{sent.details}}</td>
                                            <td data-label="Price">${{sent.price}}</td>
                                            <td data-label="Client Details">Username: {{sent.userName}}<br>Email: {{sent.userEmail}}</td>
                                            <td data-label="Commission Date">{{sent.reqDate}}</td>
                                            <td data-label="Deadline">{{sent.reqDeadline}}</td>
                                            <td data-label="Status">

                                                <div v-for="(artist, index) in sent.artistList" :key="artist" style="background-color: rgb(26,17,37); padding: 0;">
                                                    <p v-if="sent.artistReply[index] == 'Accepted'" >
                                                        <router-link :to="'/profile/'+ sent.userid" style="color: green">
                                                            {{this.emailLinked[artist]}}
                                                        </router-link>
                                                        
                                                    </p>

                                                    <p v-else-if="sent.artistReply[index] == 'Rejected'">
                                                        <router-link :to="'/profile/'+ sent.userid" style="color: red">
                                                            {{this.emailLinked[artist]}}
                                                        </router-link>
                                                    </p>

                                                    <p v-else >
                                                        <router-link :to="'/profile/'+ sent.userid" style="color: yellow">
                                                            {{this.emailLinked[artist]}}
                                                        </router-link>
                                                    </p>
                                                </div>
                                                <!-- <table class="table table-striped table-dark table-bordered" style="background-color: rgb(26,17,37); margin: auto;">
                                                    <tr v-for="(artist, index) in sent.artistList" :key="artist">
                                                        <td v-if="sent.artistReply[index] == 'Accepted'" style="color: green">{{this.emailLinked[artist]}}</td>
                                                        <td v-else-if="sent.artistReply[index] == 'Rejected'" style="color: red">{{this.emailLinked[artist]}}</td>
                                                        <td v-else style="color: yellow" >{{this.emailLinked[artist]}}</td>
                                                    </tr>
                                                </table> -->
                                            </td>

                                        </tr> 
                                    </table>
                            </div>
                        </div>
                        
                    </div>
                    <!-- end of sent div -->

                </div>
                <!-- end of inbox div -->

            </div> 
            <!-- end of container div -->

            
        </pageBody>

        
        <div></div>
    </body>

</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
// import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'


import { collection, setDoc, getDocs, doc, query, where, updateDoc } from "firebase/firestore"; 
import { db } from "../src/main.js";
import { getAuth } from "firebase/auth";



export default {
    name: "commissionRequest",  

    data() {
        return {
            requestObj: [], //get all request sent to you 
            sentObj: [], //get all request sent by you
            usersLinked: {}, //get all emails linked to their userid
            emailLinked: {}, //get all userid linked to their emails
            request: {
                userid: "", 
                userName: "",
                userEmail: "", 
                artistList: [],
                artistReply: [],
                reqDate: "",
                reqTime: "",
                reqDeadline: "",
                price: "",
                details: "",
                artistResponded: [],
                artistResponse: [],
            },
            sendArtist: '', 
            date: null

        }
    },

    components: {
        navBars,
        logIn, 
        // registerUser,
        pageBody,
        Datepicker
    },

    created() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user){
            console.log(user.email);
            console.log(user.uid);
            this.request.userid=user.uid;
            this.request.userEmail=user.email;
            this.request.userName = user.displayName;
            // this.getAndAddData();
            this.readData();
        }
        else {
            console.log("No user")
        }

        
    },
    methods: {
        checkList(){
            console.log(this.request.artistList + "  <---ARTIST LIST")
        },
        displayRequest(){
            var requestContent = document.getElementById("requestForm")
            var inboxContent = document.getElementById("inbox")

            requestContent.style.display = "flex"
            inboxContent.style.display = "none"

            var requestNav = document.getElementById("requestNav")
            requestNav.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            var inboxNav = document.getElementById("inboxNav")
            inboxNav.style = "color: white"
        },
        displayInbox(){
            var requestContent = document.getElementById("requestForm")
            var inboxContent = document.getElementById("inbox")

            requestContent.style.display = "none"
            inboxContent.style = "flex-direction: column"

            var requestNav = document.getElementById("requestNav")
            requestNav.style = "color: white"
            var inboxNav = document.getElementById("inboxNav")
            inboxNav.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
        },
        deleteArtist(sendArtist, index){
            this.request.artistList.splice(index, 1);
        },
        
        addArtist(){
            if (this.sendArtist in this.usersLinked){
                this.request.artistList.push(this.sendArtist);
                this.sendArtist = '';
            }
            else {
                alert("Artist not found");
            }
            this.sendArtist = '';
        },

        // async getAndAddData(){
        //     const docRef = doc(db, "requests", this.request.userid + ' ');
        //     const docSnap = await getDoc(docRef);

        //     if (docSnap.exists()) {
        //         console.log("Document data:", docSnap.data());
        //         this.profile = docSnap.data();
        //         console.log("docsnap exists" +this.profile.listedImages);
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }

        // },

        async saveData(){
            console.log(this.usersLinked);
            const date = new Date(); 
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let time = date.getTime();
            this.request.reqDate= `${day}-${month}-${year}`;
            this.request.reqTime= `${time}`;
            if (this.sendArtist.length > 0){
                this.request.artistList.push(this.sendArtist);
            }
            console.log(this.request.artistList);

            for (let i = 0; i < this.request.artistList.length; i++){
                this.request.artistList.splice(i, 1, this.usersLinked[this.request.artistList[i]]);
            }
            console.log('hii' + this.request.artistList);

            for (let i = 0; i < this.request.artistList.length; i++){
                this.request.artistReply.push("Pending");
            }

            console.log(this.request);
            await setDoc(doc(db, "requests", this.request.userid +  '|' + this.request.reqTime), this.request)
            .then(() =>{
                // console.log("Document written with ID: ", docRef.id);
                this.reset();
            })
        },

        async readData(){
            //read request sent to you 
            const q = query(collection(db, "requests"), where("artistList", "array-contains", this.request.userid));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.requestObj.push(doc.data());
            });


            //read request sent by you 
            const sent = query(collection(db, "requests"), where("userid", "==", this.request.userid));

            const sentSnapshot = await getDocs(sent);
            sentSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.sentObj.push(doc.data());
            });
            console.log(this.sentObj)

            //get userid linked to email 
            const usersSnapshot = await getDocs(collection(db, "profiles"));
            usersSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                this.usersLinked[doc.data().email] = doc.id;
                this.emailLinked[doc.id] = doc.data().email;
            });
            console.log(this.requestObj[0])
        },

        reset(){
                Object.assign(this.$data, this.$options.data.apply(this) )
        },

        async updateResponse(request, reply){
            let document = request.userid +  '|' + request.reqTime
            const requestRef = doc(db, "requests", document);
            if (reply){
                request.artistReply[request.artistList.indexOf(this.request.userid)] = "Accepted";  
                request.artistResponse.push("Accepted");
                request.artistResponded.push(this.request.userid);
            }
            else {
                request.artistReply[request.artistList.indexOf(this.request.userid)] = "Rejected";  
                request.artistResponse.push("Rejected");
                request.artistResponded.push(this.request.userid);
                      
            }
            await updateDoc(requestRef, {
                artistReply: request.artistReply,
                artistResponded: request.artistResponded,
                artistResponse: request.artistResponse
            });
        },
       
    },
    mounted(){
            var inbox = document.getElementById("inbox")
            inbox.style.display = "none"
            var navStart = document.getElementById("requestNav")
            navStart.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
    },

} 


</script>

<style scoped>
/* NAR BAR sTART */
nav ul {
  list-style: none;
  text-align: center;
  margin-right: 80px;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  /* font-weight: 800; */
  margin: 0 10px;
  font-size: 20px;
  display: inline-block
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}
nav ul li a:hover {
  color: rgb(228,36,116);
}
/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: rgb(228,36,116);
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: #023f1c;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
/* NAR BAR END */

.request{
    margin-top: 20px;
    margin-bottom: 100px;
}


/* copy */
.buttonStyle{
    background-color: rgb(228,36,116);
    color: white
}

.add-on-hover {
border: none;
outline: none;
color:  #fefffe;
background: #e42474;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
}
.add-on-hover:before {
content: '';
background: linear-gradient(45deg, #e42474, #7a00ff, #ff00c8);
position: absolute;
top: -2px;
left:-2px;
background-size: 400%;
z-index: -1;
filter: blur(5px);
width: calc(100% + 4px);
height: calc(100% + 4px);
animation: glowing 20s linear infinite;
opacity: 0;
transition: opacity .3s ease-in-out;
border-radius: 10px;
}

.add-on-hover:active {
    color: #e42474;
}

.add-on-hover:active:after {
    background: transparent;
}

.add-on-hover:hover:before {
    opacity: 1;
}

.add-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    background: #e42474;
    left: 0;
    top: 0;
    border-radius: 10px;
}

input[type=text],
input[type=password]{
    color:#fefffe;
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

.dp__theme_dark {
   --dp-background-color: rgb(32,23,43);
   --dp-text-color: #fffeee;
   --dp-hover-color: #484848;
   --dp-hover-text-color: #ffffff;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #005cb2;
   --dp-primary-text-color: #ffffff;
   --dp-secondary-color: #a9a9a9;
   --dp-border-color: #32263f;
   --dp-menu-border-color: #2d2d2d;
   --dp-border-color-hover: #e42474;
   --dp-disabled-color: #737373;
   --dp-scroll-bar-background: #212121;
   --dp-scroll-bar-color: #484848;
   --dp-success-color: #e42474;
   --dp-success-color-disabled: #e42474;
   --dp-icon-color: #959595;
   --dp-danger-color: #e53935;
   --dp-highlight-color: rgba(0, 92, 178, 0.2);
}



/* this part is for the commission detail */

.field__input {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

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

/* body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
} */

.page {
    box-sizing: border-box;
    width: 100%;
    max-width: 480px;
    /* margin: auto; */
    padding: 1rem;
    display: grid;
    grid-gap: 50px;
}

.field__input__bio {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: inherit;
}

.field__input__bio:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

.field__input__bio:focus::-moz-placeholder {
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

.field__input__bio {
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 10rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input__bio:focus {
    outline: none;
}

.field__input__bio::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input__bio::-moz-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input__bio:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__input__bio:focus::-moz-placeholder {
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

.field__input__bio:focus~.field__label-wrap::after {
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

.field__input__bio:focus~.field__label-wrap .field__label,
.field__input__bio:not(:placeholder-shown)~.field__label-wrap .field__label {
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

.field_v2 .field__input__bio:focus~.field__label-wrap::after {
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

.field_v3 .field__input__bio:focus~.field__label-wrap::after {
    height: 100%;
}

tr:hover{
    color:  #e42474;
}
th {
    color:  #e42474;
}
td{
    width: 100%
}
.buttonsFormat{
    width: 100%;
}
table {
  /* border: 1px solid #ccc; */
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  background-color: rgb(26, 17, 37);
  
}

/* table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
} */

table tr {
  /* background-color: #f8f8f8; */
  border: 1px solid rgb(50,38,63);
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
  overflow: hidden;
}

table th {
  font-size: .9em;
  letter-spacing: .1em;
  text-transform: uppercase;
  background-color: rgb(26, 17, 37);
}

@media screen and (max-width: 1100px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid rgb(50,38,63);
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid rgb(50,38,63);
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    /* text-transform: uppercase; */
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}

</style>