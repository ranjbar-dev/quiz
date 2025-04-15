import type { UserModel } from "~/models/user"

const api = async (url: string, params: any = {}): Promise<any> => {

  const { authentication_token } = storeToRefs(useAuthStore())

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if( authentication_token.value )
    headers['Authorization'] = `Bearer ${authentication_token.value}`

  return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
    })
    .then( response => response.json() )  
    .then( data => {

      if( data.statusCode == 200 )
        return data.data

      throw new Error(data.message)
    })
}

export const ask = {

    login: (personal_number: string, password: string): Promise<{token: string, user: UserModel}> => api("/api/login", { personal_number, password }),

    getUser: (): Promise<UserModel> => api("/api/user").then( data => data.user ),

    updateProfile: (first_name: string, last_name: string, phone_number: string, melli_code: string, birth_date: string, education_level: string): Promise<UserModel> => api("/api/update-profile", { first_name, last_name, phone_number, melli_code, birth_date, education_level }).then( data => data.user ),

    checkToken: (token: string): Promise<boolean> => api("/api/check", { token }).then( data => data.is_valid )

}