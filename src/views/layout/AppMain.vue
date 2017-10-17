<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="appmain">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
    export default {
        data() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .appmain{
    //margin: 20px 20px 20px 64px;
    margin: 40px 20px 20px 220px;

  }
  .breadcrumb{
    margin: 20px 20px 20px 220px;
  }
</style>
