<template>
    <div id="app">
         <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">客服分组</span>
       </div>
       <div class="ks4">
           <span class="el-icon-search ks6"></span>
            <span class="ks5">筛选查询</span>
            
       </div>
        <div class="ks4w">
            <span class="ks51">小组名称:</span>
            <input type="text" name="" id="" class="ks52" placeholder="输入小组名称">
            <button class="ks53">查询结果</button>
            
       </div>
       <div class="ks4">
            <span class="ks5">客服小组</span>
            <span class="ks62"><i class="el-icon-refresh"></i>&nbsp;&nbsp;添加小组</span>
       </div>

       <div class="jk2">
           <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%;"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      label="小组名称"
      width="230">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="小组成员数"
      width="230">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="组长"
      width="230">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="所属"
      width="230">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  
       </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
      
       
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '编辑 删除'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '编辑 删除'
        }],
        multipleSelection: []
      }
    
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },   
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }}

 
</script>
<style scoped>
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
    border: 1px solid #e1e4e8;
        }
        .ks4w{
    width: 1224px;
    height: 45px;
    
    float: left;
    margin-top: 0px;
    margin-left: 290px;
    overflow: hidden;
    border: 1px solid #e1e4e8;
        }
        .ks5{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 5px;
                margin-left:10px;
                font-weight: 700;               
        }
         .ks51{
                color: #666666;
                font-size: 12px;
                float: left;
                margin-top: 13px;
                margin-left:10px;             
        }
         .ks52{
                font-size: 10px;
                float: left;
                margin-top: 10px;
                margin-left:10px; 
                width: 130px;
                height: 22px;     
                border: solid 1px #666666;
                opacity: 0.5;       
        }
         .ks53{
                font-size: 10px;
                float: left;
                margin-top: 10px;
                margin-left:10px; 
                width: 50px;
                height: 24px;     
                border: solid 1px #666666;
                opacity: 0.5;       
        }
         .ks6{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 9px;
                margin-left:5px;
                font-weight: 700;
                width: 20px;
                height: 20px;
                border-radius: 15px;
                text-align: center;               
        }
     
         .jk2{
            float: left;
            margin-left: 280px;
            margin-top: 10px;
        }
        .ks62{
             float: left;
            margin-left:1020px;
            margin-top: 7px;
            border: solid 1px #666666;
            width: 90px;
            height: 20px;
            font-size: 14px;
            border-radius: 5px;
            padding: 2px 0 0 0;
            background: white;
        }
</style>