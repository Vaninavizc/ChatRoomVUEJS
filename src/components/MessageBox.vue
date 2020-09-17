<template>
    <div class="submitArea">
        <form @submit.prevent="onSubmit">
            <input v-model="message" type="text" class="inputBox" placeholder="Ecrire votre message ici ...">
            <img class="popGif" src="http://vaninaidiart.fr/avatars/A4.png">

        </form>
        <form @submit.prevent="onSubmit">
            <button class="btnSend"><img class="sendGif" src="../assets/sendGif.gif"></button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ' '
    }
  }
}
</script>

<style>
    .submitArea{
      display: flex;
        width: 100%;
        flex-direction: row;
        position: sticky;
        bottom: -1px;
        background-color: white;
    }
    input, select{
        padding: 20px;
        border: 2px solid #EFEFEF;
        box-sizing: border-box;
        border-radius: 20px;
        outline: none;
    }
    .inputBox{
        margin-left: 30px;
        width: 140vh;
        margin-bottom: 30px;
    }
    button, select{
	    text-decoration:none;
	    position:relative;
        display:block;
        height: 55px;
        width: 55px;
        margin-left: 12px;
        border-radius: 50%;
        /* display:inline-block; */
        color: white;
        background: #6C6C6C;
        box-sizing: border-box;
        border: 0;
        outline: none;
        cursor: pointer;
    }
    .popGif{
      display: none;
      justify-content: flex-end;
      width: 5%;
      z-index: -1;
    }
    .sendGif{
      margin-left: -43px;
      margin-top: -20px;
      width: 300%;
    }
    
</style>
