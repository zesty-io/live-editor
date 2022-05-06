export * from "./useFetchWrapper"

import React from "react"
export const useDarkMode = () => {
   // set the initial theme from localstorage or 'light'
   const [themeMode, setTheme] = React.useState(
      window.localStorage.getItem("themeMode") || "light",
   )

   const [mountedComponent, setMountedComponent] = React.useState(false)

   const setMode = (mode: any) => {
      try {
         window.localStorage.setItem("themeMode", mode)
      } catch {
         /* do nothing */
      }

      setTheme(mode)
   }

   const themeToggler = () => {
      themeMode === "light" ? setMode("dark") : setMode("light")
   }

   React.useEffect(() => {
      try {
         const localTheme = window.localStorage.getItem("themeMode")
         localTheme ? setTheme(localTheme) : setMode("light")
      } catch {
         setMode("light")
      }

      setMountedComponent(true)
   }, [])

   return [themeMode, themeToggler, mountedComponent]
}
