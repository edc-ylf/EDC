<template>
    <div id="app">
        <div class="f">
      <input type="text" name="name" id="name">
      <input type="text" name="phone" id="phone">
      <input type="text" name="name" id="name">
      <input type="text" name="name" id="name">
      <input type="text" name="name" id="name">
      <input type="text" name="name" id="name">
      <input type="text" name="name" id="name">
        </div>
        <div class="f1">
            <span class="f2">账号：</span>
            <span class="f3">手机号：</span>
            <span class="f4">邮箱：</span>
            <span class="f5">昵称：</span>
            <span class="f6">旧密码：</span>
            <span class="f7">新密码：</span>
            <span class="f8">确认密码:</span>
        </div>
        <button class="tj">提交</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
    .f{
        float: left;
        margin-left:800px;
        margin-top: 200px; 
    }
    .f input{
        clear: both;
        float: left;
        margin-top: 20px;
        text-align: center;
        line-height: normal;
        width: 250px;
        height: 37px;
        border: solid 1px #666666;
        opacity: 0.3;
    }
    .f1{
          float: left;
        margin-left:-330px;
        margin-top: 200px; 
        font-size: 14px;
    }
    .f1 span{
        float: left;
        clear: both;
        text-align: center;
        line-height: normal;
        color: #666666;
    }
     .f2{
         float: left;
          margin-top:32px;
    }
    .f3{
         float: left;
          margin-top:39px;
    }
     .f4{
         float: left;
          margin-top:39px;
    }
     .f5{
         float: left;
          margin-top:38px;
    }
     .f6{
         float: left;
          margin-top:41px;
    }
     .f7{
         float: left;
          margin-top:41px;
    }
     .f8{
         float: left;
          margin-top:41px;
    }
    .tj{
        background-color: #1abc9c;
         float: left;
          margin-top:641px;
          margin-left: -170px;
          border: solid 1px #1abc9c;
          border-radius: 5px;
          width: 90px;
          height: 40px;
          color: white;
         cursor: pointer;

    }
   
</style>