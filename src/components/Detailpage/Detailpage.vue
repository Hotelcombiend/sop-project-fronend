<template>
  <div>
    <navbar></navbar>
    <div>
      <b-img src="https://www.imgacademy.com/sites/default/files/inline-images/lunch.jpg" alt="Responsive image" fluid></b-img>
    </div>

    <h1 style="text-align: center; margin-top: 20px;">เลือกประเภทอาหาร</h1>
    <food-detail @choosefood="getfoodset"></food-detail>

    <div style="border: 1px solid black;margin-top: 20px; background-color: black;padding: 5px; margin: 60px;" ></div>
    <h1 style="text-align: center; margin-top: 60px;">เลือกประเภทเครื่องดื่ม</h1>
    <drink-detail-vue @choosedrink="getdrinkset"></drink-detail-vue>

    <div style="border: 1px solid black;margin-top: 50px; background-color: black; padding: 5px; margin: 60px;"></div>
    <h1 style="text-align: center; margin-top: 60px;">เลือกอุปกรณ์</h1>
    <soundsystem-detail-vue @choosesound="getsoundset" @editmic="getmic"></soundsystem-detail-vue>


  <div style="text-align: center;">
    <button @click="gotoOrderpage()">Go to DetailPage</button>
  </div>
  </div>
  </template>
    
  <script>
import FoodDetail from './FoodDetail.vue'
import DrinkDetailVue from './DrinkDetail.vue'
import Navbar from '../Homepage/NavbarReservetion.vue'
import SoundsystemDetailVue from './SoundsystemDetail.vue'

  export default {
    name: 'Detailpage',
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
      },
      getmic(set3){
        this.Homepagedata.editmic = set3
      },
      gotoOrderpage(){
        this.$router.push({name: "orderpage", params:{data: this.Homepagedata}});
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