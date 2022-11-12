<template>
    <div ref="talkjs" style="height: 500px;">
                <i>Loading chat...</i>
            </div>
</template>

<script>
    import Talk from 'talkjs';
    import { getAuth, onAuthStateChanged} from "firebase/auth";
   
    export default {
        name: 'ChatPage',
        props: ["currentUser", "currentUserName" ,"data"],
        async mounted() {
          await Talk.ready

          let auth;
          let email;
          let name;
          auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            
              if (user) {
                  email = user.email
                  name = user.displayName

                  
            const me = new Talk.User({
              id: email,
              name: name,
              email: email,
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
          });
          console.log(email)
            
    
        }
    }

</script>