/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { dummydata } from "constants/index"
import Fuse from "fuse.js"
import { ContentViewer, MetaViewer, JsonDataViewer } from "views/index"
import { Headers, Loader } from "components/index"
import * as helper from "utils/index"
import { getPageData } from "services/index"
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
import { useDarkMode } from "hooks"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import { Helmet } from "react-helmet"

// list of tabs to render
const tabList = [
   { id: 1, label: "Content Viewer", value: "Content Viewer" },
   { id: 2, label: "Meta Viewer", value: "Meta Viewer" },
   { id: 3, label: "Json Data Viewer", value: "Json Data Viewer" },
]

// dom access highlight function
const expandBody = (bool: boolean) => {
   let body: any = document.querySelector("body")
   body.style.marginLeft = bool ? "40vw" : "0"
   body.style.transition = "margin 250ms ease"
   let ze: any = document.getElementById("zestyExplorer")
   ze.style.left = bool ? "0" : "-40vw"
}

// renanme content to contentData
const ZestyExplorerBrowser = ({ pageData, response, contentData, children }: any) => {
   const content = contentData || dummydata
   const [currentTab, setcurrentTab] = React.useState("Content Viewer")
   const [search, setSearch] = React.useState()
   const [verifySuccess, setverifySuccess] = React.useState("")
   const [verifyFailed, setverifyFailed] = React.useState("")
   const [instances, setinstances] = React.useState([])
   const [models, setmodels] = React.useState("")
   const [views, setviews] = React.useState("")
   const [loading, setloading] = React.useState(false)
   // for loading
   const [time, settime] = React.useState(0)

   // for loading
   React.useEffect(() => {
      const timer = setTimeout(() => {
         if (time > 0) {
            settime(time - 1)
         }
      }, 1000)

      return () => clearTimeout(timer)
   })

   // convert obj to dot
   // @ts-ignore
   const flaten1 = helper.flattenObj(content)
   // convert to array of objects
   const flaten2 = helper.convertToArray(flaten1)
   // generate columns for search
   const columns = flaten2.map((e) => {
      const res = Object.keys(e)
      return res.toString().replace(/.[0-9]/g, "")
   })
   // search options
   const options = {
      includeScore: true,
      useExtendedSearch: true,
      includeMatches: true,
      ignoreLocation: true,
      findAllMatches: true,
      threshold: 0,
      isCaseSensitive: false,
      minMatchCharLength: 1,
      keys: columns,
   }
   // search func
   const fuse = new Fuse([content], options)
   const result = fuse.search(search || "")
   // convert as key value pairs
   const result2 =
      result &&
      result[0]?.matches
         ?.map((e: any) => {
            return { [`${e.key}`]: e.value }
         })
         .map((e: any) => helper.deepen(e))
   // display the result of search
   const data = search ? result2 : { content }
   console.log(pageData, "This the Pagedata")

   // FetchWrapper Section
   const instanceZUID = helper.getCookie("INSTANCE_ZUID") || "8-c4eec0b7d4-8lx0ch"
   const userAppSID =
      helper.getCookie("APP_SID") || "f3555fb52bdd3c6e3b3ff5421b74b740bf41f4e5"
   // const instanceZUID = ""
   // const userAppSID = ""

   // @ts-ignore
   const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID)

   const verifyUser = async () => {
      setloading(true)
      const res = await ZestyAPI.verify()
      res.code === 200 && setverifySuccess(res.meta)
      res.code !== 200 && setverifyFailed(res.error)
      setloading(false)
   }

   const getInstances = async () => {
      const res = await ZestyAPI.getInstances()
      !res.error && setinstances(res)
      res.error && console.log(res, "instance failed")
   }
   const getModels = async () => {
      const res = await ZestyAPI.getModels()
      !res.error && setmodels(res)
      res.error && console.log(res, "models failed")
   }
   const getViews = async () => {
      const res = await ZestyAPI.getViews()
      !res.error && setviews(res)
      res.error && console.log(res, "views failed")
   }

   React.useEffect(() => {
      verifyUser()
      getInstances()
      getModels()
      getViews()
   }, [])

   React.useEffect(() => {
      console.log(instances, views, models, "datas")
   }, [instances, models, views])

   // show loading
   if (loading && !verifyFailed && !verifySuccess) {
      return (
         <Box sx={verifyUserPrompt}>
            <h1>Loading</h1>
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
               <ContentViewer data={data} search={search} setSearch={setSearch} />
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

   // check if content is available
   React.useEffect(() => {
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
