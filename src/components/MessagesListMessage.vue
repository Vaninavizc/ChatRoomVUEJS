<template>
    <div class="messageItem" >
        <li class="messageName" v-bind:class = "(isCurrentUser)?'nameUser':'nameOther'">
            <p><font-awesome-icon class="circleOther" icon="circle"/>{{ message.user.username }}</p>
        </li>
        <br>
        <li class="messageText" v-bind:class = "(isCurrentUser)?'messageUser':'messageOther'" >
            <span class="currentUserMessage" v-if="isCurrentUser">{{ message.text }}</span>
            <span v-else>{{ message.text }}</span>
        </li>
    </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username
    }
  },
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
    li{
        list-style-type: none;
    }
    span{
        max-width: auto;
    }
    .messageName{
        font-weight: bold;
    }
    .messageOther{
        padding: 8px;
        max-width: fit-content;
        background: #EFEFEF;
        border-radius: 13px;
    }
    .currentUser{
        display: flex;
        color: black;
    }
    .messageUser{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 8px;
        color: white;
        background-color: #6C6C6C;
        border-radius: 13px;
        box-sizing: border-box;
        flex-grow: 1;
        margin-bottom: 20px;
    }
    .nameUser{
        display: flex;
        justify-content: flex-end;
    }
    .nameOther{
        justify-content: start;
        color: black;
    }
    .messageText{
        overflow-wrap: break-word;
    }
</style>
