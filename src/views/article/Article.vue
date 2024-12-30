<template>
    <div class="app-container">
        <!-- 添加文章按钮 -->
        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button type="primary" plain @click="handleAdd">添加文章</el-button>
            </el-col>
        </el-row>
        <!-- 添加或修改文章管理对话框 -->
        <el-dialog :title="title" v-model="open" width="750px" append-to-body :destroy-on-close="true">
            <el-form ref="articleRef" :model="form" label-width="100px">
                <el-form-item label="文章内容">
                    <editor v-model="form.articleContent" :min-height="630" />
                </el-form-item>
            </el-form>
            <!-- 确定和取消 -->
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm">确 定</el-button>
                    <el-button @click="cancel">取 消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup name="Article">
import { ref, reactive, toRefs } from "vue";
import Editor from "@/components/Editor/index.vue";
import { setToken } from "@/utils/auth";
const open = ref(false);
const title = ref("添加文章");
const data = reactive({
    form: {},
});
const { form } = toRefs(data);

// 表单重置
function reset() {
    form.value = {
        articleContent: undefined,
    };
}

/** 新增按钮操作 */
function handleAdd() {
    reset();
    open.value = true;
    title.value = "添加文章管理";
    // 设置登录Token
    const token = '你的登录token'
    setToken(token);
}

// 取消按钮
function cancel() {
    open.value = false;
    reset();
}

/** 提交按钮 */
function submitForm() {
    // 打印将文章内容
    console.log(form.value.articleContent);

    // 关闭对话框
    open.value = false;
    reset();
}
</script>