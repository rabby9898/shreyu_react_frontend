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

/******************Home Role  Api***********************/
export const getRoles = async () => {
  const { data } = await AxiosSecure(`/roles`);
  return data;
};

export const createRole = async (rolesData) => {
  const { data } = await AxiosSecure.post(`/role`, rolesData);
  return data;
};

/******************Home Users  Api***********************/
export const getUsers = async () => {
  const { data } = await AxiosSecure(`/users`);
  return data;
};

export const createUsers = async (usersData) => {
  const { data } = await AxiosSecure.post(`/user`, usersData);
  return data;
};
