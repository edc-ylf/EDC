<template>
    <div id="app">
        <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">机器人服务数据</span>
       </div>
       <div class="ks4">
            <span class="ks5">机器人服务数据</span>
            <span class="ks6">?</span>
            <div class="bj1">
    <el-radio-group v-model="radio1">
      <el-radio-button label="导出数据"></el-radio-button>
      <el-radio-button label="昨天"></el-radio-button>
      <el-radio-button label="最近7天"></el-radio-button>
      <el-radio-button label="最近30天"></el-radio-button>
    </el-radio-group>
  </div>
       </div>
        <div class="ks7">
           <ul>
            <li><div class="b1">             
                <span class="b1-2">总会话量<br>200</span>

                </div>
                    <span class="b1-3">有效会话量：0<br>无效会话量：0</span>
            </li>
             <li><div class="b1">
                <span class="b1-2">有效会话量<br>5000</span>

                </div>
                    <span class="b1-3">解决量：--<br>解决率：0</span>
            </li>
             <li><div class="b1">
                <span class="b1-2">无效会话量<br>5000</span>

                </div>
                    <span class="b1-3">用户直接离开：--<br>用户直接转人工：0</span>
            </li>
             <li><div class="b1">
                <span class="b1-2">提问总数<br>1000</span>

                </div>
                    <span class="b1-3">匹配提问数：--<br>匹配率：0</span>
            </li>
            <li><div class="b1">
                <span class="b1-2">今日相对满意度<br>0.00%</span>

                </div>
                    <span class="b1-3">参评率：0.00%</span>
            </li>
           </ul>
       </div>
       
         <div class="ks4s">
            <span class="ks5s">会话量</span>
            <span class="ks61">?</span>
       </div>
         <img src="../assets/10.png" alt="" class="kk1">


    </div>
</template>
<script>
export default {
     data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
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
    height: 55px;
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
                margin-top: 15px;
                margin-left:10px;
                font-weight: 700;               
        }
         .ks6{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 15px;
                margin-left:5px;
                font-weight: 700;
                background-color: #ff9900;
                width: 20px;
                height: 20px;
                border-radius: 15px;
                text-align: center;               
        }
        .ks61{
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
        .bj1{
            float: left;
            margin-left: 600px;
            margin-top: 7px;
        }
        .bjb2{
            float: left;
            margin-left: 280px;
        }
        .bjb2 span{
            float: left;
            margin-left: 10px;
            margin-top: 10px;
           width: 190px;
             height: 79px;
              border: 2px solid #e1e4e8;
            text-align: center;
            padding: 30px 0 0 0;
        }
        .ks4s{
    width:1224px;
    height: 35px;
    background-color: #e1e4e8;
    float: left;
    margin-top: 15px;
    margin-left: 290px;
    overflow: hidden;
        }
        .ks5s{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 5px;
                margin-left:10px;
                font-weight: 700;               
        }
         .kk1{
            float: left;
            margin-left: 292px;
            margin-top: 10px;
            width: 1186px;
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
 
</style>