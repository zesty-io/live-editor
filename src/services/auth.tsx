interface ILoginAPI {
   body?: any
   token?: string
   url: string
   handleSuccess: (e: any) => void
   handleError: (e: any) => void
}

export const authApi = async ({
   body,
   url,
   token,
   handleSuccess,
   handleError,
}: ILoginAPI) => {
   const headers: any = {
      "x-www-form-urlencoded": "application/json",
   }
   const params: any = {
      headers,
      method: "POST",
      mode: "cors" as RequestMode,
      referrerPolicy: "no-referrer" as ReferrerPolicy,
      credentials: "omit" as RequestCredentials,
   }

   if (token) {
      headers["Authorization"] = "Bearer " + token
   }

   if (body) {
      params["body"] = body
   }

   const rawResponse = await fetch(url, params)

   const res = await rawResponse.json()
   res.code === 200 && handleSuccess(res)
   res.code !== 200 && handleError(res)
}
