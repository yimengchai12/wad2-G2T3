<template>
    <logIn></logIn>
    <!-- <registerUser></registerUser> -->
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <div>
        </div>
        <pageBody>
            <div class="container-fluid">

                <h1 class="textFormat">Artwork Commissions</h1>

                <!-- nav bar -->
                <div class="row">
                    <section style="padding-top: 40px; padding-left: 0px;">
                        <nav class="stroke">
                            <ul>
                                <li style="padding-right: 40px;"><a id="requestNav" class="" href="#" @click="displayRequest()">Request</a></li>
                                <li style="padding-left: 40px;"><a id="inboxNav" class="" href="#" @click="displayInbox()">Inbox</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <!-- Request -->
                <div class="row" id="requestTab">
                    <div class="col-5 textFormat">
                        <h3 class="textFormat">Commission Request</h3>

                        <div class="form-group">
                            Commission Details:
                            <textarea placeholder="Details" v-model="request.details" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            Commission Deadline:
                            <textarea placeholder="Deadline" v-model="request.reqDeadline" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            Price:
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" placeholder="0.00" aria-label="Amount" v-model.number="request.price">
                            </div>
                        </div>

                        <div class="form-group">
                            Artists:
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Add Artists" aria-describedby="button-addon2" v-model="sendArtist" @keyup.enter="addArtist">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addArtist" >Add Artist</button>
                            </div>

                            <!-- <input type="text" @keyup.enter="addTag" placeholder="Tags (Press enter to add tags)" v-model="tag" class="form-control"> -->
                            <div class="d-flex">
                                <p v-for="(sendArtist,index) in request.artistList" :key="sendArtist" class="text-start p-2 bg-danger me-2">
                                    <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="deleteArtist(sendArtist,index)"></button>
                                    <span class="p-1 me-2 text-light"> {{sendArtist}}</span>  
                                </p>
                            </div>
                        </div>

                        <div class="form-group text-center" >
                            <button class="btn btn-primary" @click="saveData" >Save Data</button>
                        </div>

                    </div>
                </div>

                <!-- Sent -->
                <div class="row" id="sentTab">
                    <h3 class="textFormat">Commission sent</h3>
                    <!-- <div v-if="sentObj = []">
                        <h6>No Commissions Sent</h6>
                    </div> -->
                    <div >
                        <table class="table table-striped table-dark table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Details</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Artists</th>
                                </tr>
                            </thead>
                        

                            <tr v-for="sent in sentObj" :key="sent"> 
                                <!-- <td>{{sent.userid}} userid</td> -->
                                <td>{{sent.details}}</td>
                                <td>${{sent.price}}</td>
                                <!-- <td>{{sent.userEmail}} useremail</td> -->
                                <!-- <td>{{sent.userName}} username</td> -->
                                <td>{{sent.reqDate}}</td>
                                <td>{{sent.reqDeadline}}</td>

                                <table class="table table-striped table-dark table-bordered" style="height: 100%;">
                                    <tr v-for="(artist, index) in sent.artistList" :key="artist">
                                        <td>{{this.emailLinked[artist]}}</td>
                                        <td>{{sent.artistReply[index]}}</td>
                                    </tr>
                                </table>
                            </tr>
                        </table>
                    </div>
                    
                </div>

                
                <!-- Replies -->
                <div class="row" id="repliesTab">
                    <div class="col">
                        <h3 class="textFormat">My Commission Requests</h3> 
                        <!-- <div v-if="requestObj[0][artistResponded][0]== 1">sadfdasfasf</div> -->
                        <div class="commissionReply">
                            <table class="table table-striped table-dark table-bordered ">
                                <tr v-for="request in requestObj" :key="request">
                                    <div v-if="request.artistResponded.includes(this.request.userid)">
                                        <!-- <td>userid: {{request.userid}} </td> -->
                                        <td>user details:{{request.details}}</td>
                                        <td>userprice:{{request.price}} </td>
                                        <td>useremail:{{request.userEmail}} </td>
                                        <td>username:{{request.userName}} </td>
                                        <td>status: {{request.artistResponse[request.artistResponded.indexOf(this.request.userid)]}}</td>
                                    </div>
                                    <div v-else>
                                        <!-- <p>{{request.userid}} userid</p> -->
                                        <p>{{request.details}} user details</p>
                                        <p>{{request.price}} userprice</p>
                                        <p>{{request.userEmail}} useremail</p>
                                        <p>{{request.userName}} username</p>
                                        <p>{{request.reqDate}} Date</p>
                                        <p>{{request.reqDeadline}} Deadline</p>

                                        <div class="d-flex">
                                            <button class="btn btn-primary" @click="updateResponse(request, true)">Accept</button>
                                            <button class="btn btn-primary" @click="updateResponse(request, false)">Reject</button>
                                        </div>

                                    </div>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
            
        </pageBody>

        
        <div></div>
    </body>

</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
// import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"


// import { collection, setDoc, getDocs, doc, query, where, updateDoc, documentId } from "firebase/firestore";
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

        }
    },

    components: {
        navBars,
        logIn, 
        // registerUser,
        pageBody,
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
        displayRequest() { 
            console.log("change to request tab")
            var sent = document.getElementById("sentTab")
            var request = document.getElementById("requestTab")
            var replies = document.getElementById("repliesTab")

            // show only request contents
            sent.style.display = "none"
            replies.style.display = "none"
            request.style.display = "flex"

            // style seclected request nav
            var inboxSelected = document.getElementById("inboxNav")
            var requestSelected = document.getElementById("requestNAv")
            inboxSelected.style = "color: white"
            requestSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116); background-color: white"
        },
        displayInbox() { 
            console.log("change to inbox tab")
            var sent = document.getElementById("sentTab")
            var request = document.getElementById("requestTab")
            var replies = document.getElementById("repliesTab")

            // show only inbox contents
            sent.style.display = "flex"
            replies.style.display = "flex"
            request.style.display = "none"

            // style seclected inbox nav
            var inboxSelected = document.getElementById("inboxNav")
            var requestSelected = document.getElementById("requestNAv")
            inboxSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            requestSelected.style = "color: white"
            console.log(inboxSelected)
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
        }

        
    },
    mounted(){
        var sent = document.getElementById("sentTab")
        var request = document.getElementById("requestTab")
        var replies = document.getElementById("repliesTab")

        // show only request contents
        sent.style.display = "none"
        replies.style.display = "none"
        request.style.display = "flex"

        // style seclected request nav
        var inboxSelected = document.getElementById("inboxNav")
        var requestSelected = document.getElementById("requestNAv")
        inboxSelected.style = "color: white"
        requestSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116); background-color: white" 
    }

} 


</script>

<style scoped>
.textFormat{
    color: white;
    text-align: left;
}
nav ul {
  list-style: none;
  text-align: center;
  margin-right: 90px;
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
    
</style>