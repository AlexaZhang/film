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
const center=()=>import('../views/Mine/center.vue');
const Register=()=>import('../components/Register');
const findPassword=()=>import('../components/findPassword');
const Login=()=>import('../components/Login');
const Admin=()=>import('../views/Admin')

Vue.use(Router);


const router= new Router({
  mode: 'history',
  base:'miaomiao',
  routes: [
    {
      path: '/chinema',
      name: 'chinema',
      component:Chinema,
      meta:{requireAuth:true},
    },
    {
      path:'/admin',
      component:Admin,
     
      children:[
        {
          path:'users',
          component:()=>import('@/views/Admin/users.vue')
        },
        {
          path:'movie',
          component:()=>import('@/views/Admin/movie.vue')
        },
        {
          path:'cinema',
          component:()=>import('@/views/Admin/cinema.vue')
        },
        {
          path:'/admin',
          redirect:'users'
        }
      ],
      
    },
   
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      children:[
        {
          path:'center',
          component:center
        },
        {
          path:'register',
          component:Register
        },
        {
          path:'findPassword',
          component:findPassword
        },
        {
           path:'login',
           component:Login
        },
        {
          path:'/mine',
          redirect:'center'
        }
      ]
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
});
// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth){
//     next()
//   }else{
//     next({path:'/mine'})
//   }
//  })
export default router;
