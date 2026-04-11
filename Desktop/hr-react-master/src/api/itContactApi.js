import axios from "axios";

const BASE_URL = "https://d1m2mdh79i68qn.cloudfront.net/api/it-contact";

export const createContact = async(data) => {
    const res = await axios.post(BASE_URL, data);
    return res.data;
};