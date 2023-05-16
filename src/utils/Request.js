import axios from "axios";

const contentTypeForm="application/x-www-form-urlencoded,charset=UTF-8";
const contentTypeJson="application/json"
const contentTypeFile="application/form-data"

const request = (config) => {
    const { url, params, dateType, showLoading } = config;
    dateType = dateType ? "from" : dateType
    showLoading = showLoading ? true : showLoading;
    let contentType=contentTypeForm;
    if(dateType==="json"){
        contentType=contentTypeJson;
    }else if(dateType==="file"){
       contentType=contentTypeFile;
       let param =new FormData();
       for(let key in params){
        param.append(key,params[key]);
       }
       params=param;
    }

    const instants =axios.create({
        baseURL:'/api',
        timeout:10*1000,
        headers:{
            'Content-Type':contentType,
            'X-Requested-With':'XMHttpRequest',
        }
    })
    instants.interceptors.request.use((config)=>{
        if(showLoading){
            
        }
    })
}

export default request;