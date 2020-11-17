<template>
    <div id="app">
        <div class="ks1">
           <span class="ks2"></span>
            <span class="ks3">留言报表</span>
       </div>
       <div class="ks4">
            <span class="ks5">留言报表</span>
            <div class="bj1">
    <el-radio-group v-model="radio1">
      <el-radio-button label="导出数据"></el-radio-button>
      <el-radio-button label="昨天"></el-radio-button>
      <el-radio-button label="最近7天"></el-radio-button>
      <el-radio-button label="最近30天"></el-radio-button>
    </el-radio-group>
  </div>
       </div>
        <div class="bjb2">
           <span>留言数量<br>200</span>
            <span>待处理留言数量<br>5000</span>
             <span>已留言数量<br>5000</span>
       </div>
       
         <div class="ks4s">
            <span class="ks5s">留言来源</span>
       </div>
       <div class="ks4s1">
            <span class="ks5s1">留言处理率</span>
       </div>
       <img src="../assets/n1.png" alt="" class="cv1">
         <img src="../assets/n2.png" alt="" class="cv2">

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
    width: 604px;
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
         .ks4s1{
    width:604px;
    height: 35px;
    background-color: #e1e4e8;
    float: left;
    margin-top: 15px;
    margin-left: 10px;
    overflow: hidden;
        }
        .ks5s1{
                color: #666666;
                font-size: 15px;
                float: left;
                margin-top: 5px;
                margin-left:10px;
                font-weight: 700;               
        }
        .cv1{
             float: left;
                margin-top: 5px;
                margin-left:290px;
                width:604px;
        }
         .cv2{
             float: left;
                margin-top: 5px;
                margin-left:10px;
               width: 604px;
        }
</style>