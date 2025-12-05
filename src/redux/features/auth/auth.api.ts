import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
      
        url: "/users",  
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
