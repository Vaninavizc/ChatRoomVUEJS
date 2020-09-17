<template>
    <div>
        <li v-bind:class = "(isCurrentUser)?'circleUser':'circleOther'">
            <div class="onlyUserList">
                <img class="icon" :src="avatar">
                <h4 v-if="isCurrentUser" class="User">{{ user.username }}(Moi)</h4>
                <h4 v-else>{{ user.username }}</h4>
            </div>
        </li>
    </div>
</template>

<script>

import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.user.username === store.$data.user.username
    },
    avatar(){
        return store.avatars[this.user.username]
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  avatar: {
      type: String
  }
}

</script>

<style>
    body{
        overflow: hidden;
    }
    .onlyUserList{
        display: flex;
    }
    .circleUser{
        color: #5FBFAA;
        padding-right: 10px;
    }
    .circleOther{
        color: #FEAD29;
        padding-right: 10px;
    }
    h4{
        color: black;
        margin-left: 30px;
    }
    .icon{
        width: 20%;
        height: 20%;
        margin-top: 10px;
    }
    
</style>
