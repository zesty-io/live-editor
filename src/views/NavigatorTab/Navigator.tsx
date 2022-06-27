import { Subheaders } from "components"
import React from "react"
import { fetchJSON } from "services"
import Fuse from "fuse.js"
import { NavTable } from "./NavigatorTable"

interface Props {
   content: any
   theme: any
   response: any
   setloading: any
   token: string
}
export const NavigatorTab = ({ content, theme, response, token, setloading }: Props) => {
   console.log(content, theme, response)
   const [data, setdata] = React.useState([])
   const [search, setsearch] = React.useState("")

   const handleJsonData = (data: any) => {
      setdata(data)
   }
   const url = "https://kfg6bckb-dev.webengine.zesty.io/-/headless/routing.json"
   const fetchJsonData = async () => {
      // setloading(true)
      const res = await fetchJSON(url, setdata, token, setloading)
      !res.error && handleJsonData(res.data)
   }

   const options = {
      includeScore: true,
      useExtendedSearch: true,
      includeMatches: true,
      ignoreLocation: true,
      findAllMatches: true,
      threshold: 0,
      isCaseSensitive: false,
      minMatchCharLength: 1,
      keys: ["author", "uri"],
   }
   // search func
   const fuse = new Fuse(data, options)
   const result = fuse.search(search || "")
   React.useEffect(() => {
      fetchJsonData()
   }, [])

   React.useEffect(() => {
      console.log(result, 2222)
      console.log(data, 3333)
   }, [data, result])

   return (
      <>
         <Subheaders response={response} content={content} theme={theme} />
         <input
            type="text"
            value={search}
            onChange={(e: any) => setsearch(e.target.value)}
         />
         <NavTable />
      </>
   )
}
