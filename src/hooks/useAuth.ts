
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:1337/api/verify'

const useAuth = (axiosParam: AxiosRequestConfig) => {
    const [ loading,setLoading ] = useState(axiosParam.method === 'GET' || axiosParam.method === 'get')
    const [ error,setError ] = useState<AxiosError>()
    const [ response,setResponse ] = useState<AxiosResponse>()

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params)
            setResponse(result)
        }
        catch(err: any) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    const sendData = () => {
        fetchData(axiosParam)
    }

    useEffect(() => {
        if(axiosParam.method === "GET" || axiosParam.method === "get") {
            fetchData(axiosParam);
        }
    },[])


    return { response,loading,error,sendData }

}


export default useAuth
