<template>
    <div id="app">
        <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">登录日志</span>
       </div>
         <div class="ks4">
            <span class="ks5">列表</span>
       </div>

                <div class="ks6">
                <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="时间"
      width="280">
    </el-table-column>
    <el-table-column
      prop="name"
      label="IP"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地区">
    </el-table-column>
  </el-table>
 
                </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        }, {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        }, {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        }, 
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
         {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        },
        {
          date: '2019-07-22 14:36:21',
          name: '59.61.174.22',
          address: '北京省福州市'
        }]
      }
    }
  }
</script>
<style  scoped>
.ks1{
    width: 1248px;
    height: 50px;
    background-color: #e1e4e8;
    float: left;
    margin-top: 50px;
    margin-left: 270px;
    overflow: hidden;
        }
        
     .ks3{
    color: #999999;
     font-size: 15px;
     float: left;
     margin-top: 15px;
    margin-left:5px;               
        }
 .ks2{
    float: left;
    margin-top: 17px;
    margin-left: 20px;
    background-color: #30c2a5;
    width: 4px;
    height: 16px;
        }
         .ks4{
    width: 1224px;
    height: 35px;
    background-color: #e1e4e8;
    float: left;
    margin-top: 5px;
    margin-left: 290px;
    overflow: hidden;
        }
        .ks5{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 5px;
                margin-left:10px;
                font-weight: 700;               
        }
        .ks6{
            
    font-size: 15px;
    float: left;
    margin-top: 20px;
    margin-left: 291px;
    font-weight: 700;
    width:1200px;
    height: 300px;
    text-align: center;
        }
</style>