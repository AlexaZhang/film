<template>
    <div>
       <el-table :data="nowTableData"  border  style="width: 100%;text-align: center">
           
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button  size="small" type="success" @click='handleToFreeze(scope.$index,scope.row)' v-if="scope.row.isFreeze">{{scope.row.isFreeze? '未冻结' :'已冻结'}}</el-button>
                    <el-button  size="small" type="warning" @click='handleToFreeze(scope.$index,scope.row)' v-else>{{scope.row.isFreeze? '未冻结' :'已冻结'}}</el-button>
                    <el-button type="danger" @click='handleDelete(scope.$index,scope.row.name)' size="small">删除</el-button>
                  
                </template>
            </el-table-column>
            
        </el-table>
        <el-pagination background layout="prev, pager, next" :current-page.sync="currentPage" :total="tableData.length" class="page" :page-size="pageSize"> 
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
      return {
        pageSize:8,
        currentPage:1,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isFreeze:1
        }, {
          date: '2016-05-04',
          name: '张二力',
          address: '上海市普陀区金沙江路 1517 弄',
          isFreeze:0
        }, {
          date: '2016-05-01',
          name: '王小名',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小卡',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isFreeze:1
        }, {
          date: '2016-05-04',
          name: '张二力',
          address: '上海市普陀区金沙江路 1517 弄',
          isFreeze:0
        }, {
          date: '2016-05-01',
          name: '王小名',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小卡',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isFreeze:1
        }, {
          date: '2016-05-04',
          name: '张二力',
          address: '上海市普陀区金沙江路 1517 弄',
          isFreeze:0
        }, {
          date: '2016-05-01',
          name: '王小名',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小卡',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isFreeze:1
        }, {
          date: '2016-05-04',
          name: '张二力',
          address: '上海市普陀区金沙江路 1517 弄',
          isFreeze:0
        }, {
          date: '2016-05-01',
          name: '王小名',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小卡',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    computed:{
        nowTableData(){
            return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize) || [];
          
          
        }
    },
    methods:{
        handleToFreeze(index,row){
            console.log(row.email);
             this.$alert('冻结操作以成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                             this.tableData[index].isFreeze=!row.isFreeze;
                        }
                    });
            this.axios.post('/api2/admin/updataeFreeze',{email:row.email,isFreeze:!isFreeze}).then((res)=>{
                if(res.data.status===0){
                    this.$alert('冻结操作以成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.tableData[index].isFreeze=!row.isFreeze;
                        }
                
                    });
                }else{
                     this.$alert('冻结操作失败', '信息', {
                        confirmButtonText: '确定'
                    });
                }
            })
        },
        handleClick(row){
            console.log(row)
        },
        handleDelete(index,name){
            console.log((this.currentPage-1)*this.pageSize)
              console.log(this.currentPage*this.pageSize);
             this.$alert('删除作以成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.tableData.splice(index,1)
                        }
                
                    });

        }
    },
    // mounted(){
    //     this.axios.get('api2/admin/usersList').then((res)=>{
    //         if(status===0){
    //             this.tabeData=res.data.usersList;
    //         }
    //     })
    // }
}
</script>
<style lang="scss" scoped>
table tr th div{     
    text-align: center;
}
tbody tr td div{
    text-align: center;
}
.page{
 margin-top:20px;
}
</style>