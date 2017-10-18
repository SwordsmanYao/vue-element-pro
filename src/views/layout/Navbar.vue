<template>
  <el-menu class="navbar" theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <div @click="toggleSideBar" class="sidebar-change">
      <i class="el-icon-pro-cebianlanshouqi" style="margin-right: 0px"></i>
    </div>
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="" width="250" height="30">
    </div>


    <el-submenu class="navbar-item-right" index="1">
      <template class="navbar-item-template" slot="title">
        <img class="user-img" src="../../assets/img/img.jpg" alt="" width="40" height="40">
        张三
      </template>
      <el-menu-item index="1-1">密码修改</el-menu-item>
      <el-menu-item index="1-2">退出</el-menu-item>
    </el-submenu>
    <el-menu-item class="navbar-item-right" index="2"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      toggleSideBar () {
        this.$store.dispatch('ToggleSideBar')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .sidebar-change{
    float: left;
    font-size: 24px;
    color:#fff;
    padding: 15px;
  }
  .navbar-item-right{
    float: right!important;
  }

  .logo{
    float: left;
    margin: 13px;
  }
  .user-img{
    border-radius: 20px;
  }

</style>
