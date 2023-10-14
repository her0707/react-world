interface InitArgs {
  url: string;
  options?: RequestInit;
}

interface InstanceArgs {
  baseURL: string;
  headers?: HeadersInit;
  interceptors?: {
    request?: (request: Request) => Request;
    response?: (response: Response) => Response;
  };
}

function applyDefaultRequestOptions(args: InitArgs, defaultOptions: InstanceArgs) {
  const headers = new Headers(defaultOptions.headers);

  new Headers(args.options?.headers)?.forEach((value, key) => headers.set(key, value));

  const url = new URL(args.url, defaultOptions.baseURL);

  return {
    apiUrl: url,
    headers,
  };
}

const fetchInstance = (args: InstanceArgs) => async (url: string, options?: RequestInit) => {
  const { apiUrl, headers } = applyDefaultRequestOptions({ url, ...(options && options) }, args);

  let newRequest = new Request(apiUrl, { ...options, headers });

  if (args.interceptors?.request) {
    newRequest = args.interceptors.request(newRequest);
  }

  const response = await fetch(newRequest);

  return args.interceptors?.response?.(response) || response;
};

export default fetchInstance;
