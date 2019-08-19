<template>
    <div id="main">
        <Header title="喵喵电影"></Header>
         <div id="content">
            <div class="movie_menu">
                <router-link tag='div' class="city_name" to="/movie/city">
                    <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag='div' to='/movie/nowplaying' class="hot_item">正在热映</router-link>
                    <router-link tag="div" to='/movie/comingsoon' class="hot_item ">即将上映</router-link>
                </div>
                <router-link tag='div' to="/movie/search" class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
                <keep-alive>
                     <router-view></router-view>
                 </keep-alive>
                  
         </div>
        <TabBar />
        
        <router-view name="detail"></router-view>
       
    </div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import {messageBox} from '@/components/JS'
export default {
    components:{
        Header,
        TabBar,
    },
    mounted(){
        setTimeout(()=>{
            this.axios.get('/api/getLocation').then((res)=>{
            if(res.status===200&&res.statusText==='OK'){
                let nm=res.data.data.nm;
                let id=res.data.data.id;
                if(this.$store.state.city.id == id){return;}
                messageBox({
                    title:'定位',
                    content:nm,
                    cancel:'取消',
                    ok:'切换定位',
                    handleCancel(){
                        
                    },
                    handleOk(){
                    //   _this.$store.commit('city/CITY_INFO',{nm,id});
                    window.localStorage.setItem('nowNm',nm);
                    window.localStorage.setItem('nowId',id);
                      window.location.reload();
                    }
                })
            }
        })
        },3000);
    },
    methods:{
        open(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
            });
      }
    }

}
</script>
<style lang="scss" scoped>
 .el-message-box{width: 200px}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}    
</style>