import Vue from 'vue'
import Router from 'vue-router'
const Chinema=()=>import('../views/Chinema');
const Mine=()=>import('../views/Mine');
const Movie=()=>import('../views/Movie');
const City=()=>import('../components/City');
const ComingSoon=()=>import('../components/ComingSoon');
const Search=()=>import('../components/Search');
const NowPlaying=()=>import('../components/NowPlaying');
const detail=()=>import('../views/Movie/detail.vue');

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'miaomiao',
  routes: [
    {
      path: '/chinema',
      name: 'chinema',
      component:Chinema
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/movie',
      name:'movie',
      component:Movie,
      children:[
        {
          path:'city',
          component:City
        },
        {
          path:'comingsoon',
          component:ComingSoon
        },
        {
          path:'search',
          component:Search
        },
        {
          path:'detail/1/:id',
          components:{
            default:NowPlaying,
            detail:detail
          },
          props:{
            detail:true
          }
        },
        {
          path:'detail/2/:id',
          components:{
            default:ComingSoon,
            detail:detail
          },
          props:{
            detail:true
          }
        },
        {
          path:'nowplaying',
          component:NowPlaying
        },
        {
          path:'/movie',
          redirect:'/movie/nowplaying'
        }
      ]
    },
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
