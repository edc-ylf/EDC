<template>
    <div id="app">
        <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">消息中心</span>
       </div>
       <div class="ks4">
            <span class="ks5">列表</span>
       </div>

            <div class="ks6">
                
 <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="180">
    </el-table-column>
    <el-table-column
      label="消息标题"
      width="280">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="发布时间"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发布人员"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">批量操作</el-button>
    <el-button @click="toggleSelection()">确定</el-button>
  </div>
            </div>



    </div>
    
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }, {
          date: '客服绩效评定规章说明！',
          name: '2016-05-06',
          address: 'admin'
        }],
        multipleSelection: []
      }
    },

    methods: {
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