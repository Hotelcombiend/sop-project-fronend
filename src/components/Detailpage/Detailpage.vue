<template>
  <div>
    <h1>เลือกประเภทอาหาร</h1>
    <food-detail></food-detail>
  </div>
  </template>
    
  <script>
import FoodDetail from './FoodDetail.vue'
  export default {
    name: 'App',
    components: {
        FoodDetail
    },
    data(){
        return{
            Homepagedata:{},
        }
    },
    created(){
        this.Homepagedata=this.$route.params.data
    },
    
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