import { useUserStore } from "./user"

export const useAuthStore = defineStore('auth', () => {
    
    const is_authenticated = ref<boolean>(false)
    const authentication_token = ref<string | null>(null)
    const loading_authentication = ref<boolean>(true)

    const userStore = useUserStore()

    const check = async (): Promise<boolean> => {

        const token = localStorage.getItem("authentication-token")
        if( !token ) {

            loading_authentication.value = false
            return Promise.resolve(false)
        }

        loading_authentication.value = true 
        return ask.getUser()
            .then( (user) => {

                is_authenticated.value = true 
                authentication_token.value = token 
                return true
            })
            .catch( (error) => {

                console.log(error)
                loading_authentication.value = false
                return false
            } )
            .finally( () => loading_authentication.value = false )
    }

    const login = async (personal_number: string, password: string): Promise<void> => {

        loading_authentication.value = true 
        return ask.login(personal_number, password)
            .then( ({token, user}) => {

                userStore.setUser(user)
                authentication_token.value = token
                is_authenticated.value = true 
                localStorage.setItem("authentication-token", token)
            })
            .catch( (error) => {

                console.log(error)
                loading_authentication.value = false
            } )
            .finally( () => loading_authentication.value = false )
    }

    const logout = () => {

        userStore.unSetUser()
        authentication_token.value = null
        is_authenticated.value = false 
        localStorage.removeItem("authentication-token")
    }

    return {
        is_authenticated,
        authentication_token,
        loading_authentication,

        login,
        logout,
        check,
    }
})