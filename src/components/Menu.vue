<template>
    <div id="app">
                <div class="c1">
                    <img src="../assets/p1.png" alt="" class="l1">
                        <span>WEB在线管理系统</span>
                </div>
                <div class="menu2">
             <el-tabs :tab-position="tabPosition" style="height: 700px;">
                    <el-tab-pane label="首页" style="margin-left:-10px;">
                        <div class="v1">
                            <span>系统首页</span>
                                <ul>
                                    <router-link tag="li" to="/Menu/xitongshouye">系统首页</router-link>
                                     <router-link tag="li" to="/Menu/gerenziliao">个人资料设置</router-link>
                                     <router-link tag="li" to="/Menu/message">消息中心</router-link>
                                     <router-link tag="li" to="/Menu/rizhi">登录日志</router-link>
                                </ul>
                        </div>
                       
                    </el-tab-pane>
                    <el-tab-pane label="统计" style="margin-left:-10px;">
                        
                        <div class="v1">
                            <span>统计分析</span>
                                <ul>
                                    <router-link tag="li" to="/Menu/zonglantongji">总览统计</router-link>
                                     <router-link tag="li" to="/Menu/gerenziliao">客服统计</router-link>
                                     <router-link tag="li" to="/Menu/message">留言统计</router-link>
                                     <router-link tag="li" to="/Menu/rizhi">机器人统计</router-link>
                                </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="客服">客服</el-tab-pane>
                    <el-tab-pane label="历史">历史</el-tab-pane>
                    <el-tab-pane label="客户">客户</el-tab-pane>
                    <el-tab-pane label="公告">公告</el-tab-pane>
                    <el-tab-pane label="知识">知识</el-tab-pane>
                    <el-tab-pane label="对话">对话</el-tab-pane>
                    <el-tab-pane label="权限">权限</el-tab-pane>
                    <el-tab-pane label="设置">设置</el-tab-pane>
            </el-tabs>
                </div>
                <router-view></router-view>
    </div>
</template>
<script>
export default {
     data() {
      return {
        tabPosition: 'left'
      };
    },methods: {
        el:''
    },
  };

</script>
<style scoped>
       
        .c1{
            position: fixed;
            background-color: #30c2a5;
            color: white;
            width: 100%;
            height: 50px;
        }
        .c1 span{
            float: left;
            font-size: 18px;
            margin-left:29px;
            margin-top: 12px;
            font-weight: 700;
        }
        .menu2{
           
            width: 100%;
            height: 700px;
            position: fixed;
            top: 50px;
            left: 0;
        }
        .l1{
             float: left;
             margin-left: 24px;
             margin-top: 15px;
        }
       
        .v1{
          
            top: 20px;
            left: 200px;
            width: 200px;
            height: 700px;
            text-align: center;
            z-index: 99999;
            color:#999999;
              background-color: #e1e4e8;
          
        }
        .v1 span{
            font-size: 18px;
            background-color: #e1e4e8;
            width: 200px;
            height: 40px;
            float: left;
            margin-top:0;
            padding: 10px 2px 0 0;
        }
        .v1 ul{  
            float: left;
        }
        .v1 ul li{
            width: 198px;
            height: 40px;
            background-color: #e1e4e8;
            cursor: pointer;
            border: solid #eaedf1 1px;
            padding: 22px 2px 0 0;
            font-size: 15px;
        }
</style>>
    
