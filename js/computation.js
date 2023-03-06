// const app3 = Vue.createApp({
//   data: () => ({
//     firstName: '',
//     lastName: '',
//     fullName: ''
//   }),
//   watch: {
//     firstName: function(value){
//       this.fullName = value + ' ' + this.lastName
//     },
//     lastName: function(value){
//       this.fullName = this.firstName + ' ' + value
//     }
//   }
// })
const app3 = Vue.createApp({
  data: () => ({
    firstName: '',
    lastName: '',
  }),
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
app3.mount('#app3')