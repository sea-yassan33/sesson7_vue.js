const app2 = Vue.createApp({
  data: () => ({
    km: 0,
    m: 0,
  }),
  watch: {
    km: function(value){
      console.log(value)
      this.km = value
      this.m = value * 1000
    },
    m: function(value){
      this.m = value
      this.km = value / 1000
    }
  }
})
app2.mount('#app2')