<template>
   <el-container>
            <el-header>喵喵网管理后台,欢迎{{$store.state.isAdmin}}</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-row class="tac">
                          <el-col :span="24">
                                <el-menu default-active="1">
                                    <el-menu-item index="1">
                                        <i class="el-icon-location"></i>
                                        <router-link tag="span" to="/admin/users">用户管理</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="2">
                                        <i class="el-icon-menu"></i>
                                        <router-link tag="span" to="/admin/movie" slot="title">电影管理</router-link>
                                    </el-menu-item>
                                    <el-menu-item index="3">
                                        <i class="el-icon-document"></i>
                                        <router-link tag="span" to="/admin/cinema" slot="title">影院管理</router-link>
                                    </el-menu-item>
                                </el-menu>
                            </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>
<script>
import axios from 'axios';
export default {
//       beforeRouteEnter (to, from, next) {
//         axios.get('/api2/admin/').then((res)=>{
//           if(res.data.status===0){
//               next()
//           }else{
//               next('/mine/login');
//           }
//       })
//   } ,
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
<style lang="scss">
.el-menu{
    height: 100%;
}
.el-col{
  height:100%;
}
.tac{
    height: 100%;
}

      .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    // text-align: center;
    padding-left:60px;
    line-height: 60px;
  }
  .el-container.is-vertical{
      margin-bottom: 0;
        height:100%
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>