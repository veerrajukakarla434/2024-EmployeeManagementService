import axios from "axios";

const REST_API_BASE_URL = "http://localhost:2024/api/employees/";

export const listEmployees = ()=> axios.get(REST_API_BASE_URL);

export const createEmployee = (employee:any)=> axios.post(REST_API_BASE_URL, employee);

export const getEmployee =(id:any) => axios.get(REST_API_BASE_URL+id);

export const updateEmployee= (id:any, employee:any) => axios.put(REST_API_BASE_URL+id, employee);

export const deleteEmployee = (id:any) => axios.delete(REST_API_BASE_URL+id);