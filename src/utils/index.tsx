import { Box } from "@mui/system"
import React from "react"
import Fuse from "fuse.js"
/* eslint-disable guard-for-in */
export const canUseDOM = () => {
   return !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
   )
}

// convert the obj to array of objectsj
export const convertToArray = (content: any) =>
   Object.entries(content).map((e: any) => {
      return { [`${e[0]}`]: e[1] }
   })
// convert obj to dot
export const flattenObj = (obj: any, parent: any, res: any = {}) => {
   for (const key of Object.keys(obj || {})) {
      const propName = parent ? parent + "." + key : key
      if (typeof obj[key] === "object") {
         flattenObj(obj[key], propName, res)
      } else {
         res[propName] = obj[key]
      }
   }
   return res
}

// convert dot to object
export function deepen(obj: any) {
   const result = {}

   // For each object path (property key) in the object
   for (const objectPath in obj) {
      // Split path into component parts
      const parts = objectPath.split(".")

      // Create sub-objects along path as needed
      let target: any = result
      while (parts.length > 1) {
         const part: any = parts.shift()
         target = target[part] = target[part] || {}
      }

      // Set value at end of path
      target[parts[0]] = obj[objectPath]
   }

   return result
}

export const headerZUID = (response: any) => {
   return response?.headers?.get("z-zuid") || ""
}

export const PrettyPrintJson = ({ data }: any) => {
   if (typeof data === "string") {
      return <Box paddingLeft={8} dangerouslySetInnerHTML={{ __html: data }}></Box>
   }
   return (
      <div
         style={{
            paddingLeft: "2rem",
            overflow: "hidden",
            width: "100%",
            whiteSpace: "pre-line",
         }}
      >
         <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
   )
}

export function getCookie(cname: string) {
   const name = cname + "="
   const ca = document.cookie.split(";")
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == " ") {
         c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length)
      }
   }
   return ""
}

export function setCookie(cname: string, cvalue: string, exdays: any) {
   const d = new Date()
   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
   const expires = "expires=" + d.toUTCString()
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export function checkCookie() {
   let user: string | null = getCookie("username")
   if (user != "") {
      alert("Welcome again " + user)
   } else {
      user = prompt("Please enter your name:", "")
      if (user != "" && user != null) {
         setCookie("username", user, 365)
      }
   }
}

export function updateToken(name: string, value: string) {
   setCookie(name, value, "")
   window.location.reload()
}

// pass element id here to scroll to
export const scrollToView = (elementId: string) => {
   document
      .getElementById(elementId)
      ?.scrollIntoView({ behavior: "smooth", block: "center" })
}

export const handleEdit = async (
   origData: any,
   url: string,
   token: string,
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
export const transformContent = (content: any, search: any) => {
   // convert obj to dot
   // @ts-ignore
   const flaten1 = flattenObj(content)
   // convert to array of objects
   const flaten2 = convertToArray(flaten1)
   // generate columns for search
   const columns = flaten2.map((e) => {
      const res = Object.keys(e)
      return res.toString().replace(/.[0-9]/g, "")
   })
   // search options
   const options = {
      includeScore: true,
      useExtendedSearch: true,
      includeMatches: true,
      ignoreLocation: true,
      findAllMatches: true,
      threshold: 0,
      isCaseSensitive: false,
      minMatchCharLength: 1,
      keys: columns,
   }
   // search func
   const fuse = new Fuse([content], options)
   const result = fuse.search(search || "")
   // convert as key value pairs
   const result2 =
      result &&
      result[0]?.matches
         ?.map((e: any) => {
            return { [`${e.key}`]: e.value }
         })
         .map((e: any) => deepen(e))
   // display the result of search
   const data = search ? result2 : { content }
   return data
}

export function toggleOpenState(bool: boolean, setOpen: any, expandBody: any) {
   setOpen(bool)
   expandBody(bool)
}

export const getJsonUrl = (customDomain = "") => {
   console.log(customDomain, "customdomain")
   // return "https://kfg6bckb-dev.preview.stage.zesty.io/?toJSON"
   if (
      window.location.href.match(/(:[0-9]+||localhost)/) !== null &&
      customDomain == ""
   ) {
      return window.location.href + "?toJSON"
   }
   return customDomain.replace(/\/$/, "") + window.location.pathname + "?toJSON"
   // return customDomain + "/?toJSON"
}

export const generatedScript = ({ content, tags }: any) => {
   console.log(content, "contentdata")
   console.log(content?.content?.meta?.web?.url || "")
   return `<head>

   <!-- Auto-generated Head Tags -->
   <title>${content?.meta?.web?.seo_meta_title}</title>
   <link rel="canonical" href="${content?.meta?.web?.url}" />

   <meta name="description" content="${content?.meta?.web?.seo_meta_description}" />
   <meta name="keywords" content="${content?.meta?.web?.seo_meta_keywords}" />
   <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
   <meta property="og:type" content="website" />
   <meta name="twitter:card" content="summary">
   <meta property="og:title" content="${content?.meta?.web?.seo_meta_title}" />
   <meta name="twitter:title" content="${content?.meta?.web?.seo_meta_title}">
   <meta property="og:description" content="${
      content?.meta?.web?.seo_meta_description
   }" />
   <meta property="twitter:description" content="${
      content?.meta?.web?.seo_meta_description
   }" />
  <meta property="og:url" content="${content?.meta?.web?.url}" />
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="${content?.meta?.model_alternate_name}" />


  <!-- Custom Head Tags -->
  ${tags
     ?.map((e: any) => {
        return `<${e?.type}   ${Object?.entries(e?.attributes)
           .map((e: any) => `${e && e[0]}="${e && e[1]}"`)
           .join(" ")} />`
     })
     .join("\n")}

</head>
`
}

export const getPageMetaTags = (headtags: any) => {
   const res = headtags
      ?.filter((e: any) => {
         return e.resourceZUID.charAt(0) == "7"
      })
      .sort(function (a: any, b: any) {
         // @ts-ignore
         return new Date(b.updatedAt) - new Date(a.updatedAt)
      })
   return res
}

export const getGlobalMetaTags = (headtags: any) => {
   const res = headtags
      ?.filter((e: any) => {
         return e.resourceZUID.charAt(0) == "8"
      })
      .sort(function (a: any, b: any) {
         // @ts-ignore
         return new Date(b.updatedAt) - new Date(a.updatedAt)
      })
   return res
}

export const fetchWrapperOptions = () => {
   const dev = {
      sitesServiceURL: "https://svc.dev.zesty.io/sites-service/",
      instancesAPIURL: ".api.dev.zesty.io/v1",
      authAPIURL: "https://auth.api.dev.zesty.io",
      accountsAPIURL: "https://accounts.api.dev.zesty.io/v1",
      mediaAPIURL: "https://svc.dev.zesty.io",
   }

   const prod = {}

   if (process.env.PRODUCTION === "false") {
      return dev
   } else {
      return prod
   }
}

export const getUserAppSID = () => {
   const prod = getCookie("APP_SID")
   const dev = getCookie("DEV_APP_SID")

   if (process.env.PRODUCTION === "false") {
      return dev
   } else {
      return prod
   }
}

export const get_elements_by_inner = (
   key: any,
   val: any,
   openModal: any,
   setEditData: any,
   setkey: any,
   setisWysiwyg: (e: any) => void,
   editMode: boolean,
) => {
   const newVal: string = val.replace(/<[^>]*>?/gm, "")

   const elems: any = [
      // @ts-ignore
      ...document.getElementsByTagName("p"),
      // @ts-ignore
      ...document.getElementsByTagName("div"),
      // @ts-ignore
      ...document.getElementsByTagName("h1"),
      // @ts-ignore
      ...document.getElementsByTagName("h2"),
      // @ts-ignore
      ...document.getElementsByTagName("h3"),
      // @ts-ignore
      ...document.getElementsByTagName("h4"),
      // @ts-ignore
      ...document.getElementsByTagName("h5"),
      // @ts-ignore
      ...document.getElementsByTagName("h6"),
      // @ts-ignore
      ...document.getElementsByTagName("a"),
   ]

   elems.forEach(async (elem: any) => {
      const prevVal = localStorage.getItem("preVal")?.replaceAll("EDIT", "")
      const prevKey = localStorage.getItem("preKey")

      if (
         elem.textContent === newVal ||
         (elem.textContent.trim() === prevVal?.trim() && key == prevKey)
      ) {
         if (editMode) {
            elem.innerHTML = `${val}`
            elem.style.position = "relative"
         }

         const btn = document.createElement("button")
         btn.innerHTML = "EDIT"
         btn.style.position = "absolute"
         btn.style.cursor = "pointer"
         btn.style.top = "-1rem"
         btn.style.right = "-1rem"
         btn.style.fontSize = "10px"
         btn.style.borderRadius = "5px"
         btn.style.height = "2rem"
         btn.style.width = "3rem"
         btn.style.color = "#fff"
         btn.style.background = "orange"
         btn.style.display = "flex"
         btn.style.justifyItems = "center"
         btn.style.justifyContent = "center"
         btn.style.textAlign = "center"
         btn.style.alignItems = "center"

         btn.onclick = async function () {
            // checker if value is richtext or string
            if (val.includes("<")) {
               setisWysiwyg(true)
            } else {
               setisWysiwyg(false)
            }
            if (editMode) {
               setkey(key)
               setEditData(val)
               localStorage.setItem("preVal", elem.innerText)
               localStorage.setItem("preKey", key)

               openModal()
            }
         }

         elem.onmouseover = function () {
            if (editMode) {
               elem.style.border = "2px orange dashed"
               elem.appendChild(btn)
            }
         }
         elem.onmouseleave = function () {
            if (editMode) {
               elem.style.border = "2px solid transparent"
               elem.removeChild(btn)
            }
         }
      }
   })
}
