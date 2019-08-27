import axios from 'axios'
import {Message} from 'element-ui'

axios.interceptors.request.use(config=>{
   let obj=JSON.parse(localStorage.getItem('obj'));
   console.log(obj);
   let token=obj.token;
   if(token){
	   config.headers.Authorization=token;
   }
   return config;
   
});
axios.interceptors.response.use(
 response=>{
	 console.log(response);
	 if(response.data.data){
		 switch(response.status){
			 case 401:{
				 Message.error('没有权限');
				 console.log('没有权限')
				 break
			 };
			 case 405:{
				 Message.error('您的账号已在别处登录');
				 break
			 };
			 case 404:{
				 Message.err('请求错误');
				 break
			 }
		 }
	 }
	 return response;
 }
)
export default axios;