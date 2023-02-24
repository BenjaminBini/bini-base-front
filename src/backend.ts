import axios, { AxiosHeaders } from "axios";
import { QueryClient } from "react-query";

import { APIResponse } from "./api/types";

const configureBackend = () => {
  axios.defaults.baseURL = "http://localhost:4444";

  axios.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      config.headers = (config.headers ?? {}) as AxiosHeaders;
      config.headers.set("Authorization", `Bearer ${jwt}`);
    }
    return config;
  });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data }: { data: APIResponse } = await axios.get(
          `/api/${queryKey[0]}`
        );
        return data;
      },
    },
  },
});

export { configureBackend, queryClient };
