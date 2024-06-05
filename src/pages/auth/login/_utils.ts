import api from "@/config/axios";
import { setUserName, setUserToken } from "@/stores/user";
import router from "@/router";
import { AxiosResponse } from 'axios';

interface LoginResponse {
    fullName: string;
    jwToken: string;
}

export const onSubmit = async (data:{username:string,password:string}) => {
    const {data}: AxiosResponse<LoginResponse> = await api.post<LoginResponse>("/auth/login",{
        
            username: data.username,
            password: data.password,
            expiresInMins: 30,
    });
    console.log(res)
    if(res.status ===200){
        localStorage.setItem('name', res.data?.fullName)
        localStorage.setItem('token', res.data?.jwToken)
        setUserName(res.data?.fullName)
        setUserToken(res.data?.jwToken)
        router.navigate('/')
    }
};
