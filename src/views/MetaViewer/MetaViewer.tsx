import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import React from "react"
import { CopyBlock, anOldHope } from "react-code-blocks"
import { headerZUID } from "utils"

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
  <meta property="og:description" content="${content?.meta?.web?.seo_meta_description}" />
  <meta property="twitter:description" content="${
     content?.meta?.web?.seo_meta_description
  }" />
  <meta property="og:url" content="${content?.meta?.web?.url}" />
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="${content?.meta?.model_alternate_name}" />

  <!-- Custom Head Tags -->
  <meta content="${content?.og_image?.data &&
     content?.og_image.data[0]?.url}" property="og:image" />
  <meta content="${content?.og_image?.data &&
     content?.og_image.data[0]?.url}" name="twitter:image" />
</head>
`
}

export const MetaViewer = ({ content, response }: any) => {
   console.log(content, "contentdata")
   const uri = `https://${content?.zestyInstanceZUID ||
      headerZUID(response)}.manager.zesty.io/content/${content?.meta?.model?.zuid}/${
      content?.meta?.zuid
   }/meta`
   console.log(uri)
   return (
      <div style={{ height: "80vh", background: "pink" }}>
         <Button
            href={uri}
            variant="contained"
            color="primary"
            size="small"
            sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
         >
            <Box paddingX={2} paddingY={1}>
               Edit in CMS
            </Box>
         </Button>
         <CopyBlock
            text={generatedScript(content)}
            language={"html"}
            showLineNumbers={false}
            theme={anOldHope}
            wrapLines={true}
         />
      </div>
   )
}
