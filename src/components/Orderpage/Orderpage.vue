<template>
    <div>
        <div style="background-color:aliceblue; border: 2px solid black; width: 600px; height: 500px; padding: 10px;" 
        class="position-absolute top-50 start-50 translate-middle">
            <h3>
            <img src="https://www.seekpng.com/png/detail/46-460324_microphone-clipart-talk-show-microphone-logo.png" alt="Bootstrap" width="40" height="40"/>
                B&R Karaoke
            </h3>
            <div style="border: 1px solid black;margin-top: 20px;"></div>
            <p>วันที่จอง: {{Homepagedata.reverdate}}</p>
        </div>
    </div>
    </template>
      
    <script>
  
    export default {
      name: 'Orderpage',
      components: {
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