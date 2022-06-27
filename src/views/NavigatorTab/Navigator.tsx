import { MainInput, Subheaders } from "components"
import React from "react"
import { fetchJSON } from "services"
import Fuse from "fuse.js"
import { NavTable } from "./NavigatorTable"
import { Box } from "@mui/system"

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
      keys: ["title", "uri"],
   }
   // search func
   const fuse = new Fuse(data, options)
   const result = fuse.search(search)

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
         <Box paddingX={10} paddingTop={4} sx={{}}>
            <MainInput
               theme={{
                  main: theme.palette.primary.main,
                  white: theme.palette.common.white,
                  boxShadow: theme.palette.secondary.blueShadow,
                  border: theme.palette.secondary.whiteSmoke,
               }}
               name={"Search"}
               autoFocus={true}
               key={1}
               label={"Search"}
               required={false}
               value={search}
               onChange={(e: any) => setsearch(e.target.value)}
               placeholder={"Search for title, paths ..."}
            />
         </Box>
         <Box paddingX={4}>
            <NavTable
               theme={theme}
               data={search.length === 0 ? data : result}
               search={search}
            />
         </Box>
      </>
   )
}
