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
        <div class="ks4">
            <span class="ks51">筛选</span>
            <input type="text" name="" id="" class="ks52" placeholder="输入账号/昵称/姓名/手机">
            <button>查询结果</button>
       </div>
    </div>
</template>
<script>
export default {
    
}
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
                margin-top: 8px;
                margin-left:10px;             
        }
         .ks52{
                font-size: 10px;
                float: left;
                margin-top: 7px;
                margin-left:10px; 
                width: 120px;
                height: 18px;     
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
</style>