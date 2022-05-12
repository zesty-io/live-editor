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
