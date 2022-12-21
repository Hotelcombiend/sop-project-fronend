<template>
  <div id="app">
    <NavbarRe/>
      <div class="row">
        <div class="column">
          <img src="https://supercube.biz/wp-content/uploads/2018/11/Supercube-Cowgate-Wide-100-scaled.jpg" style="width:100%" alt="Snow">
          <h1>Small Room</h1>
        </div>
      
        <div class="column">
          
          <img src="https://images.squarespace-cdn.com/content/v1/5a3808319f07f5aac2692a82/1570313106044-QCTT0GZ9IGESVJUQ7THC/_CA22056-Edit.jpg" style="width:100%" alt="Snow">
          <h1>Medium Room</h1>
        </div>
        <div class="column">
          <img src="https://images.squarespace-cdn.com/content/v1/5a3808319f07f5aac2692a82/1570313108058-DOIUMXJ8MT72IEGO22L9/_CA22106-Edit.jpg" style="width:100%" alt="Snow">
          <h1>Large Room</h1>
        </div>
        <div class="column">
          
          <img src="https://images.squarespace-cdn.com/content/v1/5a3808319f07f5aac2692a82/1570315223187-2PT271J4SJMN8G704MNM/_CA23957-Edit.jpg" style="width:100%" alt="Snow">
          <h1>Party Room</h1>
        </div>
      </div>
      <h1 style="margin-top: 5%;">RoomSize</h1>
      <div class="row gy-5">
      <div>
        <RadioRoom 
        class="p-4" 
        :chooseroom="Homepagedata.chooseroom.name" 
        @onUpdateRoom="onclickChoose"
        />
      </div>
    </div>
    <div class="container-box">
      <div class="flex">
        <div class="base style8">
          <h1>Reserve Date</h1>
          <CalenderVue style="margin-top: 5%;" @clickdate="getDate"></CalenderVue>

          <h1>Reserve Time</h1>
          <timedate-vue @timereserve="gettime"></timedate-vue>

        <!-- <button @click="gotoDetailpage()">Go to DetailPage</button> -->
          <b-button  class="mt-5 mb-3 " id="show-btn" @click="gotoDetailpage()">ไปหน้าถัดไป</b-button>

          <notifications group="foo" />
        <notifications group="foo1" />
        </div>
      </div>
    </div>
    <v-app id="inspire">
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>SOP SOMSAN KARAOKE</strong>
      </v-col>
    </v-footer>
  </v-app>
  </div>
</template>
  
<script>
import NavbarRe from './NavbarReservetion.vue'
import RadioRoom from './RoomRadio.vue'
import CalenderVue from './Calender.vue'
import TimedateVue from './Timedate.vue'

export default {
  name: 'Homepage',
  components: {
    NavbarRe,
    RadioRoom,
    CalenderVue,
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
.row {
  display: flex;
}

.column {
  flex: 25%;
  padding: 5px;
}
.container-box{
  width: 90%;
  margin:auto;
}
/* .flex{
  display:flex;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
} */
.base {
  margin: 16px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 15px
}
.style8{
   box-shadow:
  inset 0 0 0.5em rgba(0,0,0,0.1),
   0.2em 0.2em 0.5em rgba(0,0,0,0.2);
}
.style8 h1{
  margin-top: 10px;
}
h3{
    font-family: 'Prompt', sans-serif;
  }
  

</style>