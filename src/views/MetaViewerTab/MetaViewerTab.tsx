import { Box, Button } from "@mui/material"
import React, { useState } from "react"
import { generatedScript, headerZUID } from "utils"
import { MainInput, Subheaders } from "components"
import { editSeoData } from "services"
import { CopyBlock, dracula } from "react-code-blocks"

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

   const uri = `https://${
      content?.zestyInstanceZUID || headerZUID(response)
   }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}/meta`

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
         label: "Title",
         required: true,
         value: title,
         onChange: (e: any) => settitle(e.target.value),
         placeholder: "Title",
      },
      {
         key: "description",
         label: "Description",
         required: true,
         value: desc,
         onChange: (e: any) => setdesc(e.target.value),
         placeholder: "Description",
      },
      {
         key: "keywords",
         label: "keywords",
         required: true,
         value: keywords,
         onChange: (e: any) => setkeywords(e.target.value),
         placeholder: "Keywords",
      },
   ]
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
            <Box padding={4}>
               <form action="submit" onSubmit={handleSubmit}>
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
                        />
                     )
                  })}

                  <Button variant="contained" color="secondary" type="submit">
                     Submit
                  </Button>
               </form>
            </Box>
            <Box>
               <CopyBlock
                  text={generatedScript(content)}
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
