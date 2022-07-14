import React from "react"
import { AppBar } from "@mui/material"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { TabContainer, CustomBtn } from "components"
import { assets, baseUrls } from "constants/index"
import Cookies from "js-cookie"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import { authApi } from "services"
interface Props {
   children: React.ReactNode
   content: any
   response: any
   setcurrentTab: any
   tabList: any
   settime: any
   modal: boolean
   token: string | undefined
   setlocalLogin: (e: boolean) => void
   isLocalContent: boolean
   settoken: (e: string | undefined) => void
}

const Index = ({
   response,
   children,
   content,
   setcurrentTab,
   tabList,
   settime,
   modal,
   token,
   setlocalLogin,
   isLocalContent,
   settoken,
}: Props) => {
   const theme = useTheme()
   console.log(content, response)

   const handleSuccess = (data: any) => {
      console.log(data)
   }
   const handleError = (error: any) => {
      console.log(error)
   }

   const url = baseUrls.auth + "/logout"

   const handleLogout = async () => {
      settime()
      settoken("")
      Cookies.remove("LOCAL_APP_SID")
      await authApi({ url, token, handleError, handleSuccess })
   }
   return (
      <AppBar
         sx={{
            boxSizing: "border-box",
            filter: modal ? "blur(3px)" : "none",
            background: "#fff",
            overflowX: "auto",
         }}
         position="static"
      >
         <Box
            paddingLeft={3}
            paddingRight={1}
            paddingY={2}
            style={{
               boxSizing: "border-box",
               display: "flex",
               justifyContent: "space-between",
               width: "100%",
               alignItems: "center",
               background: theme.palette.background.paper,
            }}
         >
            <Box paddingTop={1} sx={{ display: "flex", alignItems: "center" }}>
               <Box sx={{ cursor: "pointer" }} paddingRight={2}>
                  <img
                     onClick={() => window.location.reload()}
                     src={assets.zestyLogo}
                     width="62px"
                     height="62px"
                     alt="Zesty.io Logo"
                  />
               </Box>
               <TabContainer
                  setcurrentTab={setcurrentTab}
                  tabList={tabList}
                  settime={settime}
                  token={token}
               />
            </Box>

            <Box
               sx={{
                  display: "flex",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  alignItems: "center",
                  gap: ".5rem",
               }}
            >
               <Box>
                  {!token && isLocalContent && (
                     <CustomBtn
                        padding="5px 10px"
                        size="14px"
                        theme={theme}
                        testid="localLoginBtn"
                        onClick={() => setlocalLogin(true)}
                     >
                        <LoginIcon fontSize="inherit" titleAccess="Edit Now" />
                        Login
                     </CustomBtn>
                  )}
                  {token && isLocalContent && (
                     <CustomBtn
                        padding="5px 10px"
                        size="14px"
                        theme={theme}
                        testid="localLogoutBtn"
                        onClick={handleLogout}
                     >
                        <LogoutIcon fontSize="inherit" titleAccess="Edit Now" />
                        Logout
                     </CustomBtn>
                  )}
               </Box>
               {children}
            </Box>
         </Box>
      </AppBar>
   )
}

export const Headers = React.memo(Index)
