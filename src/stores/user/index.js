const state={
    name:'',
    isAdmin:''
  }
  const actions={
  
  }
  const mutations={
   USER_NAME(state,payload){
       state.mane=payload.name;
       state.isAdmin=payload.isAdmin;
   }
  }
  export default {
      namespaced:true,
      state,
      actions,
      mutations
  }