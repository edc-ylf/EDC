<template>
    <div id="app">
         <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">历史列表</span>
       </div>
       <div class="ks4">
           <span class="el-icon-search ks6"></span>
            <span class="ks5">筛选查询</span>
            
       </div>
        <div class="ks4w">

            <div>
                <el-col :span="12">
    <span class="demonstration">筛选</span>
    <el-dropdown trigger="click" class="gh1">
      <span class="el-dropdown-link">
        请选择筛选条件<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">用户名</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">开始时间</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">接待客服</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">IP</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">状态</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
            </div>
            
            <div style="margin-left:10px;">
                <el-col :span="12">
    <span class="demonstration">筛选</span>
    <el-dropdown trigger="click" class="gh1">
      <span class="el-dropdown-link">
        请选择筛选条件<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">用户名</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">开始时间</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
            </div>

            <span class="ks51">小组名称:</span>
            <input type="text" name="" id="" class="ks52" placeholder="输入小组名称">
            <button class="ks53">查询结果</button>
            <div class="bj1">
    <el-radio-group v-model="radio1">
      <el-radio-button label="昨天"></el-radio-button>
      <el-radio-button label="最近7天"></el-radio-button>
      <el-radio-button label="最近30天"></el-radio-button>
    </el-radio-group>
  </div>
       </div>

       <div class="bm1">
<el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%;" id="bbb1">
      <el-table-column
        prop="id"
        label="用户名"
        width="140">
      </el-table-column>
      <el-table-column
        prop="name"
        label="会话开始时间"  width="140">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="接待客服"  width="140">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="来源终端"  width="140">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="用户IP地址"  width="140">
      </el-table-column>
        <el-table-column
        prop="amount3"
        label="来源页面"  width="140">
      </el-table-column>
        <el-table-column
        prop="amount3"
        label="状态"  width="140">
      </el-table-column>
       <el-table-column
        prop="amount3"
        label="满意度"  width="140">
      </el-table-column>
       <el-table-column
        prop="amount3"
        label="操作"  width="105">
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
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },{
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },{
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },{
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },{
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },{
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 1 === 0) {
          if (columnIndex === 0) {
            return [1, 1];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 1=== 0) {
            return {
              rowspan: 1,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  }
</script>
<style  scoped>
.demonstration{
    color: #666666;
                font-size: 13px;
                float: left;
                margin-top: 15px;
                margin-left:10px;

}
.gh1{
     float: left;
                margin-top: 13px;
                margin-left:10px;
                border: solid 1px #666666;
                border-radius: 4px;
                 color: #666666;
}

.bm1{
    float: left;
    margin-left: 290px;
}
 .bj1{
            float: left;
            margin-left:500px;
            margin-top: 2px;
          
        }
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
     
</style>