import axios from "axios";
import { config } from "../config"

export const getData = async (path, data=null, header=null) => {
    return await axios({
        url     : config.base_url+path,
        method  : "GET",
        params  : data,
        headers : header
    })
}