import { createApi} from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./features/axiosBaseQurey"

export const baseApi = createApi({

    reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
     endpoints: () => ({})

})