import { Box } from "@mui/material"
import React from "react"
// import { CopyBlock, dracula } from "react-code-blocks"
import { headerZUID } from "utils"
import { Subheaders } from "components"

const generatedScript = (content: any) => {
   console.log(content, "contentdata")
   console.log(content?.content?.meta?.web?.url || "")
   return `<head>

   <!-- Auto-generated Head Tags -->
   <title>Zesty.io: Simplify digital. Maximize results.</title>
   <link rel="canonical" href="${content?.meta?.web?.url}" />

   <meta name="description" content="${content?.meta?.web?.seo_meta_description}" />
   <meta name="keywords" content="${content?.meta?.web?.seo_meta_keywords}" />
   <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
   <meta property="og:type" content="website" />
   <meta name="twitter:card" content="summary">
   <meta property="og:title" content="${content?.meta?.web?.seo_meta_title}" />
   <meta name="twitter:title" content="${content?.meta?.web?.seo_meta_title}">
   <meta property="og:description" content="${
      content?.meta?.web?.seo_meta_description
   }" />
   <meta property="twitter:description" content="${
      content?.meta?.web?.seo_meta_description
   }" />
  <meta property="og:url" content="${content?.meta?.web?.url}" />
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="${content?.meta?.model_alternate_name}" />

  <!-- Custom Head Tags -->
  <meta content="${
     content?.og_image?.data && content?.og_image.data[0]?.url
  }" property="og:image" />
  <meta content="${
     content?.og_image?.data && content?.og_image.data[0]?.url
  }" name="twitter:image" />
</head>
`
}

export const MetaViewerTab = ({ content, response, theme }: any) => {
   const uri = `https://${
      content?.zestyInstanceZUID || headerZUID(response)
   }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}/meta`

   const btnList = [
      { name: "Edit in CMS", label: "Edit in CMS", value: "Edit in CMS", href: uri },
   ]
   console.log(generatedScript(content))
   return (
      <Box sx={{ height: "90vh", background: "#fff", fontSize: "14px !important" }}>
         <Subheaders content={content} theme={theme} btnList={btnList} />
         {/* <CopyBlock
            text={generatedScript(content)}
            language={"jsx"}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={false}
            codeBlock
         /> */}
      </Box>
   )
}
