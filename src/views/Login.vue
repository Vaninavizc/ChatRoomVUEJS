<template>
    <body>
        <div class="container">
        <div class="error" v-if="error">
            {{ error.message }}
        </div>
        <div class="register">
            <h1>Social</h1>
            <p>The new common language will be more <br> simple and regular than the existing <br> European languages.</p>
            <br>
            <div class="loginForm">
                <form @submit.prevent="onSubmit">
                    <input class="inputLogin" type="text" v-model="username" placeholder="Surnom">
                </form>
                <form @submit.prevent="onSubmit">
                    <button class="btnEnter"><img class="arrowRight" src="../assets/righArrow.gif"></button>
                </form>
            </div>
        </div>
        <div class="animItem">
            <img src="../assets/illu.gif">
        </div>
    </div>
    </body>

</template>

<script>

import store from '../store'

export default {
  data () {
    return {
      username: '',
      error: store.error
    }
  },
  methods: {
    onSubmit () {
      store.userRegister(this.username)
      this.username = ''
    }
  }
}

</script>

<style>
    hr{
        z-index: -1;
        margin-top: -90%;
        margin-left: 100px;
    }
    body{
        color: black;
        margin: 0;
    }
    img{
        width: 100%;
    }
    .container{
        display: flex;
        justify-content: space-between;
    }
    .animItem{
        margin-right: 30px;
    }
    .register{
        display: flex;
        flex-direction: column;
        margin-left: -20%;
        margin-top: 10%;
    }
    .loginForm{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 90px;
    }

    .inputLogin{
        width: 20em;
    }
    .arrowRight{
        width: 70%;
       transform: rotate(1.75turn);
    }
/*
    input{
        width: 100%;
    } */
</style>
