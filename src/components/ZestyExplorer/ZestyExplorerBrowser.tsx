import { dummydata } from "constants/index"
import * as helper from "utils/index"
import React from "react"
import { useFetchWrapper } from "hooks"
import { fetchData } from "services"
import { Box, Button, Typography } from "@mui/material"
import { Loader } from "components"
import { containerStyle, loginPromp } from "./styles"
import { Headers } from "components"
import { tabList } from "constants/index"
import { ContentViewer, JsonDataViewer, MetaViewer } from "views"
import { useTheme } from "@mui/material/styles"

export const ZestyExplorerBrowser = ({
   pageData,
   response,
   contentData,
   children,
   jsonData,
}: any) => {
   const content = contentData || dummydata
   const [currentTab, setcurrentTab] = React.useState("Edit")
   const [search, setSearch] = React.useState()
   // this is the data for editing request
   const [metaData, setMetaData] = React.useState([])
   // for loading of tabs
   const [time, settime] = React.useState(0)
   const userAppSID = helper.getCookie("APP_SID")
   const token = userAppSID
   const itemZUID = jsonData?.data?.meta?.zuid
   const modelZUID = jsonData?.data?.meta?.model?.zuid
   const instanceZUID = helper.headerZUID(jsonData.res)

   const theme = useTheme()
   console.log(jsonData, "jsondata")
   // get the instance view models  on initial load
   const { loading, verifyFailed, verifySuccess, instances, views, models } =
      useFetchWrapper(userAppSID, instanceZUID)

   const url = `https://${instanceZUID}.api.zesty.io/v1/content/models/${modelZUID}/items/${itemZUID}`

   // this is for json data viewer
   const data = helper.transformContent(content, search)
   console.log(pageData, url, "This the Pagedata")

   const getFinalData = async () => {
      await fetchData(url, setMetaData, token)
   }
   React.useEffect(() => {
      console.log(instances, views, models, jsonData, "datas")
   }, [instances, models, views, jsonData])

   React.useEffect(() => {
      getFinalData()
   }, [])

   // for loading of tabs
   React.useEffect(() => {
      const timer = setTimeout(() => {
         if (time > 0) {
            settime(time - 1)
         }
      }, 1000)

      return () => clearTimeout(timer)
   })

   // show loading
   if (loading && !verifyFailed && !verifySuccess) {
      return (
         <Box sx={loginPromp}>
            <Loader />
         </Box>
      )
   }

   // show failed login prompt
   if (!verifySuccess) {
      return (
         <Box sx={loginPromp}>
            <h1>Please Login</h1>
            <Button
               href={`https://accounts.zesty.io/login`}
               variant="contained"
               color="secondary"
               size="small"
            >
               Sign in to Zesty.io
            </Button>
         </Box>
      )
   }

   return (
      <Box sx={containerStyle}>
         <Headers
            content={content}
            response={response}
            setcurrentTab={setcurrentTab}
            tabList={tabList}
            settime={() => settime(2)}
         >
            {children}
         </Headers>
         <Box sx={{ background: "#fff", width: "100%" }}>
            <Typography
               sx={{ fontSize: "14px", whiteSpace: "normal" }}
               color={theme.palette.common.black}
               component={"h6"}
            >
               Browsing item <strong> {content?.meta?.web?.seo_link_text} </strong>
               from the <strong>{content?.meta?.model_alternate_name} </strong>
               Content Model
            </Typography>
         </Box>
         <Box sx={{ position: "relative" }}>
            {time > 0 && <Loader />}
            {currentTab === "Edit" && (
               <ContentViewer metaData={metaData} data={data} url={url} token={token} />
            )}
            {currentTab === "SEO/Meta" && (
               <MetaViewer response={response} content={contentData} />
            )}
            {currentTab === "JSON" && (
               <JsonDataViewer data={data} search={search} setSearch={setSearch} />
            )}
            {currentTab === "Code Help" && (
               <JsonDataViewer data={data} search={search} setSearch={setSearch} />
            )}
         </Box>
      </Box>
   )
}
