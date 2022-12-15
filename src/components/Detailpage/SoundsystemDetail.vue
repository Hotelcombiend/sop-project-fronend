<template>
  <div class="row g-4">
    <div v-for="(sound, index) in sounddata" :key="index" class="col-4">
          <b-card
              img-top
              tag="article"
              style="max-width: 20rem; margin-left: 70px; margin-top: 10%;"
              class="mb-2"
              :class="{'bg-success' : soundchoose === sound.fname}"
          >
          <h1>{{sound.fname}}</h1>
              <b-card-text>
                  {{sound.detail}}
              </b-card-text>

              <b-button href="#" variant="primary" v-b-modal.modal-3 @click="checkfoodindex(index)">Detail</b-button>
          </b-card>
      </div>
    
      <b-modal id="modal-3" title="DrinkDetail" hide-footer ref="my-modal">
        <div v-for="(foodmenu, index) in sounddata" :key="index"
          v-show="index === soundindex">
          <p>ราคา: {{foodmenu.price}}</p>
          <!-- <p>รายการอาหาร: 
            <span class="my-4" v-for="(foodmenulist, index) in foodmenu.menu" :key="index"
            > {{foodmenulist}} 
          </span >
          </p> -->
          <div>
            จำนวนไมค์ที่ต้องการเพิ่ม: <input class="input" type="text" v-model="editMicHowmuch"/>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
          <b-button class="mt-3" variant="outline-success" block @click="choosefood(foodmenu.fname)" style="margin-left: 10px;">Choose Set</b-button>
          
      </div>
      </b-modal>
  </div>
</template>
  
<script>

import soundlist from '@/assets/soundsystem.json'
export default {

  name: 'Soundsystem',
  components: {
  },
  data(){
      return{
          sounddata: soundlist,
          soundindex:0,
          soundchoose:'',
          editMicHowmuch: '',
      }
  },
  created(){
      this.Homepagedata=this.$route.params.data
  },
  methods:{
    checkfoodindex(index){
      this.soundindex = index
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    choosefood(set){
      this.soundchoose = set
      this.$emit('choosesound', this.soundchoose)
      this.$emit('editmic', this.editMicHowmuch)
      this.$refs['my-modal'].hide()
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