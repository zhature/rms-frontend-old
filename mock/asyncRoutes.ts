// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"applicant"
 * admin：招聘官
 * applicant：申请人
 */

const informationRouter = {
  path: "/information",
  meta: {
    title: "岗位介绍",
    icon: "collection",
    rank: 1
  },
  children: [
    {
      path: "/information/manage",
      name: "InformationManage",
      meta: {
        title: "岗位介绍",
        roles: ["admin"]
      }
    },
    {
      path: "/information/view",
      name: "InformationView",
      meta: {
        title: "岗位介绍",
        roles: ["applicant"]
      }
    }
  ]
};

const profileRouter = {
  path: "/profile",
  meta: {
    title: "个人信息",
    icon: "avatar",
    rank: 2
  },
  children: [
    {
      path: "/profile/index",
      name: "Profile",
      meta: {
        title: "个人信息",
        roles: ["admin", "applicant"]
      }
    }
  ]
};

const applicationRouter = {
  path: "/application",
  meta: {
    title: "职位申请",
    icon: "document-copy",
    rank: 3
  },
  children: [
    {
      path: "/application/progress/index",
      name: "ApplicationProgress",
      meta: {
        title: "申请进度",
        roles: ["admin", "applicant"]
      }
    },
    {
      path: "/application/new/index",
      name: "ApplicationNew",
      meta: {
        title: "新的申请",
        roles: ["admin", "applicant"]
      }
    },
    {
      path: "/application/manage/index",
      name: "ApplicationManage",
      meta: {
        title: "申请管理",
        roles: ["admin", "applicant"]
      }
    }
  ]
};

const faqsRouter = {
  path: "/faqs",
  meta: {
    title: "常见问题",
    icon: "question",
    rank: 4
  },
  children: [
    {
      path: "/faqs/index",
      name: "Faqs",
      meta: {
        title: "常见问题",
        roles: ["admin", "applicant"]
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/index",
      name: "PermissionPage",
      meta: {
        title: "menus.permissionPage",
        roles: ["admin", "applicant"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          permissionRouter,
          informationRouter,
          profileRouter,
          applicationRouter,
          faqsRouter
        ]
      };
    }
  }
] as MockMethod[];
