import axios from "axios"
import { baseUrl, timeOut } from "./config"
class HYrequest{
    constructor(baseUrl,TimeOut=5000){
        this.instance = axios.create({
            baseURL:baseUrl,
            timeout:TimeOut,
            
        })  
        this.instance.interceptors.request.use((res)=>{
            console.log(res)
            return res
        })
        this.instance.interceptors.response.use((res)=>{
            return res.data
        },err=>{
            return err
        })
    }
    request(config){
        return this.instance.request(config)
    }
    get(config){
        return this.request({...config,method:'get'})
    }
    post(config){
        return this.request({...config,method:'post'})
    }
}
 const hyRequest = new HYrequest(baseUrl,timeOut)
 export default hyRequest