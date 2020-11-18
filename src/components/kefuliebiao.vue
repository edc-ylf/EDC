<template>
    <div id="app">
         <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">客服列表</span>
       </div>
       <div class="ks4">
            <span class="ks5">筛选查询</span>
            <span class="ks6">?</span>
       </div>
        <div class="ks4w">
            <span class="ks51">筛选</span>
            <input type="text" name="" id="" class="ks52" placeholder="输入账号/昵称/姓名/手机">
            <button class="ks53">查询结果</button>
            <div class="jk1">
                <el-select v-model="formInline.region" placeholder="请选择分组" size="mini">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
            </div>
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
      label="昵称"
      width="170">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="170">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="账号"
      width="170">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="手机号"
      width="170">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="客服分组"
      width="170">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="账户启用状态"
      width="170">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
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
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
                margin-top: 7px;
                margin-left:5px;
                font-weight: 700;
                background-color: #ff9900;
                width: 20px;
                height: 20px;
                border-radius: 15px;
                text-align: center;               
        }
        .jk1{
            float: left;
            margin-left: 50px;
            margin-top: 10px;
        }
         .jk2{
            float: left;
            margin-left: 280px;
            margin-top: 10px;
        }
</style>