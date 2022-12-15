<template>
  <div>
    <navbar></navbar>
    <div>
      <b-img src="https://www.imgacademy.com/sites/default/files/inline-images/lunch.jpg" alt="Responsive image" fluid></b-img>
    </div>
    
    <h1 style="text-align: center; margin-top: 20px;">เลือกประเภทอาหาร</h1>
    <food-detail @choosefood="getfoodset"></food-detail>

    <h1 style="text-align: center; margin-top: 60px;">เลือกประเภทเครื่องดื่ม</h1>
    <drink-detail-vue @choosedrink="getdrinkset"></drink-detail-vue>

    <h1 style="text-align: center; margin-top: 60px;">เลือกอุปกรณ์</h1>
    <soundsystem-detail-vue @choosesound="getsoundset"></soundsystem-detail-vue>
  </div>
  </template>
    
  <script>
import FoodDetail from './FoodDetail.vue'
import DrinkDetailVue from './DrinkDetail.vue'
import Navbar from '../Homepage/NavbarReservetion.vue'
import SoundsystemDetailVue from './SoundsystemDetail.vue'

  export default {
    name: 'App',
    components: {
        FoodDetail,
        DrinkDetailVue,
        Navbar,
        SoundsystemDetailVue
    },
    data(){
        return{
            Homepagedata:{},
        }
    },
    created(){
        this.Homepagedata=this.$route.params.data
    },
    methods:{
      getfoodset(set){
        this.Homepagedata.foodset = set
      },
      getdrinkset(set1){
        this.Homepagedata.drinkset = set1
      },
      getsoundset(set2){
        this.Homepagedata.soundset = set2
      }
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