const api = (url: string, params: any = {}): Promise<any> => {

  // TODO : complete
  // return fetch(url, params);

  return Promise.reject(new Error("Not implemented"))
}

export const ask = {

    login: (first_name: string, last_name: string, phone_number: string, code_melli: string): Promise<string> => api("/auth/login", { first_name, last_name, phone_number, code_melli }).then( data => data.token ),

    checkToken: (token: string): Promise<boolean> => api("/auth/check", { token }).then( data => data.is_valid )

}