import axios from "axios";

async function sendReq(url, method = "get", data = null, headers = null){
    let conf = {
        method,
        url
    }

    if(data){
        conf.data = data;
    }

    return await axios(conf, {
        withCredentials: true,
        headers
    });
}

export default sendReq;