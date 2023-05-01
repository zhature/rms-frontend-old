import { MockMethod } from "vite-plugin-mock";

// 1产品、2运营、3市场、4技术、5设计、6职能

export default [
  {
    url: "/getCardList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
            {
              index: 10,
              isSetup: true,
              type: 1,
              name: "产品经理",
              description:
                "产品经理负责定义和执行公司或产品的产品愿景。他们与开发团队紧密合作，确保产品按时交付和在预算内。"
            },
            {
              index: 11,
              isSetup: false,
              type: 1,
              name: "产品助理",
              description:
                "产品助理负责协助产品经理完成产品开发和管理任务。他们可能负责创建产品文档或进行用户研究。"
            },
            {
              index: 1,
              isSetup: true,
              type: 2,
              name: "架构师",
              description:
                "架构师负责设计和监督软件应用或系统的技术架构。他们与开发团队密切合作，确保技术设计符合业务需求。"
            },
            {
              index: 4,
              isSetup: true,
              type: 4,
              name: "前端工程师",
              description:
                "前端工程师负责设计和实现Web应用的用户界面。他们使用HTML、CSS和JavaScript等技术创建响应式和用户友好的Web页面。"
            },
            {
              index: 3,
              isSetup: true,
              type: 4,
              name: "后端工程师",
              description:
                "后端工程师负责开发Web应用程序的服务器端。他们使用Java、Python或PHP等编程语言创建和维护服务器端逻辑。"
            },
            {
              index: 4,
              isSetup: true,
              type: 4,
              name: "人工智能工程师",
              description:
                "人工智能工程师负责开发和实施机器学习算法和数据模型。他们从事与自然语言处理、计算机视觉和预测分析相关的项目。"
            },
            {
              index: 5,
              isSetup: true,
              type: 4,
              name: "开发工程师",
              description:
                "开发工程师负责编写、测试和调试软件应用程序。他们与技术架构师和项目经理紧密合作，确保软件按时交付和在预算内。"
            },
            {
              index: 6,
              isSetup: true,
              type: 4,
              name: "测试工程师",
              description:
                "测试工程师负责测试软件应用程序，以确保它们符合质量标准。他们创建测试计划和测试用例，并与开发团队密切合作，以识别和解决软件缺陷。"
            },
            {
              index: 7,
              isSetup: false,
              type: 3,
              name: "运维工程师",
              description:
                "运维工程师负责确保软件应用程序可用且性能良好。他们监控系统健康状况和性能，并在出现问题时进行故障排除和解决。"
            },
            {
              index: 8,
              isSetup: true,
              type: 5,
              name: "UI设计师",
              description:
                "UI设计师负责设计一个软件应用程序的用户界面。他们使用设计工具如Sketch或Adobe XD创建应用程序屏幕的线框图和原型。"
            },
            {
              index: 9,
              isSetup: true,
              type: 5,
              name: "交互设计师",
              description:
                "交互设计师负责设计软件应用程序的用户体验。他们与UI设计师密切合作，确保应用程序易于使用和直观。"
            }
          ]
        }
      };
    }
  }
] as MockMethod[];
