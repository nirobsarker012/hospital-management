import axios from "axios";

export const getAllDoctorsData = async () => {
  const response = await axios.get(`/all-doctors`);
  console.log(response.data);
  return response.data;
};
