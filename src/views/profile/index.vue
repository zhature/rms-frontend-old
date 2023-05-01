<script setup lang="ts">
import { type CSSProperties, computed, reactive } from "vue";
import { useUserStoreHook } from "@/store/modules/user";

defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Profile"
});

const elStyle = computed((): CSSProperties => {
  return {
    width: "85vw",
    justifyContent: "start"
  };
});

const mockprofile = reactive({
  name: useUserStoreHook()?.username,
  city: "北京",
  date: "1997-02-06",
  school: "山东大学",
  skill: ["前端", "移动端"],
  intro: "阳光积极，喜欢Web和移动端技术。"
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <el-space direction="vertical" size="large">
    <el-card shadow="never" :style="elStyle">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
        </div>
      </template>
      <el-form :model="mockprofile" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="mockprofile.name" />
        </el-form-item>
        <el-form-item label="居住城市">
          <el-input v-model="mockprofile.city" />
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker
            v-model="mockprofile.date"
            type="date"
            placeholder="选择你的出生日期"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="技能/工作经验">
          <el-checkbox-group v-model="mockprofile.skill">
            <el-checkbox label="前端" />
            <el-checkbox label="后端" />
            <el-checkbox label="移动端" />
            <el-checkbox label="营销" />
            <el-checkbox label="策划" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input v-model="mockprofile.intro" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-space>
</template>
