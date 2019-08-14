<template>
<div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
       <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
		</div>
    </div>
    <CiList></CiList>
</div>
    
    
</template>
<script>
import CiList from '@/components/CiList';
import Header from '@/components/Header'
export default {
 components:{
     CiList,
     Header
 }
}
</script>
<style lang="scss">
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>