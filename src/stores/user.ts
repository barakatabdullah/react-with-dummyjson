import { create } from 'zustand'

interface UserStore{
    name:string| null
    token:string| null
    actions:{
        setUserName(name:string):void
        setUserToken(token:string):void
        getUserToken():string| null
    }
}

export const useUserStore= create<UserStore>((set,get) => ({
    name: localStorage.getItem('user'),
    token: localStorage.getItem('token'),

    actions:{

        getUserToken:()=>get().token,
        setUserName(name:string){
            set({name})
        },
        setUserToken(token:string){
            set({token})
        },
    }


  }))

  export const { setUserName,setUserToken,getUserToken } = useUserStore.getState().actions