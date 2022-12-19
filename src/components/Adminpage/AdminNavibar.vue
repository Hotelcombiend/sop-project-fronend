<template>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/Adminorderpage"
      style="margin-left: 30px;"
      >
        <img src="https://www.seekpng.com/png/detail/46-460324_microphone-clipart-talk-show-microphone-logo.png" alt="Bootstrap" width="40" height="40" />
        B&R Karaoke Admin
    </b-navbar-brand>
  
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
  
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/Adminorderpage">Order</b-nav-item>
          <b-nav-item href="/AdminPaymentpage">Payment</b-nav-item>
          <b-nav-item href="#">Food/Drink</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>

<script>
export default {

}
</script>

<style>

</style>