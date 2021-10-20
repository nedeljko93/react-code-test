import axios from "axios";

export const BASE_URL = "http://jsonplaceholder.typicode.com";

export async function UseFetchApi({ path, method, bodyData = {} }) {
  let status;
  let data;
  let error = "";
  try {
    const response = await axios({
      method,
      url: BASE_URL + path,
      data: bodyData,
    });
    status = response.status;
    data = response.data;
    return { data: data, status: status, error: error };
  } catch (error) {
    return { data: error, error: error.message, status: status };
  }
}
