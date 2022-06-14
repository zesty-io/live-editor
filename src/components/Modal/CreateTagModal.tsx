import React, { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { addHeadTagApi } from "services"
import { BasicMenu } from "components/Ui"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"
import { MainInput } from "components/Input"
import { useTheme } from "@emotion/react"
import { CustomBtn } from "components/Buttons"
interface Props {
   onClose: () => any
   resourceZUID: string
   instanceZUID: string
   token: string
   setloading: any
   getHeadTags: any
}

export const CreateHeadTagModal = ({
   token,
   onClose,
   resourceZUID,
   instanceZUID,
   setloading,
   getHeadTags,
}: Props) => {
   return (
      <Box
         sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2147483646",
            height: "100%",
            width: "100%",
            background: "rgba(1,2,3,.4)",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyItems: "center",
               flexDirection: "column",
               height: "100%",
               width: "100%",
               background: "rgba(1,2,3,.4)",
               position: "relative",
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%,-60%)",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     justifyItems: "center",
                     height: "100%",
                     width: "100%",
                     textAlign: "center",
                     userSelect: "none",
                  }}
               >
                  <ModalContent
                     token={token}
                     instanceZUID={instanceZUID}
                     resourceZUID={resourceZUID}
                     onClose={onClose}
                     setloading={setloading}
                     getHeadTags={getHeadTags}
                  />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
const OPTIONS_TYPE = [
   { value: "script", label: "script" },
   { value: "meta", label: "meta" },
   { value: "link", label: "link" },
]
const OPTIONS_SORT = [
   { value: "0", label: "0" },
   { value: "1", label: "1" },
   { value: "2", label: "2" },
   { value: "3", label: "3" },
   { value: "4", label: "4" },
   { value: "5", label: "5" },
   { value: "6", label: "6" },
   { value: "7", label: "7" },
   { value: "8", label: "8" },
   { value: "9", label: "9" },
   { value: "10", label: "10" },
]
const ModalContent = ({
   token,
   resourceZUID,
   onClose,
   instanceZUID,
   setloading,
   getHeadTags,
}: Props) => {
   const [tag, settag] = useState("link")
   const [sort, setsort] = useState(0)

   const handleChangeType = (data: any) => {
      settag(data)
   }
   const handleChangeSort = (data: any) => {
      setsort(data)
   }

   const handleSuccesAddHeadTag = (data: any) => {
      console.log(data, "suc")
   }
   const handleErrorAddHeadTag = (error: any) => {
      console.log(error)
   }

   const handleSubmit = async (e: any, arr: any) => {
      setloading()
      onClose()
      e.preventDefault()
      const url = `https://${instanceZUID}.api.zesty.io/v1/web/headtags`
      const payload = {
         ZUID: `${sort}:${resourceZUID}`,
         resourceZUID,
         type: tag,
         custom: true,
         attributes: arr,
         sort: Number(sort),
      }
      const res = await addHeadTagApi({ url, token, payload })
      !res.error && handleSuccesAddHeadTag(res)
      res.error && handleErrorAddHeadTag(res)
      await getHeadTags()
   }
   const formComponent =
      tag === "script" ? (
         <ScriptComponent onSubmit={handleSubmit} />
      ) : tag === "link" ? (
         <LinkComponent onSubmit={handleSubmit} />
      ) : tag === "meta" ? (
         <MetaComponent onSubmit={handleSubmit} />
      ) : (
         <></>
      )
   useEffect(() => {
      if (!tag) {
         settag("link")
      }
      if (!sort) {
         setsort(0)
      }
   }, [tag, sort])

   return (
      <Box
         paddingX={3}
         paddingY={4}
         sx={{
            height: "100%",
            background: "#fafafa",
            zIndex: "2147483649",
            position: "relative",
         }}
      >
         <Box sx={{ position: "absolute", right: ".5rem", top: ".5rem" }}>
            <HighlightOffIcon onClick={onClose} color="secondary" fontSize="small" />
         </Box>
         <Box sx={{ display: "flex", gap: "1rem" }}>
            <BasicMenu
               title={"Type"}
               list={OPTIONS_TYPE}
               value={tag}
               onChange={handleChangeType}
            />
            <BasicMenu
               title={"Sort"}
               list={OPTIONS_SORT}
               value={sort}
               onChange={handleChangeSort}
            />
         </Box>
         <Box sx={{ height: "auto" }}>{formComponent}</Box>
      </Box>
   )
}

const MetaComponent = ({ onSubmit }: any) => {
   const theme: any = useTheme()
   const themeCustom = {
      main: theme.palette.primary.main,
      white: theme.palette.common.white,
      boxShadow: theme.palette.secondary.blueShadow,
      border: theme.palette.secondary.whiteSmoke,
   }
   const [content_key, setcontent_key] = useState("content")
   const [name_key, setname_key] = useState("name")
   const [content_val, setcontent_val] = useState("")
   const [name_val, setname_val] = useState("")
   const arr = {
      [content_key]: content_val,
      [name_key]: name_val,
   }

   return (
      <form action="submit" onSubmit={(e: any) => onSubmit(e, arr)}>
         <Box gap={2} sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>
               Attribute
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>Value</Typography>
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               value={content_key}
               onChange={(e: any) => setcontent_key(e.target.value)}
               theme={themeCustom}
            />
            <MainInput
               theme={themeCustom}
               value={content_val}
               onChange={(e: any) => setcontent_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={name_key}
               onChange={(e: any) => setname_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={name_val}
               onChange={(e: any) => setname_val(e.target.value)}
            />
         </Box>
         <CustomBtn type="submit" onClick={() => {}} theme={theme}>
            Submit
         </CustomBtn>
      </form>
   )
}

const ScriptComponent = ({ onSubmit }: any) => {
   const [tyep_key, settyep_key] = useState("type")
   const [tyep_val, settyep_val] = useState("")
   const [as_key, setas_key] = useState("as")
   const [as_val, setas_val] = useState("")
   const [src_key, setsrc_key] = useState("src")
   const [src_val, setsrc_val] = useState("")
   const [res_key, setres_key] = useState("res")
   const [res_val, setres_val] = useState("")

   const theme: any = useTheme()
   const themeCustom = {
      main: theme.palette.primary.main,
      white: theme.palette.common.white,
      boxShadow: theme.palette.secondary.blueShadow,
      border: theme.palette.secondary.whiteSmoke,
   }
   const arr = {
      [tyep_key]: tyep_val,
      [as_key]: as_val,
      [src_key]: src_val,
      [res_key]: res_val,
   }

   return (
      <form action="submit" onSubmit={(e: any) => onSubmit(e, arr)}>
         <Box gap={2} sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>
               Attribute
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>Value</Typography>
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={src_key}
               onChange={(e: any) => setsrc_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={src_val}
               onChange={(e: any) => setsrc_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={as_key}
               onChange={(e: any) => setas_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={as_val}
               onChange={(e: any) => setas_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={tyep_key}
               onChange={(e: any) => settyep_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={tyep_val}
               onChange={(e: any) => settyep_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={res_key}
               onChange={(e: any) => setres_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={res_val}
               onChange={(e: any) => setres_val(e.target.value)}
            />
         </Box>
         <CustomBtn type="submit" onClick={() => {}} theme={theme}>
            Submit
         </CustomBtn>
      </form>
   )
}

const LinkComponent = ({ onSubmit }: any) => {
   const [tyep_key, settyep_key] = useState("type")
   const [tyep_val, settyep_val] = useState("")
   const [as_key, setas_key] = useState("as")
   const [as_val, setas_val] = useState("")
   const [res_key, setres_key] = useState("res")
   const [res_val, setres_val] = useState("")
   const [href_key, sethref_key] = useState("href")
   const [href_val, sethref_val] = useState("")
   const [media_key, setmedia_key] = useState("media")
   const [media_val, setmedia_val] = useState("")

   const theme: any = useTheme()
   const themeCustom = {
      main: theme.palette.primary.main,
      white: theme.palette.common.white,
      boxShadow: theme.palette.secondary.blueShadow,
      border: theme.palette.secondary.whiteSmoke,
   }
   const arr = {
      [tyep_key]: tyep_val,
      [as_key]: as_val,
      [res_key]: res_val,
      [href_key]: href_val,
      [media_key]: media_val,
   }

   return (
      <form action="submit" onSubmit={(e: any) => onSubmit(e, arr)}>
         <Box gap={2} sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>
               Attribute
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }}>Value</Typography>
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={href_key}
               onChange={(e: any) => sethref_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={href_val}
               onChange={(e: any) => sethref_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={media_key}
               onChange={(e: any) => setmedia_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={media_val}
               onChange={(e: any) => setmedia_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={as_key}
               onChange={(e: any) => setas_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={as_val}
               onChange={(e: any) => setas_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={tyep_key}
               onChange={(e: any) => settyep_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={tyep_val}
               onChange={(e: any) => settyep_val(e.target.value)}
            />
         </Box>
         <Box gap={2} sx={{ display: "flex" }}>
            <MainInput
               theme={themeCustom}
               value={res_key}
               onChange={(e: any) => setres_key(e.target.value)}
            />
            <MainInput
               theme={themeCustom}
               value={res_val}
               onChange={(e: any) => setres_val(e.target.value)}
            />
         </Box>
         <CustomBtn type="submit" onClick={() => {}} theme={theme}>
            Submit
         </CustomBtn>
      </form>
   )
}
