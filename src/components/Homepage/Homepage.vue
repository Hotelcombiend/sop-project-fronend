<template>
    <div id="app">
      <NavbarRe/>
        <h1 style="margin-top: 5%;">Room</h1>
        <div class="row gy-5">
        <div class="col-3">
          <RadioRoom class="p-3" sizeroom="smallroom" :chooseroom="Homepagedata.chooseroom" @onUpdateRoom="onclickChoose"/>
        </div>
        <div class="col-3">
          <RadioRoom class="p-3" sizeroom="mediaumroom" :chooseroom="Homepagedata.chooseroom" @onUpdateRoom="onclickChoose"/>
        </div>
        <div class="col-3">
          <RadioRoom class="p-3" sizeroom="largeroom" :chooseroom="Homepagedata.chooseroom" @onUpdateRoom="onclickChoose"/>
        </div>
        <div class="col-3">
          <RadioRoom class="p-3" sizeroom="partyroom" :chooseroom="Homepagedata.chooseroom" @onUpdateRoom="onclickChoose"/>
        </div>
      </div>
      <h1 style="margin-top: 5%;">Reserve Date</h1>
      <CalenderVue style="margin-top: 5%;" @clickdate="getDate"></CalenderVue>
      <button @click="gotoDetailpage()">Go to DetailPage</button>
    </div>
  </template>
    
  <script>
  import NavbarRe from './NavbarReservetion.vue'
  import RadioRoom from './RoomRadio.vue'
  import CalenderVue from './Calender.vue'
  
  export default {
    name: 'Homepage',
    components: {
      NavbarRe,
      RadioRoom,
      CalenderVue
    },
    data(){
      return{
        Homepagedata:{
            chooseroom: '',
            reverdate:'',
            foodset:'',
            drinkset:'',
            soundset:'',
        }
      }
    },
    methods:{
      onclickChoose(room){
        this.Homepagedata.chooseroom = room
      },
      getDate(date){
        this.Homepagedata.reverdate = date
      },
      gotoDetailpage(){
        this.$router.push({name: "detailpage", params:{data: this.Homepagedata}});
      }
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