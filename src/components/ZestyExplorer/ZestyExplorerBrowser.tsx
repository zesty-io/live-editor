import { tabList } from "constants"
import * as helper from "utils"
import React from "react"
import { useFetchWrapper } from "hooks"
import { fetchData } from "services"
import { Box } from "@mui/material"
import { containerStyle } from "./styles"
import { Headers, LocalAuthForm } from "components"
import {
   CodeHelperTab,
   EditTab,
   HealhTab,
   JsonDataViewerTab,
   MetaViewerTab,
   NavigatorTab,
} from "views"
import { useTheme } from "@mui/material/styles"
import { LoginPrompt } from "components/Ui"
import { NewLoader } from "components/Loader/NewLoader"
import { JsonData } from "types"

interface Props {
   pageData: any
   response: any
   children: any
   jsonData: JsonData
   getData: any
   token: string | undefined
   settoken: (e: string | undefined) => void
   isLocalContent: boolean
}
export const ZestyExplorerBrowser = ({
   pageData,
   response,
   children,
   jsonData,
   getData,
   token,
   settoken,
   isLocalContent,
}: Props) => {
   const theme = useTheme()
   const [localLoading, setlocalLoading] = React.useState(false)
   const [localLogin, setlocalLogin] = React.useState(false)
   const [modal, setmodal] = React.useState(false)
   const content = pageData
   const [currentTab, setcurrentTab] = React.useState<string | null>("")
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

   const userAppSID = token
   const itemZUID = jsonData?.data?.meta?.zuid
   const modelZUID = jsonData?.data?.meta?.model?.zuid
   const instanceZUID = helper.headerZUID(jsonData.res)

   // get the instance view models  on initial load
   const { loading, verifyFailed, verifySuccess, instances, views, models } =
      useFetchWrapper(userAppSID, instanceZUID)

   const url = `https://${instanceZUID}.api.zesty.io/v1/content/models/${modelZUID}/items/${itemZUID}`

   // this is for json data viewer
   const data = helper.transformContent(content, search)

   const getFinalData = async () => {
      await fetchData(url, setMetaData, token)
   }
   // ????????????????
   React.useEffect(() => {
      console.log(instances, views, models, jsonData, "datas")
   }, [instances, models, views, jsonData])

   React.useEffect(() => {
      getFinalData()
   }, [url, token])

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
      modal,
      token,
      setlocalLogin,
      settoken,
      isLocalContent,
   }

   const EditProps = {
      content,
      theme,
      metaData,
      data,
      url,
      token,
      getFinalData,
      scrollPos: currentScroll,
      scrollEvent,
      getData,
      setloading: () => settime(2),
      response,
      modal,
      onClose: () => setmodal(false),
      openModal: () => setmodal(true),
   }

   const MetaProps = {
      onClose: () => setmodal(false),
      resourceZUID: itemZUID,
      instanceZUID,
      modal,
      theme,
      response,
      metaData,
      content,
      token,
      url,
      getData,
      createHeadtagModal: () => setmodal(true),
      setloading: () => settime(2),
   }

   const JSONProps = {
      data,
      search,
      setSearch,
      theme,
      content,
      response,
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
      response,
   }

   const HealthTabProps = {
      content,
      theme,
      response,
   }
   const NavigatorProps = {
      content,
      theme,
      response,
      setloading: () => settime(2),
      token,
      isLocalContent,
   }

   if (localLogin) {
      return (
         <Box sx={containerStyle}>
            <LocalAuthForm
               settoken={settoken}
               setloading={setlocalLoading}
               setlocalLogin={setlocalLogin}
            />
         </Box>
      )
   }

   // show loading
   if (loading && !verifyFailed && !verifySuccess) {
      return (
         <Box sx={containerStyle}>
            <NewLoader />
         </Box>
      )
   }

   // show failed login prompt
   if (
      Object.keys(pageData).length === 0 &&
      Object.keys(jsonData.data).length === 0 &&
      !verifySuccess
   ) {
      return (
         <Box sx={containerStyle}>
            <LoginPrompt />
         </Box>
      )
   }

   console.log(pageData, "page:::")

   const switchView = (name: string | null) => {
      switch (name) {
         case "Edit":
            return <EditTab {...EditProps} />
         case "SEO":
            return <MetaViewerTab {...MetaProps} />
         case "Navigator":
            return <NavigatorTab {...NavigatorProps} />
         case "Health":
            return <HealhTab {...HealthTabProps} />
         case "Code Helper":
            return <CodeHelperTab {...CodeHelperProps} />
         case "JSON":
            return <JsonDataViewerTab {...JSONProps} />
         default:
            return !token ? (
               <NavigatorTab {...NavigatorProps} />
            ) : (
               <EditTab {...EditProps} />
            )
      }
   }
   return (
      <Box sx={containerStyle}>
         <Headers {...HeaderProps}>{children}</Headers>
         <Box sx={{ position: "" }}>
            {(time > 0 || localLoading) && <NewLoader />}
            {switchView(currentTab)}
         </Box>
      </Box>
   )
}
