<template>
    <div id="app">
       <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">总览统计</span>
       </div>
       <div class="ks4">
            <span class="ks5">在线服务数据</span>
            <span class="ks6">?</span>
       </div>
       <div class="ks7">
           <ul>
            <li><div class="b1">
                <img src="../assets/5.png" alt="" class="b1-1">
                <span class="b1-2">总会话量<br>200</span>

                </div>
                    <span class="b1-3">当前在线客服数：200</span>
            </li>
             <li><div class="b1">
                <img src="../assets/6.png" alt="" class="b1-1">
                <span class="b1-2">总消息数<br>5000</span>

                </div>
                    <span class="b1-3">今日平均排队时长：--<br>今日排队总数：0</span>
            </li>
             <li><div class="b1">
                <img src="../assets/7.png" alt="" class="b1-1">
                <span class="b1-2">平均会话时长<br>5000</span>

                </div>
                    <span class="b1-3">今日平均会话时长：--</span>
            </li>
             <li><div class="b1">
                <img src="../assets/8.png" alt="" class="b1-1">
                <span class="b1-2">今日未接入会话量<br>1000</span>

                </div>
                    <span class="b1-3">接入率：0%</span>
            </li>
            <li><div class="b1">
                <img src="../assets/9.png" alt="" class="b1-1">
                <span class="b1-2">今日相对满意度<br>0.00%</span>

                </div>
                    <span class="b1-3">参评率：0.00%</span>
            </li>
           </ul>
       </div>
        <div class="ks4">
            <span class="ks5">在线服务数据趋势</span>
       </div>
     
           <img src="../assets/10.png" alt="" class="kk1">
       
        <div class="ks4">
            <span class="ks5">今日客服行为活动</span>
       </div>
         
  <el-table :data="tableData" border  style="width:1186px;text-aglin:center;" id="fom1">
    <el-table-column  prop="date"   label="客服"    width="169"> </el-table-column>
    <el-table-column  prop="name"   label="在线状态"   width="169"> </el-table-column>
    <el-table-column  prop="address"   label="当前接待量" width="169"> </el-table-column>
     <el-table-column  prop="address"   label="累计会话量" width="169"> </el-table-column>
      <el-table-column  prop="address"   label="累计消息量" width="171"> </el-table-column>
       <el-table-column  prop="address"   label="相对满意试" width="171"> </el-table-column>
        <el-table-column  prop="address"   label="累计在线时间" width="171"> </el-table-column>
  </el-table>

        <div class="block"  id="nn1">
    <span class="demonstration">共10页/100条数据</span>
    <el-pagination @size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page.sync="currentPage3"   :page-size="100"
      layout="prev, pager, next, jumper"  :total="1000">
    </el-pagination>
  </div>

        <div class="copy">
            Copyright © 在线客服管理系统, All Rights Reserved.
        </div>
       </div>
</template>
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
        .ks7 {
            float: left;
                margin-top: 7px;
                margin-left:277px;
                list-style: none;
        }
        .ks7 ul li{
           width: 225px;
    height: 159px;
    border: 2px solid #e1e4e8;
    float: left;
    margin-top: 7px;
    margin-left: 15px;
    list-style: none;
        }
        .b1{
    width: 225px;
    height: 90px;
   float: left;
   margin-left: -2px;
    margin-top: -2px;
    border: 2px solid #e1e4e8;
        }
        .b1-1{
            float: left;
            margin-left: 20px;
            margin-top: 25px;
            transform: scale(0.8);
        
        }
        .b1-2{
            float: left;
            margin-left: 10px;
            margin-top: 28px;
            font-size: 12px;
            color: #666666;
            font-weight:600;
        }
        .b1-3{
            float: left;
            margin-left: 20px;
            margin-top: 22px;
            font-size: 14px;
            color: #666666;
            font-weight:600;
        }
        .kk1{
            float: left;
            margin-left: 292px;
            margin-top: 10px;
            width: 1186px;
        }
        #fom1{
            float: left;
           margin-left: 292px;
            margin-top: 10px;
            width: 1148px;
            height: 200px;
            text-align: center;
        }
       #nn1{
           float: left;
            margin-left:902px;
            margin-top: 10px;
        }
        .copy{
            float: left;
            margin-left:702px;
            margin-top: 110px;
             color: #666666;
             font-size: 12px;
             margin-bottom: 30px;
        }
</style>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '符号',
          name: '在线 (1小时18分)',
          address: '0'
        }, {
          date: '符号',
          name: '在线 (1小时18分)',
          address: '0'
        }, {
          date: '符号',
          name: '在线 (1小时18分)',
          address: '0'
        }, {
          date: '符号',
          name: '在线 (1小时18分)',
          address: '0'
        },]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>