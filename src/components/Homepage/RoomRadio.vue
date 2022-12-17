<template>
  <div class="row g-4">
    <div class="col-3" v-for="(room, index) in roomsdata" :key="index">
      <a class="btn" role="button"
      :class="{'bg-warning' : room.name === chooseroom}"
      v-b-modal.modal-1
      @click="setindex(index)"
      ><img src="https://play-lh.googleusercontent.com/RLiZ_FjUtSz1aiAxzJt3IsHhpa5YyvzRVkR2ltI-qKes-XzZ4b6NZh-4x9Ca2aI" 
        width="200" height="200"/></a>
        <h3>{{room.name}}</h3>
    </div>

    <b-modal id="modal-1" title="RoomDetail" hide-footer ref="my-modal">
      <img src="https://play-lh.googleusercontent.com/RLiZ_FjUtSz1aiAxzJt3IsHhpa5YyvzRVkR2ltI-qKes-XzZ4b6NZh-4x9Ca2aI" 
        width="150" height="150"/>
          <div v-for="(roomdetail, index) in roomsdata" :key="index"  
          v-show="index === roomsindex">
            <p>ราคา: {{roomdetail.price}}</p>
            <p>รายละเอียดห้อง: 
              <span class="my-4"
              >  {{roomdetail.detail}}
            </span >
            </p>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-3" variant="outline-success" block style="margin-left: 10px;" @click="onclickChoose(roomdetail.name, roomdetail.price)">Choose Set</b-button>
        </div>
        </b-modal>
  </div>
      
  </template>
  
  <script>
  import roomList from '@/assets/rooms.json'

  export default {
    data(){
      return{
        roomsdata: roomList,
        roomsindex: 0,
      }
    },
    props: ["chooseroom"],
    methods:{
      onclickChoose(room, price){
        this.$refs['my-modal'].hide()
        this.$emit('onUpdateRoom', room, parseInt(price))
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      setindex(index){
        this.roomsindex = index
      },
    }
  }
  </script>