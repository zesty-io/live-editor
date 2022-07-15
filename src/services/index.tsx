export * from "./auth"

export const getPageData = async (token?: string) => {
   let data = {
      error: true,
      production: true,
      status: 500,
   }
   const queryString = window.location.search.substring(1)

   const domain = process.env.DOMAIN_OVERRIDE
      ? process.env.DOMAIN_OVERRIDE
      : window.location.origin

   const uri = domain + window.location.pathname + "?toJSON&" + queryString
   // const uri = window.location.href + "?toJSON&" + queryString;

   // for testing only
   // const uri = "https://www.zesty.io?toJSON&" + queryString
   const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const headersNoToken = {
      "Content-Type": "application/x-www-form-urlencoded",
   }
   // Fetch data from Zesty.io toJSON API
   const res = await fetch(uri, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers: token ? headers : headersNoToken,
   })

   console.log(res, "res:::")
   // otherwise set response to data
   if (res.status === 200) {
      data = await res.json()
   }

   data.status = res.status

   return { data, response: res }
}

export const fetchData = async (
   uri: string,
   setFunc: (e: any) => void,
   token: string | any,
) => {
   const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const res = await fetch(uri, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers,
   }).then((response) => response.json())
   setFunc(res)
}

export const fetchJSON = async (
   uri: string,
   setFunc: (e: any) => any,
   token: string | any,
   setloading: any,
) => {
   console.log(token)
   const data = ""
   console.log(data, setFunc)
   const headersNoToken = {
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const res = await fetch(uri, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers: token ? headers : headersNoToken,
   })
      .then(async (e: any) => {
         if (e.status === 401) {
            return {
               data: null,
               error: false,
               res: await e.text(),
               status: e.status,
            }
         }
         return { data: await e.json(), error: false, res: e, status: e.status }
      })
      .catch((e) => {
         return { data: null, error: true, res: e, status: 500 }
      })

   setloading(false)
   return res
   // console.log(res, "res2:::")
   // if (typeof res !== "string") {
   //    setloading(false)
   //    // console.log(data1, "res:::::::")

   //    return { data: res, res, error: false }
   //    // data = await res.json()
   //    // setFunc({ data, response: res })
   // } else {
   //    setloading(false)
   //    return { data: null, res, error: false }
   //    // setFunc({ data: null, response: res, error: true })
   // }
}

export const editSeoData = async ({ url, token, payload }: any) => {
   const putMethod = {
      method: "PUT",
      headers: {
         "Content-type": "application/json; charset=UTF-8",
         authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
   }

   const res = await fetch(url, putMethod)

   return res
}
export const editHeadTagApi = async ({ url, token, payload }: any) => {
   const putMethod = {
      method: "PUT",
      headers: {
         "Content-type": "application/json; charset=UTF-8",
         authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
   }

   const res = await fetch(url, putMethod)
   const json = await res.json()

   return json
}

export const addHeadTagApi = async ({ url, token, payload }: any) => {
   const putMethod = {
      method: "POST",
      headers: {
         "Content-type": "application/json; charset=UTF-8",
         authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
   }

   const res = await fetch(url, putMethod)
   const json = await res.json()

   return json
}
export const deleteHeadTagApi = async ({ url, token }: any) => {
   const putMethod = {
      method: "DELETE",
      headers: {
         "Content-type": "application/json; charset=UTF-8",
         authorization: "Bearer " + token,
      },
   }

   const res = await fetch(url, putMethod)
   const json = await res.json()

   return json
}
export const headTagApi = async ({
   method = "GET",
   url,
   token,
   body,
   options = {},
}: any) => {
   if (method != "GET") options.body = body

   options.method = method
   options.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
   }
   options.credentials = "same-origin"

   try {
      const res = await fetch(url, options)
      const json = await res.json()
      return json
   } catch (err) {
      console.error("Error:", err)
      return err
   }
}

export const handleEdit = async (
   origData: any,
   url: string,
   token: string | undefined,
   dataToEdit: any,
) => {
   const content = origData.data

   // const originalData: any = content.data
   // remove not necessary fields
   // @ts-ignore
   // delete originalData?.meta
   // delete originalData?.zestyBaseURL
   // delete originalData?.zestyInstanceZUID
   // delete originalData?.zestyProductionMode

   const payload = {
      data: { ...content.data, ...dataToEdit },
      meta: content.meta,
      web: content.web,
   }
   console.log(dataToEdit, "payload")

   // const token = "f3555fb52bdd3c6e3b3ff5421b74b740bf41f4e5"

   const putMethod = {
      method: "PUT",
      headers: {
         "Content-type": "application/json; charset=UTF-8",
         authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
   }

   const res = await fetch(url, putMethod)

   res.status === 200 &&
      res.json().then((e) => {
         console.log(e)
         // window.location.reload()
      })
   res.status !== 200 && res.json().then((e) => console.log(e, "err"))
}
