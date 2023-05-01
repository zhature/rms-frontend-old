<script setup lang="ts">
import { ref, watch } from "vue";
import { message } from "@/utils/message";
import { FormInstance } from "element-plus";

const SELECT_OPTIONS = [
  { label: "产品", value: 1 },
  { label: "运营", value: 2 },
  { label: "职能", value: 3 },
  { label: "技术", value: 4 },
  { label: "设计", value: 5 },
  { label: "市场", value: 6 }
];

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {};
    }
  }
});

const ruleFormRef = ref<FormInstance>();

const formVisible = ref(false);
const formData = ref(props.data);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      message("提交成功", { type: "success" });
      formVisible.value = false;
      resetForm(formEl);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const closeDialog = () => {
  formVisible.value = false;
  resetForm(ruleFormRef.value);
};

const emit = defineEmits(["update:visible"]);
watch(
  () => formVisible.value,
  val => {
    emit("update:visible", val);
  }
);

watch(
  () => props.visible,
  val => {
    formVisible.value = val;
  }
);

watch(
  () => props.data,
  val => {
    formData.value = val;
  }
);

const rules = {
  name: [{ required: true, message: "请输入产品名称", trigger: "blur" }]
};
</script>

<template>
  <el-dialog
    v-model="formVisible"
    title="编辑岗位"
    :width="680"
    draggable
    :before-close="closeDialog"
  >
    <!-- 表单内容 -->
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="岗位名称" prop="name">
        <el-input
          v-model="formData.name"
          :style="{ width: '480px' }"
          placeholder="请输入岗位名称"
        />
      </el-form-item>
      <el-form-item label="岗位状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio label="0">停止招聘</el-radio>
          <el-radio label="1">正在招聘</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="岗位描述" prop="description">
        <el-input
          v-model="formData.description"
          :style="{ width: '480px' }"
          placeholder="请输入岗位描述"
        />
      </el-form-item>
      <el-form-item label="岗位类型" prop="type">
        <el-select
          v-model="formData.type"
          clearable
          :style="{ width: '480px' }"
        >
          <el-option
            v-for="(item, index) in SELECT_OPTIONS"
            :key="index"
            :value="item.value"
            :label="item.label"
          >
            {{ item.label }}
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>
