import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'

const socket = io('https://bddi-2019-chat.herokuapp.com/')

const AVATARS = ['http://vaninaidiart.fr/avatars/A1.png', 
            'http://vaninaidiart.fr/avatars/A2.png', 
            'http://vaninaidiart.fr/avatars/A3.png', 
            'http://vaninaidiart.fr/avatars/A4.png', 
            'http://vaninaidiart.fr/avatars/A5.png', 
            'http://vaninaidiart.fr/avatars/A6.png', 
            'http://vaninaidiart.fr/avatars/A7.png',
            'http://vaninaidiart.fr/avatars/A8.png', 
            'http://vaninaidiart.fr/avatars/A9.png', ]

const store = new Vue({
  data: {
    isRegistered: false,
    error: {},
    user: {},
    users: [],
    messages: [],
    avatars: {
        Vanina: ''
    }
  },

  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },

  methods: {

    registerListeners () {
      socket.on('connect', () => {
        console.log('connected')
        const sessionUser = sessionStorage.getItem('user')

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username)
        }
      })

      socket.on('disconnect', () => {
        this.isRegistered = false
      })

      socket.on('event', (infos) => {
        console.log('event', infos)
      })

      socket.on('user registered', infos => {
        this.isRegistered = true
        this.user = infos
        sessionStorage.setItem('user', JSON.stringify(infos))
      })

      socket.on('users update', ({ users, user, type }) => {
        if(this.users.length > 0){
            if(type === 'join'){
                this.avatars[user.name] = this.generateRandomAvatar()
            } else {
                delete this.avatars[user.username]
            }
        } else {
            users.forEach((user) => {
                this.avatars[user.username] = this.generateRandomAvatar()
            });
        }
        this.users = users
        console.log('users update', users)
      })

      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })

      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })

      socket.on('chat error', (error) => {
        this.$set(this, 'error')
      })
    },

    generateRandomAvatar(){
        return AVATARS[Math.floor(Math.random() * AVATARS.length)]
    },

    logout () {
      sessionStorage.clear()
      socket.disconnect()
    },

    // API calls

    userRegister (username) {
      const avatar = 'https://vignette.wikia.nocookie.net/jaygt/images/4/41/Hidethepainharold.png/revision/latest/scale-to-width-down/340?cb=20190714050339'
      socket.emit('user register', { username, avatar })
    },
    userTyping () {

    },
    messageNew (message) {
      socket.emit('message new', message)
    }

  },

  created () {
    this.registerListeners()
  }
})

export default store
