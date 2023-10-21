import fetchInstance from "@/utils/fetch-Instance";

const baseURL = import.meta.env.PUBLIC_BASE_URL;
const defaultHeaders = {
  "Content-type": "application/json",
};

const instance = fetchInstance({
  baseURL,
  headers: defaultHeaders,
  interceptors: {
    request: request => {
      return request;
    },
    response: response => {
      return response;
    },
  },
});

function makeCustomRequest(
  methodType: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  options?: RequestInit,
  data?: BodyInit | null,
) {
  return {
    method: methodType,
    ...(data && { body: data }),
    ...options,
  };
}

export async function _get(url: string, options?: RequestInit) {
  const response = await instance(url, makeCustomRequest("GET", options));

  return await response.json();
}

export async function _post(url: string, data?: BodyInit | null, options?: Omit<RequestInit, "body">) {
  const response = await instance(url, makeCustomRequest("POST", options, data));

  if (!response.ok) {
    throw await response.json();
  }
  return await response.json();
}

export async function _put(url: string, data?: BodyInit | null, options?: Omit<RequestInit, "body">) {
  const response = await instance(url, makeCustomRequest("PUT", options, data));
  return await response.json();
}

export async function _delete(url: string, options?: RequestInit) {
  const response = await instance(url, makeCustomRequest("DELETE", options));
  return await response.json();
}

export async function patch(url: string, data: BodyInit | null, options?: Omit<RequestInit, "body">) {
  const response = await instance(url, makeCustomRequest("PATCH", options, data));
  return await response.json();
}
