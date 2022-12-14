<template>
    <div>
      <a class="btn" role="button"
      @click="onclickChoose()"
      :class="{'bg-warning' : this.sizeroom === this.chooseroom}"
      ><img src="https://play-lh.googleusercontent.com/RLiZ_FjUtSz1aiAxzJt3IsHhpa5YyvzRVkR2ltI-qKes-XzZ4b6NZh-4x9Ca2aI" 
        width="200" height="200"/></a>
        <h3>{{sizeroom}}</h3>
  
  
    </div>
      
  </template>
  
  <script>
  export default {
    name: 'RadioRoom',
    props: ['sizeroom', "chooseroom"],
    methods:{
      onclickChoose(){
        this.$emit('onUpdateRoom', this.sizeroom)
      }
    }
  }
  </script>