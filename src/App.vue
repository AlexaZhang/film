<template>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</template>
<script>

export default {
 mounted(){
   console.log(['1','2','3'].map(parseInt));
   var a=1;
   if(a++==1&&a++==2&&a==3){
     console.log(1)
   }
 }
}
</script>
<style lang="scss">
</style>
