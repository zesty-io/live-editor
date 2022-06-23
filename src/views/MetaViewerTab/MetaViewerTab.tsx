import { Box } from "@mui/material"
import React, { useState, useEffect } from "react"
import { generatedScript, headerZUID } from "utils"
import { CreateHeadTagModal, CustomBtn, Subheaders } from "components"
import { deleteHeadTagApi, editHeadTagApi, editSeoData, headTagApi } from "services"
import { CopyBlock, dracula } from "react-code-blocks"
import { DomReport } from "./DomReport"
import { HeadTagTable } from "./HeadtagTable"
import { MetaTags } from "./MetaTags"
import * as helper from "utils"
import AddIcon from "@mui/icons-material/Add"

interface Props {
   content: any
   response: any
   theme: any
   metaData: any
   url: string
   token: string
   getData: any
   setloading: any
   createHeadtagModal: any
   onClose: any
   resourceZUID: any
   instanceZUID: any
   modal: boolean
}
export const MetaViewerTab = ({
   content,
   response,
   theme,
   metaData,
   url,
   token,
   getData,
   setloading,
   createHeadtagModal,
   onClose,
   resourceZUID,
   instanceZUID,
   modal,
}: Props) => {
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

   const editMetaTags = async (e: any) => {
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

   const handleCreateHeadTag = () => {
      createHeadtagModal()
   }
   const HEADTAGS_COLUMNS = [
      "type",
      "sort",
      "resource ZUID",
      <CustomBtn size="14px" theme={theme} onClick={handleCreateHeadTag}>
         <AddIcon fontSize="small" /> Create Head Tag
      </CustomBtn>,
   ]
   const CreateHeadTagProps = {
      onClose,
      resourceZUID,
      instanceZUID,
      token,
      setloading,
      getHeadTags,
   }

   const pageMetaTags = helper.getPageMetaTags(headtags)
   const globalMetaTags = helper.getGlobalMetaTags(headtags)

   return (
      <Box
         sx={{
            height: "100vh",
            overflowY: "auto",
            background: theme.palette.common.white,
            fontSize: "14px !important",
         }}
      >
         {modal && <CreateHeadTagModal {...CreateHeadTagProps} />}
         <Box paddingBottom={8} sx={{ height: "90vh", overflow: "auto" }}>
            <Subheaders
               response={response}
               content={content}
               theme={theme}
               btnList={btnList}
            />
            <Box
               paddingY={4}
               paddingX={8}
               sx={{
                  filter: modal ? "blur(5px)" : "none",
               }}
            >
               <MetaTags arr={arr} theme={theme} handleSubmit={editMetaTags} />
               <DomReport theme={theme} />
               <HeadTagTable
                  header={"Page Meta Tags"}
                  theme={theme}
                  columns={HEADTAGS_COLUMNS}
                  data={pageMetaTags}
                  editHeadTags={editHeadTags}
                  deleteHeadTags={deleteHeadTags}
               />
               <HeadTagTable
                  header={"Global Meta Tags"}
                  theme={theme}
                  columns={HEADTAGS_COLUMNS}
                  data={globalMetaTags}
                  editHeadTags={editHeadTags}
                  deleteHeadTags={deleteHeadTags}
               />
               <Box paddingTop={4}>
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
      </Box>
   )
}
