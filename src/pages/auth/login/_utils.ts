import api from "@/config/axios";
import { setUserName, setUserToken } from "@/stores/auth";
import router from "@/router";
import { AxiosResponse } from 'axios';

interface LoginResponse {
    fullName: string;
    jwToken: string;
}

export const onSubmit = async (data:{email:string,password:string}) => {
    const res: AxiosResponse<LoginResponse> = await api.post<LoginResponse>("/Account/login",{
        
            email: data.email,
            password: data.password,
          
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
