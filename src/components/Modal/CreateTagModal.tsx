import React, { useState } from "react"
import { Box } from "@mui/material"
import { addHeadTagApi } from "services"
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
            background: "#fff",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyItems: "center",
               flexDirection: "column",
               height: "100%",
               width: "100%",
               background: "#fff",
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
// const linkList = [
//    { key: "res", value: "preload" },
//    { key: "as", value: "style" },
//    { key: "type", value: "text/css" },
//    { key: "media", value: "screen" },
//    { key: "href", value: "" },
// ]

// const sriptList = [
//    { key: "res", value: "preload" },
//    { key: "as", value: "script" },
//    { key: "type", value: "text/javascript" },
//    { key: "src", value: "" },
// ]

// const metaList = [
//    { key: "name", value: "" },
//    { key: "content", value: "" },
// ]

const OPTIONS = [
   { value: "script", label: "script" },
   { value: "meta", label: "meta" },
   { value: "link", label: "link" },
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

   const handleChange = (data: any) => {
      console.log(data)
      settag(data)
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
   return (
      <Box sx={{ height: "100%" }}>
         <Box>
            <button onClick={onClose}>close</button>
         </Box>
         <Box>
            <CustomSelect OPTIONS={OPTIONS} onChange={handleChange} />
         </Box>
         <Box>
            <input
               type="number"
               value={sort}
               onChange={(e: any) => setsort(e.target.value)}
            />
         </Box>
         <Box>{formComponent}</Box>
      </Box>
   )
}

const CustomSelect = ({ OPTIONS, onChange }: any) => {
   return (
      <>
         <label>Choose a Tag:</label>
         <select name="cars" id="cars" onChange={(e: any) => onChange(e.target.value)}>
            {OPTIONS?.map((e: any) => {
               return <option value={e.value}>{e.label}</option>
            })}
         </select>
      </>
   )
}

const MetaComponent = ({ onSubmit }: any) => {
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
         meta
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={content_key}
               onChange={(e: any) => setcontent_key(e.target.value)}
            />
            <input
               type="text"
               value={content_val}
               onChange={(e: any) => setcontent_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={name_key}
               onChange={(e: any) => setname_key(e.target.value)}
            />
            <input
               type="text"
               value={name_val}
               onChange={(e: any) => setname_val(e.target.value)}
            />
         </Box>
         <button type="submit">okokok</button>
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

   const arr = {
      [tyep_key]: tyep_val,
      [as_key]: as_val,
      [src_key]: src_val,
      [res_key]: res_val,
   }

   return (
      <form action="submit" onSubmit={(e: any) => onSubmit(e, arr)}>
         <span>srcipt</span>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={src_key}
               onChange={(e: any) => setsrc_key(e.target.value)}
            />
            <input
               type="text"
               value={src_val}
               onChange={(e: any) => setsrc_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={as_key}
               onChange={(e: any) => setas_key(e.target.value)}
            />
            <input
               type="text"
               value={as_val}
               onChange={(e: any) => setas_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={tyep_key}
               onChange={(e: any) => settyep_key(e.target.value)}
            />
            <input
               type="text"
               value={tyep_val}
               onChange={(e: any) => settyep_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={res_key}
               onChange={(e: any) => setres_key(e.target.value)}
            />
            <input
               type="text"
               value={res_val}
               onChange={(e: any) => setres_val(e.target.value)}
            />
         </Box>
         <button type="submit">okokok</button>
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

   const arr = {
      [tyep_key]: tyep_val,
      [as_key]: as_val,
      [res_key]: res_val,
      [href_key]: href_val,
      [media_key]: media_val,
   }

   return (
      <form action="submit" onSubmit={(e: any) => onSubmit(e, arr)}>
         link
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={href_key}
               onChange={(e: any) => sethref_key(e.target.value)}
            />
            <input
               type="text"
               value={href_val}
               onChange={(e: any) => sethref_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={media_key}
               onChange={(e: any) => setmedia_key(e.target.value)}
            />
            <input
               type="text"
               value={media_val}
               onChange={(e: any) => setmedia_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={as_key}
               onChange={(e: any) => setas_key(e.target.value)}
            />
            <input
               type="text"
               value={as_val}
               onChange={(e: any) => setas_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={tyep_key}
               onChange={(e: any) => settyep_key(e.target.value)}
            />
            <input
               type="text"
               value={tyep_val}
               onChange={(e: any) => settyep_val(e.target.value)}
            />
         </Box>
         <Box sx={{ display: "flex" }}>
            <input
               type="text"
               value={res_key}
               onChange={(e: any) => setres_key(e.target.value)}
            />
            <input
               type="text"
               value={res_val}
               onChange={(e: any) => setres_val(e.target.value)}
            />
         </Box>
         <button type="submit">okokok</button>
      </form>
   )
}
