import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/role",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
            {
              createTime: 1609837428000,
              updateTime: 1645477701000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 1,
              name: "alice",
              sort: 1,
              status: 0,
              status2: 0,
              type: 1,
              dataScope: 1,
              dataScopeDeptIds: null
            },
            {
              createTime: 1609837428000,
              updateTime: 1645477700000,
              creator: "admin",
              updater: "",
              deleted: false,
              tenantId: 1,
              id: 2,
              name: "lisa",
              sort: 2,
              status: 0,
              status2: 0,
              type: 1,
              dataScope: 2,
              dataScopeDeptIds: null
            },
            {
              createTime: 1609912175000,
              updateTime: 1647698441000,
              creator: "",
              updater: "1",
              deleted: false,
              tenantId: 1,
              id: 101,
              name: "mike",
              sort: 0,
              status: 0,
              status2: 0,
              type: 2,
              dataScope: 1,
              dataScopeDeptIds: []
            }
          ],
          total: 3
        }
      };
    }
  }
] as MockMethod[];
