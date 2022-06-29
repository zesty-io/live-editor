import { MainInput, Subheaders } from "components"
import React from "react"
import { fetchJSON } from "services"
import Fuse from "fuse.js"
import { NavTable } from "./NavigatorTable"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

interface Props {
   content: any
   theme: any
   response: any
   setloading: any
   token: string
}

// test url
// const url = "https://kfg6bckb-dev.webengine.zesty.io/-/headless/routing.json"

export const NavigatorTab = ({ content, theme, response, token, setloading }: Props) => {
   console.log(content, theme, response)
   const [data, setdata] = React.useState([])
   const [search, setsearch] = React.useState("")

   const handleJsonData = (data: any) => {
      setdata(data)
   }

   const url = window.location.origin + "/-/headless/routing.json"
   const fetchJsonData = async () => {
      // setloading(true)
      const res = await fetchJSON(url, setdata, token, setloading)
      res && handleJsonData(res.data)
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
      keys: ["title", "uri", "path_part"],
   }

   const fuse = new Fuse(data, options)
   const result = fuse.search(search)

   React.useEffect(() => {
      data.length === 0 && fetchJsonData()
   }, [data])

   return (
      <Box>
         <Subheaders response={response} content={content} theme={theme} />
         <Box paddingX={4}>
            <Box
               sx={{
                  display: "flex",
                  textAlign: "center",
                  width: "100%",
                  justifyContent: "center",
                  justifyItems: "center",
               }}
            >
               <Typography
                  paddingTop={2}
                  paddingBottom={2}
                  sx={{
                     fontSize: "24px",
                     fontWeight: "bold",
                     color: theme.palette.primary.main,
                  }}
               >
                  Site Navigator
               </Typography>
            </Box>
            <MainInput
               theme={{
                  main: theme.palette.primary.main,
                  white: theme.palette.common.white,
                  boxShadow: theme.palette.secondary.blueShadow,
                  border: theme.palette.secondary.whiteSmoke,
               }}
               name={" "}
               autoFocus={true}
               key={1}
               label={" "}
               required={false}
               value={search}
               onChange={(e: any) => setsearch(e.target.value)}
               placeholder={"Search for title, paths ..."}
            />
            <NavTable
               theme={theme}
               data={search?.length === 0 ? data : result}
               search={search}
            />
         </Box>
      </Box>
   )
}
