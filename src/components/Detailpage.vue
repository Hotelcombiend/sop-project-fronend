<template>
    <h1>Hello world</h1>
  </template>
    
  <script>
  
  export default {
    name: 'App',
    components: {
    },
    data(){
        return{
            Homepagedata:{},
        }
    },
    created(){
        this.Homepagedata=this.$route.params.data
    }
    
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }
  </style>