import AxiosSecure from "./AxiosSecure";

/******************Contract Api***********************/
export const createContract = async (contractData) => {
  const { data } = await AxiosSecure.post(`/contracts`, contractData);
  return data;
};

export const getContract = async () => {
  const { data } = await AxiosSecure(`/contracts`);
  return data;
};

/******************Patients Api***********************/
export const getPatients = async () => {
  const { data } = await AxiosSecure(`/patients`);
  return data;
};
export const createPatient = async (patientData) => {
  const { data } = await AxiosSecure.post(`/patient`, patientData);
  return data;
};

/******************Home visits  Api***********************/
export const getVisitors = async () => {
  const { data } = await AxiosSecure(`/visitors`);
  return data;
};
export const createVisitors = async (visitorsData) => {
  const { data } = await AxiosSecure.post(`/visitor`, visitorsData);
  return data;
};
