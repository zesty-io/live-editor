export const getPageData = async () => {
   let data = {
      error: true,
      production: true,
   }
   const queryString = window.location.search.substring(1)

   const domain = process.env.DOMAIN_OVERRIDE
      ? process.env.DOMAIN_OVERRIDE
      : window.location.origin

   const uri = domain + window.location.pathname + "?toJSON&" + queryString
   // const uri = window.location.href + "?toJSON&" + queryString;

   // for testing only
   // const uri = "https://www.zesty.io?toJSON&" + queryString

   // Fetch data from Zesty.io toJSON API
   const res = await fetch(uri)

   // otherwise set response to data
   if (res.status === 200) {
      data = await res.json()
   }

   return { data, response: res }
}

export const fetchData = async (
   uri: string,
   setFunc: (e: any) => void,
   token: string | any,
) => {
   console.log(token)
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
   res && (await setFunc(res))
}

export const fetchJSON = async (
   uri: string,
   setFunc: (e: any) => any,
   token: string | any,
) => {
   console.log(token)
   const data = ""
   console.log(data, setFunc)
   const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const res = await fetch(uri, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers,
   }).catch((e) => {
      console.log(e)
      return e
   })

   if (res.status === 200) {
      return { data: await res.json(), res, error: false }
      // data = await res.json()
      // setFunc({ data, response: res })
   } else {
      return { data: null, res, error: false }
      // setFunc({ data: null, response: res, error: true })
   }
}
