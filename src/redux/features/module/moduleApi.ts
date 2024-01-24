import { baseApi } from "../../api/baseApi";

// type TModule = {
//   title: string;
//   mark?: number;
//   status?: boolean;
// };

const moduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllModule: builder.query({
      query: () => ({
        url: "/module",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllModuleQuery } = moduleApi;
