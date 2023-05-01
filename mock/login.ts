// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "bob") {
        return {
          success: true,
          data: {
            username: "bob",
            // 一个用户可能有多个角色
            roles: ["admin"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.bob",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.bobRefresh",
            expires: "2023/10/30 00:00:00"
          }
        };
      } else {
        return {
          success: true,
          data: {
            username: "alice",
            // 一个用户可能有多个角色
            roles: ["applicant"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.alice",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.aliceRefresh",
            expires: "2023/10/30 00:00:00"
          }
        };
      }
    }
  }
] as MockMethod[];
