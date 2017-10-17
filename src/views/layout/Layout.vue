<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <div>
      <div class="sidebar-wrapper">
        <sidebar class="sidebar-container"></sidebar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import {Navbar, Sidebar, AppMain} from '@/views/layout'
  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
