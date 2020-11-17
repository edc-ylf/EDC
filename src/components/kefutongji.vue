<template>
    <div id="app">
        <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">客服数据报表</span>
       </div>
       <div class="ks4">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="工作量" name="first"><el-table
:data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="姓名"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="接入会话量"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复率"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="转接率"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="无效会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="留言处理量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="登录总时长"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="在线总时长"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="在线时长占比"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="离开总时长"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="离开起时长占比"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="休息总时长"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="休息总时长好占比"
      :formatter="formatter">
    </el-table-column>
  </el-table></el-tab-pane>
    <el-tab-pane label="工作质量" name="second"><el-table
:data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="姓名"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="接入会话量"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复率"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="转接率"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="未回复会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="无效会话量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="留言处理量"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="登录总时长"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="在线总时长"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="在线时长占比"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="address"
      label="离开总时长"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="离开起时长占比"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="休息总时长"
      :formatter="formatter">
    </el-table-column>
     <el-table-column
      prop="address"
      label="休息总时长好占比"
      :formatter="formatter">
    </el-table-column>
  </el-table></el-tab-pane>


    <el-tab-pane label="绩效报表" name="third"><el-table
    :data="tableData"
    border
    show-summary
    style="width: 100%">
    <el-table-column
      prop="id"
      label="排名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name1"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="总得分">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="转化订单数">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="转化订单金额">
    </el-table-column>
  </el-table>
  </el-tab-pane>

  </el-tabs>
       </div>
        
    </div>
</template>
<script>
export default {
   
    data() {
      return {
        tableData: [{

              activeName: 'second',
              id:'1',
              amount1:'99',
               amount2:'99',
                amount3:'99',
          date: '陈冠希1',
          name: '23',
            name1: '彭于晏1',
          address: '32'
        }, {
          date: '陈冠希2',
            name1: '彭于晏2',
            amount1:'99',
               amount2:'99',
                amount3:'99',
             id:'2',
          name: '23',
          address: '32'
        }, {
          date: '陈冠希3',
          amount1:'99',
               amount2:'99',
                amount3:'99',
           id:'3',
            name1: '彭于晏3',
          name: '23',
          address: '32'
        }
        , {
             id:'4',
             amount1:'99',
               amount2:'99',
                amount3:'99',
          date: '陈冠希3',
            name1: '彭于晏4',
          name: '23',
          address: '32'
        },
        {
             id:'5',
          date: '陈冠希3',
          amount1:'99',
               amount2:'99',
                amount3:'99',
            name1: '彭于晏5',
          name: '23',
          address: '32'
        }, 
        {
             id:'6',
          date: '陈冠希3',
          amount1:'99',
               amount2:'99',
                amount3:'99',
            name1: '彭于晏6',
          name: '23',
          address: '32'
        }, 
        {
             id:'7',
          date: '陈冠希3',
          amount1:'99',
               amount2:'99',
                amount3:'99',
            name1: '彭于晏7',
          name: '23',
          address: '32'
        },  {
             id:'8',
             amount1:'99',
               amount2:'99',
                amount3:'99',
          date: '陈冠希4',
            name1: '彭于晏8',
          name: '32',
          address: '32'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
         handleClick(tab, event)
        console.log(tab, event);
     
      }
    }
  
  };
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
    height: 555px;
    float: left;
    margin-top: 5px;
    margin-left: 290px;
    overflow: hidden;
        }
</style>