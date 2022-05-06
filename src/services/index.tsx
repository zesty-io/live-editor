export const getPageData = async () => {
   let data = {
      error: true,
      production: true,
   }
   const queryString = window.location.search.substring(1)

   const domain =
      process.env.REACT_APP_DOMAIN_OVERRIDE || process.env.NEXT_PUBLIC_DOMAIN_OVERRIDE
         ? process.env.REACT_APP_DOMAIN_OVERRIDE ||
           process.env.NEXT_PUBLIC_DOMAIN_OVERRIDE
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
   setFunc: (e: any) => void,
   token: string | any,
) => {
   console.log(token)
   let data = ""
   const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
   }
   const res = await fetch(uri, {
      method: "GET",
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      headers,
   })
   data = await res.json()
   res && setFunc({ data, response: res })
}
