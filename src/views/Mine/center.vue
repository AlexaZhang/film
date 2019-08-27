<template>
    <div>
     <div>{{$store.state.user.name}}</div>   
     个人中心<a href="javascript:;" @touchstart='handleToLogout'>退出</a>
     <div v-if="$store.state.user.isAdmin">用户:管理员</div>
     <div v-else>用户:普通用户<a href="/admin" >进入管理后台</a></div>
     <!-- target='_blank' -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
  methods:{
      handleToLogout(){
          this.$router.push('/mine/login')
          this.axios.get('/api2/users/logout').then((res)=>{
              if(res.data.status===0){
                 window.localStorage.removeItem('name');
                 window.localStorage.removeItem('isAdmin');
                this.$store.commit('user/USER_NAME',{name:'',isAdmin:''});
                   
                this.$router.push('/mine/Login');
              }
          })
      }
  },
//   beforeRouteEnter (to, from, next) {
//       axios.get('/api2/users/getUser').then((res)=>{
//           if(res.data.status===0){
//               next(vm=>{
//                   this.$store.commit('user/USER_NAME',{name:''});
                  //  window.localStorage.setItem('name',res.data.data.username);
                  //  window.localStorage.setItem('isAdmin',res.data.data.isAdmin);
//                   vm.$store.commit('user/USER_NAME',{name:res.data.data.username,isAdmin:res.data.data.isAdmin})
//               })
//           }else{
//               next('/mine/login');
//           }
//       })
//   }  
}
</script>
<style lang="scss">
    
</style>