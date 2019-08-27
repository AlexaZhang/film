<template>
    <div class="password_body">
        <div class="password_email">
            邮箱: <input type="text" class="password_text" v-model="email"><button @touchstart='handleToVerify'>发送验证码</button>
        </div>
        <div>
            新密码: <input type="password" v-model="password" class="password_text">
        </div>
        <div>
            验证码: <input type="text" v-model="verify" class="password_text">
        </div>
        <div class="password_btn">
            <button @touchstart='handleToPassword'>修改</button>
        </div>
         <div class="password_link">
            <router-link to="/mine/Login">立即登录</router-link>
            <router-link to="/mine/register" href="#">立即注册</router-link>
        </div>
    </div>
</template>
<script>
import {messageBox} from "@/components/JS"
export default {
    data(){
        return{
          email:'',
          password:'',
          verify:''

        }
    },
    methods:{
        handleToVerify(){
             this.aixos.get('/api2/users/verify?email='+this.email).then((res)=>{
                if(res.data.status===0){
                  var This=this;
                    messageBox({
                        title:'验证码',
                        content:'验证码已经发送',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/login')
                        }
                    })
                }else{
                    messageBox({
                        title:'验证码',
                        content:'验证码发送失败',
                        ok:'确定'
                    })
                }
            })
        },
        handleToPassword(){
            this.axios.post('/api2/users/findPassword',{
                email:this.email,
                password:this.password,
                verify:this.verify
            }).then((res)=>{
                if(res.data.status===0){
                    var This=this;
                     messageBox({
                        title:'修改',
                        content:'修改密码成功',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/login')
                        }
                    })
                }else{
                    messageBox({
                        title:'修改',
                        content:'修改密码失败',
                        ok:'确定',
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss">
.password_body{  width:100%;}
.password_body .password_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.password_body .password_btn{ height:50px; margin:10px;}
.password_body .password_btn button{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.password_body .password_link{ display: flex; justify-content:space-between;}
.password_body .password_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
.password_body .password_email{position: relative;}
.password_body .password_email button{position:absolute;right: 10px;top: 10px;border-radius: 3px; border:none;padding: 5px;}
</style>