<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <!--<el-submenu index="1">-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-message"></i>-->
        <!--<span slot="title">导航一</span>-->
      <!--</template>-->
      <!--<el-menu-item-group>-->
        <!--<span slot="title">分组一</span>-->
        <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
      <!--</el-menu-item-group>-->
      <!--<el-menu-item-group title="分组2">-->
        <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
      <!--</el-menu-item-group>-->
      <!--<el-submenu index="1-4">-->
        <!--<span slot="title">选项4</span>-->
        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
      <!--</el-submenu>-->
    <!--</el-submenu>-->
    <router-link exact class="sidebar-link" to="/">
      <el-menu-item index="1" style="padding-left: 10px;padding-right: 10px">
        <i class="el-icon-menu"></i>
        <span slot="title">Form表单</span>
      </el-menu-item>
    </router-link>
    <router-link exact class="sidebar-link" to="/list">
      <el-menu-item index="2" style="padding-left: 10px;padding-right: 10px">
        <i class="el-icon-setting"></i>
        <span slot="title">列表</span>
      </el-menu-item>
    </router-link>

  </el-menu>
</template>

<script>
  export default {
    computed: {
      isCollapse() {
        return !this.$store.state.app.sidebar.opened
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>

  .el-menu-vertical{
    position: absolute;
    left: 0px;
    top: 60px;
    bottom: 0px;
    min-height: 100%;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 150px;
  }
  .el-menu-item{
    color: #48576a;
    overflow: hidden;
  }
  .sidebar-link.is-active .el-menu-item{
    color: #20a0ff!important;
  }
  .el-menu--collapse .sidebar-link span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-menu--collapse {
    width: 44px;
  }
</style>
