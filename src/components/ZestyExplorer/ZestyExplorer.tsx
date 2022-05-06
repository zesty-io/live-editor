/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { dummydata, tabList } from "constants/index"
import { ContentViewer, MetaViewer, JsonDataViewer } from "views/index"
import { Headers, Loader } from "components/index"
import * as helper from "utils/index"
import { fetchData, fetchJSON, getPageData } from "services/index"
import {
   buttonStyles,
   containerStyle,
   verifyUserPrompt,
   zestyStyles,
   zestyWrapper,
} from "./styles"
import { TabContainer } from "components/Tabs"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import getTheme from "theme/index"
import { useDarkMode, useFetchWrapper } from "hooks"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import { Helmet } from "react-helmet"

// dom access highlight function
const expandBody = (bool: boolean) => {
   const body: any = document.querySelector("body")
   body.style.marginLeft = bool ? "40vw" : "0"
   body.style.transition = "margin 250ms ease"
   const ze: any = document.getElementById("zestyExplorer")
   ze.style.left = bool ? "0" : "-40vw"
}

// renanme content to contentData
const ZestyExplorerBrowser = ({
   pageData,
   response,
   contentData,
   children,
   jsonData,
}: any) => {
   const content = contentData || dummydata
   const [currentTab, setcurrentTab] = React.useState("Content Viewer")
   const [search, setSearch] = React.useState()
   // this is the data for editing request
   const [metaData, setMetaData] = React.useState([])
   // for loading of tabs
   const [time, settime] = React.useState(0)
   // const instanceZUID = helper.getCookie("INSTANCE_ZUID") || "8-c2c78385be-s38gqk"
   const userAppSID = helper.getCookie("APP_SID") || process.env.ZESTY_TEST_APP_SID
   const token = helper.getCookie("APP_SID") || process.env.ZESTY_TEST_APP_SID

   // jsondata
   // fetchwarpper

   const itemZUID = jsonData.data.meta.zuid
   const modelZUID = jsonData.data.meta.model.zuid
   const instanceZUID = helper.headerZUID(jsonData.response) || "8-c2c78385be-s38gqk"
   // get the instance view models  on initial load
   const {
      loading,
      verifyFailed,
      verifySuccess,
      instances,
      views,
      models,
   } = useFetchWrapper(userAppSID, instanceZUID)

   const url = `https://${instanceZUID}.api.zesty.io/v1/content/models/${modelZUID}/items/${itemZUID}`

   // this is for json data viewer
   const data = helper.transformContent(content, search)
   console.log(pageData, "This the Pagedata")

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
         <Box sx={verifyUserPrompt}>
            <Loader />
         </Box>
      )
   }

   // show failed login prompt
   if (!verifySuccess) {
      return (
         <Box sx={verifyUserPrompt}>
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
         <Headers children={children} content={content} response={response} />
         <TabContainer
            setcurrentTab={setcurrentTab}
            tabList={tabList}
            settime={() => settime(2)}
         />
         <div style={{ position: "relative" }}>
            {time > 0 && <Loader />}
            {currentTab === "Content Viewer" && (
               <ContentViewer
                  metaData={metaData}
                  data={data}
                  search={search}
                  setSearch={setSearch}
                  url={url}
                  token={token}
               />
            )}
            {currentTab === "Meta Viewer" && (
               <MetaViewer response={response} content={contentData} />
            )}
            {currentTab === "Json Data Viewer" && (
               <JsonDataViewer data={data} search={search} setSearch={setSearch} />
            )}
         </div>
      </Box>
   )
}

// Main ZESTY EXPLORER
export const ZestyExplorer = ({ content = {} }: any) => {
   const jsonUrl = "https://qzp3zx5t-dev.webengine.zesty.io/?toJSON"
   const [jsonData, setJsonData] = React.useState([])
   const token = helper.getCookie("APP_SID") || process.env.ZESTY_TEST_APP_SID
   const [open, setOpen] = React.useState(false)
   const [pageData, setPageData] = React.useState<any>("")
   const [response, setResponse] = React.useState<any>("")
   const [themeMode, themeToggler, mountedComponent] = useDarkMode()

   console.log(themeMode, mountedComponent)

   const getData = async () => {
      const { data, response } = await getPageData()
      data && setPageData(data)
      response && setResponse(response)
   }

   const getJsonData = async () => {
      await fetchJSON(jsonUrl, setJsonData, token)
   }
   // check if content is available
   React.useEffect(() => {
      getJsonData()
      if (content && Object.keys(content).length === 0) {
         getData()
      } else {
         setPageData(content)
      }
   }, [])

   const searchObject = { ...pageData }
   // unset navigations for faster search
   delete searchObject.navigationTree
   // custom nav tree building
   delete searchObject.navigationCustom

   if (!helper.canUseDOM()) {
      return null
   }

   function toggleOpenState(bool: boolean) {
      setOpen(bool)
      expandBody(bool)
   }

   return (
      <div id={"zestyExplorer"} style={zestyWrapper}>
         <Helmet>
            <script src="https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.min.js" />
         </Helmet>
         <ThemeProvider theme={getTheme("light", themeToggler)}>
            <CssBaseline />
            {/* ZESTY LOGO  bottom right*/}
            {!open && (
               <button
                  type="button"
                  onClick={() => toggleOpenState(true)}
                  style={buttonStyles}
               >
                  <img
                     src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
                     width="32px"
                     height="32px"
                     alt="Zesty.io Logo"
                  />
                  <span style={zestyStyles}>Compass</span>
               </button>
            )}

            {open && (
               <Box>
                  <ZestyExplorerBrowser
                     response={response}
                     pageData={pageData}
                     contentData={searchObject}
                     jsonData={jsonData}
                  >
                     <Button
                        onClick={() => toggleOpenState(false)}
                        variant="outlined"
                        size="small"
                     >
                        <CloseFullscreenIcon />
                     </Button>
                  </ZestyExplorerBrowser>
               </Box>
            )}
         </ThemeProvider>
      </div>
   )
}
