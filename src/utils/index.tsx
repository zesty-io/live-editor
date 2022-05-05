import { Box } from "@mui/system"
import { dummycontent } from "constants/index"
import React from "react"
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
   for (const key of Object?.keys(obj || {})) {
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
   let name = cname + "="
   let ca = document.cookie.split(";")
   for (var i = 0; i < ca.length; i++) {
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
   let d = new Date()
   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
   let expires = "expires=" + d.toUTCString()
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export function checkCookie() {
   let user: string | null = getCookie("username")!
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

export const scrollToView = (elementId: string) => {
   document
      .getElementById(elementId)
      ?.scrollIntoView({ behavior: "smooth", block: "center" })!
}

export const handleEdit = async (content: any) => {
   const instanceZUID = "8-c2c78385be-s38gqk"
   const url = `https://${instanceZUID}.api.zesty.io/v1/content/models/${content.meta.model.zuid}/items/${content.meta.zuid}`

   // const data = transFromData(e.updated_src.content)

   // const web = {
   //    metaDescription: content.meta.web.seo_meta_description,
   //    metaTitle: content.meta.web.seo_meta_title,
   //    metaLinkText: content.meta.web.seo_link_text,
   //    metaKeywords: content.meta.web.seo_meta_keywords,
   //    parentZUID: content.meta.zuid || "0",
   //    pathPart: content.meta.web.fragment,
   //    path: content.meta.web.uri,
   //    sitemapPriority: content.meta.web.sitemap_priority,
   //    canonicalTagMode: content.meta.web.sitemap_priority,
   //    canonicalQueryParamWhitelist: content.meta.web.canonical_query_param_whitelist,
   //    canonicalTagCustomValue: content.meta.web.canonical_tag_custom_value,
   //    createdByUserZUID: content.meta.zuid,
   // }
   const web = {
      version: 8,
      versionZUID: "9-8cafc0e7a1-mt987k",
      metaDescription: "",
      metaTitle: "Homepage",
      metaLinkText: "Homepage",
      metaKeywords: null,
      parentZUID: "0",
      pathPart: "zesty_home",
      path: "/",
      sitemapPriority: -1,
      canonicalTagMode: 1,
      canonicalQueryParamWhitelist: null,
      canonicalTagCustomValue: null,
      createdByUserZUID: "5-c2a5c791e3-krq7ts",
      createdAt: "2022-05-05T16:20:15Z",
      updatedAt: "2022-05-05T16:20:15Z",
   }
   // const meta = {
   //    ZUID: content.meta.zuid,
   //    masterZUID: content.meta.zuid,
   //    contentModelZUID: content.meta.model.zuid,
   //    contentModelName: content.meta.model.name,
   //    sort: content.meta.sort,
   //    listed: content.meta.listed,
   //    version: content.meta.version,
   //    langID: content.meta.langID,
   //    createdAt: content.meta.createdAt,
   //    updatedAt: content.meta.updatedAt,
   // }
   const meta = {
      ZUID: "7-f4f99e80ec-pq3q7s",
      zid: 502,
      masterZUID: "7-f4f99e80ec-pq3q7s",
      contentModelZUID: "6-8eb48d80ec-8ggrzt",
      contentModelName: null,
      sort: 0,
      listed: true,
      version: 8,
      langID: 1,
      createdAt: "2020-11-06T23:57:12Z",
      updatedAt: "2022-05-05T16:20:15Z",
   }

   const originalData: any = dummycontent
   // remove not necessary fields
   // @ts-ignore
   delete originalData.meta
   delete originalData.zestyBaseURL
   delete originalData.zestyInstanceZUID
   delete originalData.zestyProductionMode

   const data = originalData

   const payload = {
      data,
      meta,
      web,
   }

   const token = "f3555fb52bdd3c6e3b3ff5421b74b740bf41f4e5"

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
         window.location.reload()
      })
   res.status !== 200 && res.json().then((e) => console.log(e, "err"))
}
