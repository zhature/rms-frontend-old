<script setup lang="ts">
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { message } from "@/utils/message";

defineOptions({
  name: "ApplicationProgress"
});

const { lastBuildTime } = __APP_INFO__;

const columns = [
  {
    label: "申请ID：",
    value: "12345"
  },
  {
    label: "负责人",
    value: "bob"
  },
  {
    label: "生效时间：",
    value: lastBuildTime
  }
];

const dialogVisible = ref(false);

const handleconfirm = () => {
  ElMessageBox.confirm("你确定要催一下吗？")
    .then(() => {
      message("催审成功", { type: "success" });
    })
    .catch(() => {
      // catch error
    });
};
</script>

<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">申请进度</span>
        </div>
      </template>
      <el-result
        icon="success"
        title="申请已提交成功"
        sub-title="我们将在3个工作日内联系你，请耐心等待。初审通过后将安排面试环节。"
      >
        <template #extra>
          <div class="flex">
            <el-button
              @click="$router.push({ path: '/information/view' })"
              type="primary"
              >返回岗位介绍</el-button
            >
            <el-button onclick="window.print()">打印本页</el-button>
          </div>
        </template>
      </el-result>
      <div class="p-6 ml-10 mr-10 bg-[#fafafa] dark:bg-[#1d1d1d]">
        <PureDescriptions title="岗位申请" :columns="columns" class="mb-5" />
        <el-steps :active="2">
          <el-step title="提交申请">
            <template #description>
              <p>alice</p>
              <p>{{ lastBuildTime }}</p>
            </template>
          </el-step>
          <el-step title="材料初审">
            <template #description>
              <p class="flex items-center">
                bob
                <span
                  role="img"
                  aria-label="dingding"
                  class="anticon anticon-dingding flex items-center cursor-pointer"
                  style="color: rgb(0, 160, 233); margin-left: 8px"
                  @click="dialogVisible = true"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="dingding"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"
                    />
                  </svg>
                  催一下
                </span>
              </p>
            </template>
          </el-step>
          <el-step title="面试环节" />
          <el-step title="录用/淘汰" />
        </el-steps>
      </div>
    </el-card>
    <el-dialog v-model="dialogVisible" title="提示" width="30%">
      <span
        >我们将在3个工作日内联系你，请耐心等待。如果超过3个工作日没有收到联系，请确认催一下。</span
      >
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button @click="handleconfirm" type="primary"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
:deep(.el-descriptions__body) {
  background: transparent;
}
</style>
