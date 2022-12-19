<template>
    <div style="margin-top: 20px;">
        <button  @click="$emit('timereserve', time)"
        style="width: 570px;"
        >
            <select v-model="time"
            style="width: 550px;"
            >
                <option disabled value="">Please select one</option>
                <option>11.00-12.00</option>
                <option>12.00-13.00</option>
                <option>13.00-14.00</option>
                <option>14.00-15.00</option>
                <option>15.00-16.00</option>
                <option>16.00-17.00</option>
                <option>17.00-18.00</option>
                <option>18.00-19.00</option>
                <option>19.00-20.00</option>
                <option>20.00-21.00</option>
                <option>21.00-22.00</option>
            </select>
    </button>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
         time:''
        }
      },
    }
  </script>