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
      var foo={
      bar:function(){
          console.log(this)
      }
  }
  	var obj={
			token:'12312312312313131'
		}
	localStorage.setItem('obj',JSON.stringify(obj));
  foo.bar();
  (foo.bar)();
 }
}
</script>
<style lang="scss">
</style>
