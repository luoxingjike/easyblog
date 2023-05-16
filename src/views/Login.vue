<template>
    <div class="login-body">
        <div class="login-panel">
            <div class="login-title"> 用户登录</div>
            <el-form :model="formData" :rules="rules" ref="formDataRef">
                <el-form-item label="" prop="account">
                    <el-input placeholder="请输入账号" v-model="formData.account"><template #prefix>
                            <span class="confront icon-account"></span> </template></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="formData.password"> <template #prefix>
                            <span class="confront icon-password"></span> </template></el-input>
                </el-form-item>
                <el-form-item prop="checkCode">
                    <div class="check-code-panel">
                        <el-input placeholder="请输入验证码" v-model="formData.checkCode" class="input-panel" />
                        <img src="../assets/login-yz.png" class="check-code" />
                    </div>

                </el-form-item>
                <el-form-item>
                    <el-checkbox placeholder="请输入验证码" v-model="formData.rememberMe" :label="true" >记住我</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :style="{ width: '100%' }" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"

const api={
    checkCode:"api/checkCode"
}
const checkCodeUrl=ref(api.checkCode);
const changeCheckCode=()=>{
    checkCodeUrl.value=api.checkCode+"?"+ new Date().getTime();
} 

//表单相关
const formDataRef=ref(null);
const formData = reactive({

});
const rules={
    account:[{
        required:true,
        message:"请输入用户名"
    }],
    password:[{
        required:true,
        message:"请输入密码"
    }],
    checkCode:[{
        required:true,
        message:"请输入验证码"
    }]
};

const login = () =>{
    formDataRef.value.validate((valid)=>{
        if(!valid){
            return;
        }
    });
};
</script>

<style lang="scss">
.login-body {
    background-image: url("../assets/login-bg.jpg");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}

.login-panel {
    width: 350px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(30px);
    padding: 20px;
    position: absolute;
    right: 10vw;
    top: 40%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    .login-title {
        font-size: 19px;
        text-align: center;
        margin-bottom: 20px;
    }

    .check-code-panel {
        display: flex;

        .input-panel {
            flex: 1;
            align-items: center;
            margin-right: 5px;
        }

        .check-code {
            width: 120px;
            background-color: white;
            cursor: pointer;
            height: 31px;
        }
    }
}</style>