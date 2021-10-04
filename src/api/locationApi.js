import axios from "axios";

export const BASE_URL = "https://6033c4d8843b15001793194e.mockapi.io";

export async function getLocations(path) {
  let status;
  let data;
  let error = "";
  try {
    const response = await axios.get(BASE_URL + path);
    status = response.status;
    data = response.data;
    return { data: data, status: status, error: error };
  } catch (error) {
    return { data: error, error: error.message, status: status };
  }
}
