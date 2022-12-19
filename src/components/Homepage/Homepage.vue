<template>
  <div id="app">
    <NavbarRe/>
      <h1 style="margin-top: 5%;">RoomSize</h1>
      <div class="row gy-5">
      <div>
        <RadioRoom 
        class="p-3" 
        :chooseroom="Homepagedata.chooseroom.name" 
        @onUpdateRoom="onclickChoose"
        />
      </div>
    </div>


    <h1 style="margin-top: 5%;">Reserve Date</h1>
      <CalenderVue style="margin-top: 5%;" @clickdate="getDate"></CalenderVue>

    <h1 style="margin-top: 5%;">Reserve Time</h1>
      <timedate-vue @timereserve="gettime"></timedate-vue>

      <!-- <button @click="gotoDetailpage()">Go to DetailPage</button> -->
      <b-button  class="mt-5 mb-3 " id="show-btn" @click="gotoDetailpage()">ไปหน้าถัดไป</b-button>

      <notifications group="foo" />
      <notifications group="foo1" />
  </div>
</template>
  
<script>
import NavbarRe from './NavbarReservetion.vue'
import RadioRoom from './RoomRadio.vue'
import CalenderVue from './Calender.vue'
import SelectDateVue from './SelectDate.vue'
import TimedateVue from './Timedate.vue'

export default {
  name: 'Homepage',
  components: {
    NavbarRe,
    RadioRoom,
    CalenderVue,
    SelectDateVue,
    TimedateVue
  },
  data(){
    return{
      Homepagedata:{
          chooseroom: '',
          reverdate:'',
          foodset:null,
          drinkset:null,
          soundset:'',
          resualt: 0,
          roomprice: 0,
          foodprice: 0,
          drinkprice: 0,
          time:''
      }
    }
  },
  methods:{
    onclickChoose(room, price){
      this.Homepagedata.chooseroom = room
      this.Homepagedata.resualt = price
      this.Homepagedata.roomprice =  price
    },
    getDate(date){
      this.Homepagedata.reverdate = date
    },
    gotoDetailpage(){
      this.$router.push({name: "detailpage", params:{data: this.Homepagedata}});
    },
    gettime(time){
      this.Homepagedata.time = time
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