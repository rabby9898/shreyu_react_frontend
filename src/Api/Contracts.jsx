import AxiosSecure from "./AxiosSecure";

export const createContract = async (contractData) => {
  const { data } = await AxiosSecure.post(`/contracts`, contractData);
  return data;
};

export const getContract = async () => {
  const { data } = await AxiosSecure(`/contracts`);
  return data;
};
