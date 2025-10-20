import { constants } from "@/core/utils/constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ApiResponse {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

export const apiClient = async (endpoint: string, configs?: ApiResponse) => {
  const response = await fetch(
    `${constants.API_URL}${endpoint}&key=${constants.YOUTUBE_API_KEY}`,
    {
      method: configs?.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...configs?.headers,
      },
      body: JSON.stringify(configs?.body),
    },
  );

  return await response.json();
};
