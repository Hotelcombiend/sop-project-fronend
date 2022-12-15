<template>
    <div class="cardcon">
        <b-card
            title="ส่งหลักฐานการโอนเงิน"
            tag="article"
            style="width: 50%;"
            
            class="overflow-hidden"
        >
            <b-card-text>
                <div class="ordercontrainer">
                    <p>รหัสอ้างอิง:</p>
                    <input v-model="orderId" placeholder="เลขที่รายการ" />
                </div>
                <div class="datecontrainer">
                    <label for="example-datepicker">วันที่</label>
                    <b-form-datepicker id="datepicker-lg"  v-model="datePick" class="mb-2"></b-form-datepicker>
                    
                    
                </div>
                <div class="timecontrainer">
                    <label>เวลา</label>
                    <b-form-timepicker v-model="timePick"  locale="en"></b-form-timepicker>
                    <div class="mt-2">{{timePick}}</div>
                </div>
                <div class="moneycontrainer">
                    <label>จำนวนเงิน</label>
                    <input v-model="moneyPick" placeholder="0000.00" />
                </div>
                <div class="emailcontrainer">
                    <label>อีเมลที่ใช้ติดต่อ</label>
                    <input v-model="emailPick" placeholder="exampel@karaoke.com" />
                </div>

            </b-card-text>
            <div>
                <b-button  id="show-btn" @click="showModal">ส่งหลักฐานการโอนเงิน</b-button>
                

                <b-modal ref="my-modal" hide-footer title="คุณแน่ใจที่จะส่งแล้วหรือไม่">
                <div class="d-block text-center">
                    
                </div>
                <b-button class="mt-3 " variant="outline-primary" block @click="hideModal">ยืนยันการส่ง</b-button>
                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">ยกเลิก</b-button>
                
                </b-modal>
            </div>
        </b-card>
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
.cardcon{
    justify-content: center;
    text-align: center;
    display: flex;
    margin-top: 10%;
    
    
    
}
</style>