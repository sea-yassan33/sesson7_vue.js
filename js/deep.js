const app4 = Vue.createApp({
  data: () => ({
    colors: [
      {name: 'Red'},
      {name: 'Green'},
      {name: 'Blue'},
    ]
  }),
  watch: {
    colors: {
      handler: function(newValue, oldValue){
        console.log('Update!')
      },
      deep: true
    }
  },
  methods: {
    onClick: function(event){
      this.colors[1].name = "White"
    }
  }
})
app4.mount('#app4')