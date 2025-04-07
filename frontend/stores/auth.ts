export const useAuthStore = defineStore('user', () => {
    
    const is_authenticated = ref<boolean>(false)
    const authentication_token = ref<string | null>(null)
    const loading_authentication = ref<boolean>(true)
    const error_authentication = ref<string | null>(null)

    const check = async (): Promise<boolean> => {

        const token = localStorage.getItem("authentication-token")
        if( !token )
            return Promise.resolve(false)

        loading_authentication.value = true 
        return ask.checkToken(token)
            .then( (is_valid) => {

                if( is_valid ) {

                    is_authenticated.value = true 
                    authentication_token.value = token 
                    return true
                } else {

                    return false 
                }
            })
            .finally( () => loading_authentication.value = false )
    }

    const login = async (first_name: string, last_name: string, phone_number: string, code_melli: string): Promise<void> => {

        loading_authentication.value = true 
        error_authentication.value = null
        return ask.login(first_name, last_name, phone_number, code_melli)
            .then( token => {

                authentication_token.value = token
                is_authenticated.value = true 
                localStorage.setItem("authentication-token", token)
            })
            .catch( (error) => error_authentication.value = error.message)
            .finally( () => loading_authentication.value = false )
    }

    const logout = () => {

        authentication_token.value = null
        is_authenticated.value = false 
        localStorage.removeItem("authentication-token")
    }

    return {
        is_authenticated,
        authentication_token,
        loading_authentication,
        error_authentication,

        login,
        logout,
        check,
    }
})