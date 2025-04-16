import type { JobModel } from "~/models/job"
import type { UserModel } from "~/models/user"

const api = async (method: string, url: string, params: any = {}): Promise<any> => {

  const { authentication_token } = storeToRefs(useAuthStore())

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if( authentication_token.value )
    headers['Authorization'] = `Bearer ${authentication_token.value}`

  let body = null
  if( params )  
    body = JSON.stringify(params)

  return fetch(url, {
      method: method,
      headers: headers,
      body: body
    })
    .then( async (response) => {

      const json = await response.json()

      if( response.status != 200 )
        throw new Error(json.message)

      return json
    })  
}

export const ask = {

    login: (personal_number: string, password: string): Promise<{token: string, user: UserModel}> => api("POST", "/api/auth/login", { id: parseInt(personal_number), password: password }).then( data => ({ token: data.token, user: data.user }) ),

    getUser: (): Promise<UserModel> => api("POST", "/api/auth/user").then( data => data ),

    getJobs: (): Promise<JobModel[]> => api("POST", "/api/job/all").then( data => data ),

    updateProfile: (first_name: string, last_name: string, phone_number: string, melli_code: string, birth_date: string, education_level: string): Promise<UserModel> => api("POST", "/api/update-profile", { first_name, last_name, phone_number, melli_code, birth_date, education_level }).then( data => data.user ),

}