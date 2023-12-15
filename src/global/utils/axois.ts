import axios from "axios";
import type { Method, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_API;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const apiCall = async (
  method: Method,
  url: string,
  data?: {}
): Promise<AxiosResponse> => await axios({ method, url, data });

export default apiCall;
