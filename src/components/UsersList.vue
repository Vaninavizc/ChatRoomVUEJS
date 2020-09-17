<template>
    <ul class="usersList">
        <li class="usersListTitle"><h3>People online</h3></li>
        <br> <br>
        <UsersListUser
            v-for="(user, i) in users"
            :key="i"
            :user="user"
            :avatar="avatars[user.username]"
            class="usersListUser"/>
    </ul>
</template>

<script>
import store from '../store'
import UsersListUser from './UsersListUser'
export default {
    data() {
        return{
            avatars: store.avatars
        }
    },
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser
  }
}

</script>

<style>
    h3{
        font-size: 20px;
    }
    .usersList{
        overflow-y: scroll;
        height: 100vh;
        -ms-overflow-style: none;
        height: 80vh;
    }
    .usersList::-webkit-scrollbar {
      display: none;
    }
    .usersListUser{
        margin-bottom: 30px;
    }
    .usersListTitle{
        position: absolute;
        top: 70px;
        padding-top: 30px;
        padding-right: 40px;
        padding-bottom: 30px;
        background-color: white;
    }
</style>
