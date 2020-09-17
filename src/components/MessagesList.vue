<template>
<div id="container" ref="list">
    <ul class="messages">
        <MessagesListMessage
        v-for="(message, i) in messages"
        :key="i"
        :message="message"
        />
    </ul>
</div>
</template>

<script>

import MessagesListMessage from './MessagesListMessage'

export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  components: {
    MessagesListMessage
  },
  watch: {
    messages() {
      console.log("new message");
      const list = this.$refs.list;
      this.$nextTick(() => {
        this.scrollDown(list);
      });
    },
  },
  mounted() {
    this.scrollDown(this.$refs.list);
  },
  methods: {
    scrollDown(e) {
        console.log(e)
      e.childNodes[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    },
  },
}

</script>

<style>
    .messages{
        z-index: 0;
        position: relative;
        overflow-y: hidden;
    }

</style>
