import axios from "axios";

const BASE_URL = 'https://d1m2mdh79i68qn.cloudfront.net/api/dashboard';

export const getDashboard = async (memberId) => {
    const res = await axios.get(`${BASE_URL}/${memberId}`);
    return res.data.data ?? {};
}