import api from "./axios";

export const login = async (loginId, password) =>{

    const res =await api.post("https://d1m2mdh79i68qn.cloudfront.net/login",{loginId, password});
    return res.data 
}