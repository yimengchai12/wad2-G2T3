<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
        <div>
        </div>
        <pageBody>
            <div class="container-fluid">

                <h1 class="textFormat">Artwork Commissions</h1>

                <!-- Request and Sent -->
                <div class="row">
                    
                    <!-- Request -->
                    <div class="col textFormat">
                        <h3 class="textFormat">Commission Request</h3>

                        <div class="form-group">
                            Commission Details:
                            <textarea placeholder="Details" v-model="request.details" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            Commission Deadline:
                            <textarea placeholder="Deadline" v-model="request.deadline" class="form-control"></textarea>
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

                    <!-- Sent -->
                    <div class="col">
                        <h3 class="textFormat">Commission sent</h3>
                        <div v-for="sent in sentObj" :key="sent">
                            <table class="table table-striped table-dark table-bordered">
                                <tr> 
                                    <td>{{sent.userid}} userid</td>
                                    <td>{{sent.details}} user details</td>
                                    <td>{{sent.price}} userprice</td>
                                    <td>{{sent.userEmail}} useremail</td>
                                    <td>{{sent.userName}} username</td>
                                    <td>{{sent.reqDate}} Date</td>
                                    <td>{{sent.reqDeadline}} Deadline</td>

                                    <table class="table table-striped table-dark table-bordered">
                                        <tr v-for="(artist, index) in sent.artistList" :key="artist">
                                            <td>{{this.emailLinked[artist]}}</td>
                                            <td>{{sent.artistReply[index]}}</td>
                                        </tr>
                                    </table>

                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

                <!-- Replies -->
                <div class="row">

                    <div class="col">
                        <h3 class="textFormat">Commission replies</h3> 
                        <!-- <div v-if="requestObj[0][artistResponded][0]== 1">sadfdasfasf</div> -->
                        <div class="commissionReply">
                            <table class="table table-striped table-dark table-bordered ">
                                <tr v-for="request in requestObj" :key="request">
                                    <div v-if="request.artistResponded.includes(this.request.userid)">
                                        
                                        <td>userid: {{request.userid}} </td>
                                        <td>  user details:{{request.details}}</td>
                                        <td>userprice:{{request.price}} </td>
                                        <td>useremail:{{request.userEmail}} </td>
                                        <td>username:{{request.userName}} </td>
                                        <td>status: {{request.artistResponse[request.artistResponded.indexOf(this.request.userid)]}}</td>
                                    </div>
                                    <div v-else>
                                        <p>{{request.userid}} userid</p>
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

        deleteArtist(sendArtist, index){
            this.request.artistList.splice(index, 1);
        },
        
        addArtist(){
            this.request.artistList.push(this.sendArtist);
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
            console.log(this.request.artistList);

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

} 


</script>

<style>
.textFormat{
    color: white;
    text-align: left;
}

    
</style>