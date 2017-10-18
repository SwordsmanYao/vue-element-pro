<template>
  <div>
    <el-breadcrumb class="breadcrumb" :class="{'collapse':!isopened}" separator="/" >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="appmain" :class="{'collapse':!isopened}" >
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
    export default {
        computed: {
          isopened () {
            return this.$store.state.app.sidebar.opened
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .appmain{
    margin: 40px 20px 20px 170px;
    transition: 0.5s;
  }
  .breadcrumb{
    margin: 20px 20px 20px 170px;
    transition: 0.5s;
  }
  .collapse{
    margin-left: 60px;

  }
</style>
