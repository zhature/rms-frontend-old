<script setup lang="ts">
import { type CSSProperties, computed } from "vue";
import { Edit, Picture, UploadFilled } from "@element-plus/icons-vue";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "ApplicationNew"
});

const elStyle = computed((): CSSProperties => {
  return {
    width: "85vw",
    justifyContent: "start"
  };
});
const mode = "default";
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>求职信</p>";
  }, 1500);
});

const toolbarConfig: any = { excludeKeys: "fullScreen" };
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = editor => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

<template>
  <el-space direction="vertical" size="large">
    <el-card shadow="never" :style="elStyle">
      <template #header>
        <div class="card-header">
          <span>新的申请</span>
        </div>
      </template>
      <el-steps :space="200" :active="1" simple>
        <el-step title="求职信" :icon="Edit" />
        <el-step title="个人简历" :icon="UploadFilled" />
        <el-step title="其他材料上传" :icon="Picture" />
      </el-steps>
      <div class="wangeditor">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>
      <el-button type="primary">保存</el-button>
    </el-card>
  </el-space>
</template>
