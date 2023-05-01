export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "您已通过面试",
        datetime: "一天前",
        description: "",
        type: "1"
      }
    ]
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "bob 评论了你",
        description: "你很优秀",
        datetime: "一年前",
        type: "2"
      },
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "alice 回复了你",
        description: "你好，我的材料已提交。",
        datetime: "一年前",
        type: "2"
      }
    ]
  },
  {
    key: "3",
    name: "代办",
    list: [
      {
        avatar: "",
        title: "申请材料补全",
        description: "需要在 2022-11-16 20:00 前完成",
        datetime: "",
        extra: "未开始",
        status: "info",
        type: "3"
      },
      {
        avatar: "",
        title: "入职心理健康测试",
        description: "请尽快完成入职心理健康测试",
        datetime: "",
        extra: "未开始",
        status: "warning",
        type: "3"
      }
    ]
  }
];
