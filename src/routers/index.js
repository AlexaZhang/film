import Vue from 'vue'
import Router from 'vue-router'
const Chinema=()=>import('../views/Chinema');
const Mine=()=>import('../views/Mine');
const Movie=()=>import('../views/Movie');
const City=()=>import('../components/City');
const ComingSoon=()=>import('../components/ComingSoon');
const Search=()=>import('../components/Search');
const NowPlaying=()=>import('../components/NowPlaying');

Vue.use(Router)

export default new Router({
  mode:'history',
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
