<template>
    <div ref="talkjs" style="height: 500px;">
                <i>Loading chat...</i>
            </div>
</template>

<script>
    import Talk from 'talkjs';
    export default {
        name: 'ChatPage',
        props: ["currentUser", "currentUserName" ,"data"],
        data(){
          return{
              id: "",
              name: "",
              email:"test@gmail.com",
              
          }
        },
        async mounted() {
          await Talk.ready
          if(this.currentUserName == undefined || this.currentUserName == null || this.currentUserName == ""){
            this.id = "test";
            this.name = "Lily";
            this.email = "lily@gmail.com";
            }
          else{
            this.id = this.currentUser;
            this.name = this.currentUserName;
            this.email = this.currentUser;
          }
          const me = new Talk.User({
            id: this.id,
            name: this.name,
            email: this.email,
            welcomeMessage: "Hey there! How are you? :-)",
            role: "booker"
          })
                
          const talkSession = new Talk.Session({
            appId: 'tEV2hKRM',
            me: me,
            showChatHeader: false,
          });

          const other = new Talk.User({
            id: this.data.chatUserEmail,
            name: this.data.chatUserName,
            email: this.data.chatUserEmail,
            photoUrl: this.data.chatUserPhoto,
            welcomeMessage: 'Hey, how can I help?',
            role: 'default',
          });

          const conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
          );

          conversation.setParticipant(me);
          // if(this.data.chatNow == true){
          //   conversation.setParticipant(other);
          // }
          //  //this

          const inbox = talkSession.createInbox();
          // if(this.data.chatNow == true){
          //     inbox.select(conversation); //this
          // }

          conversation.setParticipant(other);
          inbox.select(conversation); //this
          inbox.mount(this.$refs.talkjs);

  
        }
    }

</script>