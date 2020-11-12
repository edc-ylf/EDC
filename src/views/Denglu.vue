<template>
    <div id="app">
          <div class="m1">更换背景</div>
           <img src="../assets/2.png" alt="" class="p1">
             <span class="m2-1">WEB在线客服管理系统</span>
               
            <div class="m2">
            
                
            </div>
             <div class="m3">
                <input type="text" v-model="user" name="" placeholder="请输入用户名" id="username"><br>
                <input type="text" v-model="pwd" name="" placeholder="请输入登录密码" id="password"><br>
                <button class="den" @click="denglu1">登录</button>
                </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:"",
            pwd:"",
        };
    
    
},methods: {
        denglu1(){
            if(this.user==''){
                alert("账号不能为空！");
            }else if(this.pwd==''){
                 alert("密码不能为空！");
            } else if(this.user=='user'||this.pwd=='123'){
                    this.$router.push({
                        path:'/Menu'
                    })
            }else{
                alert("输入错误！请重新输入！")
            }
        }
}
}
</script>
<style  scoped>

        #app{
            background: url("../assets/beijing.png");
               width:100%;
            height:750px;
            overflow: hidden;
            background-size: 100%;
            text-align: center
        }
        .m1{
           background-color: white;
    color: #1ABC9C;
    position: absolute;
    left: 686px;
    top: 0px;
    width: 166px;
    height: 44px;
    text-align: center;
    padding: 22px 2px 2px 2px;
        }
        .p1{
            position: absolute;
            top: 210px;
            left:743px;
            z-index: 2;
            opacity: 1;
        }
        .m2{
           background-color: rgba(246, 247, 249, 1);
            opacity: 0.5;
            width:385px ;
            height: 400px;
             position: absolute;
            left: 38%;
             top: 200px;
        }
        .m3{
           position: absolute;
          margin-top: 350px;
              margin-left: 645px;
             z-index: 3;
        }
        .m2-1{
             position: absolute;
             font-weight: 700;
               top: 273px;
             left: 686px;
            z-index: 2;
            opacity: 1;
        }
        #password{
            margin-top: 10px;
             width: 255px;
             height: 40px;
             background-color: white;
                 font-size: 14px;
             text-decoration: none;
            color: #000000;
             text-align: left;
                border-color: transparent;
                opacity: 0.5;
                cursor: pointer;
        }
         #username{
             width: 255px;
             height: 40px;
             background-color: white;
                 font-size: 14px;
             text-decoration: none;
            color: #000000;
             text-align: left;
                border-color: transparent;
                opacity: 0.5;
                cursor: pointer;
        }
        .den{
             width: 255px;
             height: 40px;
             background-color: #1ABC9C;
             margin-top: 10px;
               border-color: transparent;
                opacity: 1;
                cursor: pointer;
                color: white;
                font-size: 700;
        }
      
</style>