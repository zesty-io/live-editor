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
