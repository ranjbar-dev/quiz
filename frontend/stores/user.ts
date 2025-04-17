import type { UserModel } from "~/models/user"

export const useUserStore = defineStore('user', () => {
    
    const user = ref<UserModel | null>(null)
    const loading_user = ref<boolean>(true)
   
    const fetchUser = async (): Promise<UserModel | null> => {

        loading_user.value = true
        return ask.getUser()
            .then( (value) => user.value = value )
            .finally( () => loading_user.value = false )
    }

    const setUser = (value: UserModel) => {
        
        loading_user.value = true
        user.value = value
        loading_user.value = false
    }

    const unSetUser = () => {

        user.value = null
    }

    return {
        user,
        loading_user,

        setUser,
        unSetUser,
        fetchUser,
    }
})