<script setup lang="ts">
import { type CSSProperties, computed } from "vue";
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Faqs"
});

const elStyle = computed((): CSSProperties => {
  return {
    width: "85vw",
    justifyContent: "start"
  };
});
</script>

<template>
  <el-space direction="vertical" size="large">
    <el-card shadow="never" :style="elStyle">
      <template #header>
        <div class="card-header">
          <span>常见问题</span>
        </div>
      </template>
      <p><strong>1. 我们公司的文化是什么样的？</strong></p>
      <p style="text-indent: 2em">
        公司非常注重员工的工作和生活平衡，鼓励员工创新和发挥创造力。我们致力于打造一个开放、包容和多元化的工作环境，让每个人的才华得到充分发挥。我们的团队非常注重协作和互相支持，鼓励员工分享知识和经验，互相学习和成长。此外，我们还会定期组织一些特殊的员工福利计划，如奖励计划、社交活动和员工折扣等，以帮助员工更好地平衡工作和生活。
      </p>
      <p style="text-indent: 2em"><br /></p>
      <p><strong>2. 我们公司的福利待遇如何？</strong></p>
      <p style="text-indent: 2em">
        我们为员工提供有竞争力的薪酬、健康保险计划、假期、灵活工作时间、教育和职业发展机会等福利待遇。我们致力于为员工提供一个安全、健康和舒适的工作环境，并为员工提供各种福利和认可，以帮助员工实现个人和职业的目标。
      </p>
      <p style="text-indent: 2em"><br /></p>
      <p><strong>3. 我们公司的晋升机会有多大？</strong></p>
      <p style="text-indent: 2em">
        我们非常鼓励员工发挥他们的潜力，并提供各种职业发展机会。我们有一套完善的晋升计划，并为员工提供培训和学习机会，帮助他们实现职业目标。我们还会定期评估员工的表现，以便提供更好的发展机会和晋升途径。
      </p>
      <p style="text-indent: 2em"><br /></p>
      <p><strong>4. 我们公司的团队氛围如何？</strong></p>
      <p style="text-indent: 2em">
        我们的团队非常注重协作和互相支持。我们鼓励员工分享知识和经验，互相学习和成长。我们还有一系列团队建设活动，如团队旅行和志愿者活动，帮助员工更好地了解彼此并建立更紧密的联系。我们的团队成员来自不同的背景和专业领域，这有助于促进团队的多元化和包容性。
      </p>
      <p style="text-indent: 2em"><br /></p>
      <p><strong>5. 我们公司的管理层如何？</strong></p>
      <p style="text-indent: 2em">
        我们的管理层非常注重员工的发展和成功，鼓励员工提出建设性的反馈和意见。我们的领导团队非常有经验和专业知识，在公司的发展和成功方面发挥着重要作用。我们非常重视员工的反馈和意见，并会在必要时对公司和管理层进行改进。
      </p>
      <p style="text-indent: 2em"><br /></p>
      <p><strong>6. 我们公司的未来发展规划如何？</strong></p>
      <p style="text-indent: 2em">
        我们公司的未来非常光明。我们致力于不断创新和改进，开发新的产品和服务，并扩大我们在市场上的影响力。我们的目标是成为行业的领导者，并在未来几年内实现可持续增长。我们会继续投入资源和精力，以确保公司的长期发展和成功。
      </p>
    </el-card>
  </el-space>
</template>
