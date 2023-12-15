import axios from "axios";
import type { Method, AxiosResponse } from "axios";

const apiCall = async (
  method: Method,
  url: string,
  data?: {}
): Promise<AxiosResponse> => await axios({ method, url, data });

export default apiCall;
