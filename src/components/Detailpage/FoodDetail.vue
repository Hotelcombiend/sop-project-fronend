<template>
    <div class="row g-4">
      <div v-for="(food, index) in fooddata" :key="index" class="col-4">
            <b-card
                img-top
                tag="article"
                style="max-width: 20rem; margin-left: 70px; margin-top: 10%;"
                class="mb-2"
                :class="{'bg-success' : foodchoose === food.fname}"
            >
            <h1>{{food.fname}}</h1>
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary" v-b-modal.modal-1 @click="checkfoodindex(index)" v-show="food.quantity !== 0">Detail</b-button>
            </b-card>
        </div>
      
        <b-modal id="modal-1" title="FoodDetail" hide-footer ref="my-modal">
          <div v-for="(foodmenu, index) in fooddata" :key="index"
            v-show="index === foodindex">
            <p>ราคา: {{foodmenu.price}}</p>
            <p>รายการอาหาร: 
              <span class="my-4" v-for="(foodmenulist, index) in foodmenu.menu" :key="index"
              > {{foodmenulist}} 
            </span >
            </p>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-3" variant="outline-success" block @click="choosefood(foodmenu.fname, foodmenu.price)" style="margin-left: 10px;">Choose Set</b-button>
        </div>
        </b-modal>
    </div>
  </template>
    
  <script>
  
  import foodList from '@/assets/food.json'
  export default {

    name: 'Food',
    components: {
    },
    data(){
        return{
            fooddata: foodList,
            foodindex:0,
            foodchoose:'',
        }
    },
    created(){
        this.Homepagedata=this.$route.params.data
    },
    methods:{
      checkfoodindex(index){
        this.foodindex = index
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      choosefood(set, price){
        this.foodchoose = set
        this.$emit('choosefood', set, parseInt(price))
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