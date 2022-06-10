import { Box, Button, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import { generatedScript, headerZUID } from "utils"
import { MainInput, Subheaders } from "components"
import { deleteHeadTagApi, editHeadTagApi, editSeoData, headTagApi } from "services"
import { CopyBlock, dracula } from "react-code-blocks"
import { DomReport } from "./DomReport"
import { CustomForm } from "./CustomForm"

export const MetaViewerTab = ({
   content,
   response,
   theme,
   metaData,
   url,
   token,
   getData,
   setloading,
}: any) => {
   const [title, settitle] = useState(content?.meta?.web?.seo_meta_title || "")
   const [desc, setdesc] = useState(content?.meta?.web?.seo_meta_description || "")
   const [keywords, setkeywords] = useState(content?.meta?.web?.seo_meta_keywords || "")

   const [headtags, setheadtags] = useState([])

   const uri = `https://${
      content?.zestyInstanceZUID || headerZUID(response)
   }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}/meta`
   const headtagsUri = `https://${
      content?.zestyInstanceZUID || headerZUID(response)
   }.api.zesty.io/v1/web/headtags`

   const btnList = [
      { name: "Edit in CMS", label: "Edit in CMS", value: "Edit in CMS", href: uri },
   ]

   const handleSuccessEdit = async (res: any) => {
      console.log(res.json(), "succ")
      await getData()
   }
   const handleErrorEdit = async (error: any) => {
      console.log(error.json(), "error")
      await getData()
   }

   const handleSuccessGetHeadTags = async (res: any) => {
      setheadtags(res.data)
      await getData()
   }
   const handleErrorGetHeadTags = async (error: any) => {
      console.log(error, "error")
      await getData()
   }
   const handleSuccessEditHeadTags = async (res: any) => {
      console.log(res)
      await getHeadTags()
   }
   const handleErrorEditHeadTags = async (error: any) => {
      console.log(error, "error")
      await getHeadTags()
   }
   const handleSuccessDeleteHeadTags = async (res: any) => {
      console.log(res)
      await getHeadTags()
   }
   const handleErrorDeleteHeadTags = async (error: any) => {
      console.log(error, "error")
      await getHeadTags()
   }

   const getHeadTags = async () => {
      const res = await headTagApi({ url: headtagsUri, token })
      !res.error && handleSuccessGetHeadTags(res)
      res.error && handleErrorGetHeadTags(res)
   }
   const editData = async () => {
      setloading()
      const payload = {
         data: metaData.data.data,
         meta: metaData.data.meta,
         web: {
            ...metaData.data.web,
            metaTitle: title,
            metaDescription: desc,
            metaKeywords: keywords,
         },
      }

      const res = await editSeoData({ url, token, payload })
      res.status === 200 && handleSuccessEdit(res)
      res.status !== 200 && handleErrorEdit(res)
   }

   const handleSubmit = async (e: any) => {
      e.preventDefault()
      await editData()
   }

   const arr = [
      {
         key: "title",
         label: "Meta Title",
         required: true,
         value: title,
         onChange: (e: any) => settitle(e.target.value),
         placeholder: "Title",
      },
      {
         key: "description",
         label: "Meta Description",
         required: true,
         value: desc,
         onChange: (e: any) => setdesc(e.target.value),
         placeholder: "Description",
      },
      {
         key: "keywords",
         label: "Meta Keywords",
         required: true,
         value: keywords,
         onChange: (e: any) => setkeywords(e.target.value),
         placeholder: "Keywords",
      },
   ]

   const editHeadTags = async (data: any) => {
      setloading()
      const url = `${headtagsUri}/${data.ZUID}`
      const res = await editHeadTagApi({ payload: data, url, token })
      !res.error && handleSuccessEditHeadTags(res)
      res.error && handleErrorEditHeadTags(res)
   }

   const deleteHeadTags = async (data: any) => {
      setloading()
      const url = `${headtagsUri}/${data.ZUID}`
      const res = await deleteHeadTagApi({ url, token })
      !res.error && handleSuccessDeleteHeadTags(res)
      res.error && handleErrorDeleteHeadTags(res)
   }

   useEffect(() => {
      getHeadTags()
   }, [])

   return (
      <Box
         sx={{
            height: "90vh",
            overflowY: "auto",
            background: theme.palette.common.white,
            fontSize: "14px !important",
         }}
      >
         <Box sx={{ height: "90vh", overflow: "auto" }}>
            <Subheaders content={content} theme={theme} btnList={btnList} />
            <Box paddingY={4} paddingX={8}>
               <form action="submit" onSubmit={handleSubmit}>
                  <Typography
                     paddingBottom={4}
                     sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                     }}
                  >
                     Meta Tags
                  </Typography>
                  <Box
                     borderRadius={4}
                     padding={4}
                     boxShadow={1}
                     sx={{
                        backgroundColor: theme.palette.alternate.main,
                     }}
                  >
                     {arr?.map((e, i) => {
                        return (
                           <MainInput
                              theme={{
                                 main: theme.palette.primary.main,
                                 white: theme.palette.common.white,
                                 boxShadow: theme.palette.secondary.blueShadow,
                                 border: theme.palette.secondary.whiteSmoke,
                              }}
                              autoFocus={i === 0 ? true : false}
                              key={e.key}
                              label={e.label}
                              required={e.required}
                              value={e.value}
                              onChange={e.onChange}
                              placeholder={e.placeholder}
                              textArea={i === 1 ? true : false}
                           />
                        )
                     })}
                     <Button variant="contained" color="secondary" type="submit">
                        Save Meta Tags
                     </Button>
                  </Box>
                  <DomReport theme={theme} />
                  <Box sx={{ display: headtags.length > 0 ? "block" : "none" }}>
                     <Typography
                        paddingTop={4}
                        paddingBottom={4}
                        sx={{
                           fontSize: "24px",
                           fontWeight: "bold",
                           color: theme.palette.primary.main,
                        }}
                     >
                        Custom Head Tags
                     </Typography>
                     {headtags?.map((e: any) => {
                        const handleEditHeadTags = async (data: any) => {
                           const newData = { ...e, attributes: data }
                           await editHeadTags(newData)
                        }
                        const handleDeleteHeadTag = async (data: any) => {
                           await deleteHeadTags(data)
                        }

                        return (
                           <CustomForm
                              theme={theme}
                              data={e.attributes}
                              handleSubmit={handleEditHeadTags}
                              handleDelete={() => handleDeleteHeadTag(e)}
                           />
                        )
                     })}
                  </Box>
               </form>
            </Box>
            <Box>
               <CopyBlock
                  text={generatedScript({ content, tags: headtags })}
                  language={"jsx"}
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines={false}
                  codeBlock
               />
            </Box>
         </Box>
      </Box>
   )
}
