import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "../utils/request";

interface AsyncActionInterface {
  type: string;
  url: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
}

export const asyncActionCreator = ({
  type,
  url,
  method = "get",
}: AsyncActionInterface) => {
  return createAsyncThunk(
    type,
    async ({ params, data }: { params?: any; data?: any }) => {
      try {
        const response = await axiosInstance({
          method,
          url,
          params,
          data,
        });

        return response.data;
      } catch (error) {
        return error.message;
      }
    }
  );
};
