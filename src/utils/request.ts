import axios,{CreateAxiosDefaults, AxiosInstance} from "axios";

const baseURL="https://jsonplaceholder.typicode.com"

export const axiosInstance=axios.create({
    baseURL,
    timeout: 10000,
    headers:{
        "Content-Type": "application/json"
    }
} as CreateAxiosDefaults<any>) as AxiosInstance