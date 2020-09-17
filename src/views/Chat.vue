<template>
  <body>
    <div class="chatRoom">
          <div class="usersList">
              <UsersList :users="store.users" />
          </div>
          <div id="messagesItem">
              <MessagesList :messages="store.messages" />
              <MessageBox @sendMessage="onSendMessage"/>
          </div>
          <!-- <div class="backBottom">
              <button class="btnSend"><font-awesome-icon class="iconPlane" icon="arrow-down"/></button>
          </div> -->
      </div>
  </body>

</template>

<script>
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },

  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    }
  },

  components: {
    MessageBox,
    MessagesList,
    UsersList
  }
}
</script>

<style>

    #messagesItem{
        flex-grow: 4;
        height: 700px;
        overflow-y: scroll;
        width: 40%;
        justify-content: flex-end;
    }
    #messagesItem::-webkit-scrollbar {
    display: none;
    }
    .chatRoom{
        display: flex;
        overflow-x: hidden;
        flex-direction: row;
        margin: 70px;
    }
    .usersList{
      display: block;
    }
</style>
