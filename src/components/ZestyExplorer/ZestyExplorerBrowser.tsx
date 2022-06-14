import { dummydata, tabList } from "constants"
import * as helper from "utils"
import React from "react"
import { useFetchWrapper } from "hooks"
import { fetchData } from "services"
import { Box } from "@mui/material"
import { NewLoader as Loader } from "components"
import { containerStyle } from "./styles"
import { Headers } from "components"
import { CodeHelperTab, EditTab, HealhTab, JsonDataViewerTab, MetaViewerTab } from "views"
import { useTheme } from "@mui/material/styles"
import { LoginPrompt } from "components/Ui"

export const ZestyExplorerBrowser = ({
   pageData,
   response,
   contentData,
   children,
   jsonData,
   getData,
}: any) => {
   const [createHeadtag, setcreateHeadtag] = React.useState(false)
   const content = contentData || dummydata
   const [currentTab, setcurrentTab] = React.useState(0)
   const [search, setSearch] = React.useState()
   // this is the data for editing request
   const [metaData, setMetaData] = React.useState([])
   // for loading of tabs
   const [time, settime] = React.useState(0)

   const [currentScroll, setcurrentScroll] = React.useState(0)

   const scrollEvent = (e: any) => {
      const target = e.target as HTMLTextAreaElement
      setcurrentScroll(target.scrollTop)
      console.log("Current scroll position:", target.scrollTop)
   }

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

   const HeaderProps = {
      content,
      response,
      setcurrentTab,
      tabList,
      settime: () => settime(2),
   }

   const EditProps = {
      content,
      theme,
      metaData,
      data,
      url,
      token,
      scrollPos: currentScroll,
      scrollEvent,
      getData,
      setloading: () => settime(2),
   }

   const MetaProps = {
      onClose: () => setcreateHeadtag(false),
      resourceZUID: itemZUID,
      instanceZUID,

      createHeadtag,
      theme,
      response,
      metaData,
      content,
      token,
      url,
      getData,
      createHeadtagModal: () => setcreateHeadtag(true),
      setloading: () => settime(2),
   }

   const JSONProps = {
      data,
      search,
      setSearch,
      theme,
      content,
   }

   const CodeHelperProps = {
      content,
      theme,
      metaData,
      data,
      url,
      token,
      scrollPos: currentScroll,
      scrollEvent,
   }
   // const CreateHeadTagProps = {
   //    onClose: () => setcreateHeadtag(false),
   //    resourceZUID: itemZUID,
   //    instanceZUID,
   //    token,
   //    setloading: () => settime(2),
   //    getData,
   // }

   const HealthTabProps = {
      content,
      theme,
   }
   // show loading
   if (loading && !verifyFailed && !verifySuccess) {
      return (
         <Box sx={containerStyle}>
            <Loader />
         </Box>
      )
   }

   // show failed login prompt
   if (!verifySuccess) {
      return (
         <Box sx={containerStyle}>
            <LoginPrompt />
         </Box>
      )
   }

   return (
      <Box sx={containerStyle}>
         {/* {createHeadtag && <CreateHeadTagModal {...CreateHeadTagProps} />} */}

         <Headers {...HeaderProps}>{children}</Headers>
         <Box sx={{ position: "" }}>
            {time > 0 && <Loader />}
            {currentTab === 0 && <EditTab {...EditProps} />}
            {currentTab === 1 && <MetaViewerTab {...MetaProps} />}
            {currentTab === 2 && <JsonDataViewerTab {...JSONProps} />}
            {currentTab === 3 && <CodeHelperTab {...CodeHelperProps} />}
            {currentTab === 4 && <HealhTab {...HealthTabProps} />}
         </Box>
      </Box>
   )
}
