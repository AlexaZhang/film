<template>
    <div>
        <Header title="喵喵登陆"></Header>
         <router-view></router-view>
         <TabBar />
    </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  components:{
    Header,
    TabBar
  }
}
</script>
<style lang="scss">
    
</style>