<template>
    <div class="wrapper">
        <!-- <b-card
            title="ส่งหลักฐานการโอนเงิน"
            tag="article"
            style="width: 50%;"
            
            class="overflow-hidden"
        > -->
        <!-- <b-card-text> -->
            <h2>ส่งหลักฐานการโอนเงิน</h2>
            
            <h4>รหัสอ้างอิง:</h4>
            <div class="input_group">
                <div class="input_box">
                    <input class="name" v-model="orderId" placeholder="เลขที่รายการ" />
                    
                </div>
                <div class="input_box">
                    <h4>วันที่:</h4>
                    <b-form-datepicker class="name" id="datepicker-lg"  v-model="datePick" ></b-form-datepicker>
                    
                    
                </div>
            <div class="input_group">
                <div class="input_box">
                    <h4>เวลา:</h4>
                    <b-form-timepicker class="name" v-model="timePick"  locale="en"></b-form-timepicker>
                    <div class="mt-2">{{timePick}}</div>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <h4>จำนวนเงิน:</h4>
                    <input class="name" v-model="moneyPick" placeholder="0000.00" />
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <h4>อีเมลที่ใช้ติดต่อ:</h4>
                    <input class="name" v-model="emailPick" placeholder="exampel@karaoke.com" />
                </div>
            </div>
            </div>
            <!-- </b-card-text> -->
                <div>
                <b-button  id="show-btn" @click="showModal">ส่งหลักฐานการโอนเงิน</b-button>
                

                <b-modal ref="my-modal" hide-footer title="คุณแน่ใจที่จะส่งแล้วหรือไม่">
                <div class="d-block text-center">
                    
                </div>
                <b-button class="mt-3 " variant="outline-primary" block @click="hideModal">ยืนยันการส่ง</b-button>
                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">ยกเลิก</b-button>
                
                </b-modal>
                </div>
        
        <!-- </b-card> -->
    </div>

</template>

<script>


export default {
    data(){
        return {
            datePick:'',
            timePick:'',
            orderId:'',
            moneyPick: '',
            emailPick: '',
        }
    },
    methods: {
        showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    }
    
    
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.wrapper{
    background-color:#fff;
    width: 500px;
    padding: 25px;
    margin: 25px auto 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.wrapper h2{
    background-color: #fcfcfc;
    color: #21cdd3;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 8px;
    text-align: center;
    border: 1px dashed #21cdd3;
}
.wrapper h4{
    padding-bottom: 5px;
    color: #21cdd3;
}
.input_group {
    margin-bottom: 8px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
}
/* .input_box{
    width: 100%;
    margin-right: 12px;
    position: relative;
} */
.input_box .name{
    padding: 14px 10px 14px 50px;
    width: 100%;
    border: 1px solid #0003;
    outline: none;
    letter-spacing: 1px;
    transition: 0.3s;
    border-radius: 3px;
    color: #333;
}


    
    

</style>