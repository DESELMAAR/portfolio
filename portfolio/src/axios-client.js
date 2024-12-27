import axios from "axios"
// import { UseStateContext } from "./context/ContextProvider";


const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
  })

axiosClient.interceptors.request.use((conf)=>{
    const token = localStorage.getItem("ACCESS_TOKEN")
    conf.headers.Authorization=`Bearer ${token}`;
    return conf;
});

axiosClient.interceptors.response.use((resp)=>{
    return resp
},
(error)=>{
    const {resp}=error;
    if(resp.status === 401){
        localStorage.removeItem("ACCESS_TOKEN");
    } else if (response.status === 404) {
      }
    throw error;
}
);

export default axiosClient;



// const axiosClient =axios.create({
//     baseURL:`http://127.0.0.1:8000/api`
// })