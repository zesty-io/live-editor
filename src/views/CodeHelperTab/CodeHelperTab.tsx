import React from "react"
import { CodeHelperTable, GotoTopBtn } from "components"
import { Box } from "@mui/material"
import * as helper from "utils"
interface Props {
   data: any
   metaData: any
   url: any
   token: any
   content: any
   theme: any
   scrollPos: number
   scrollEvent: any
   response: any
   isLocalContent: boolean
}

export const CodeHelperTab = ({
   scrollEvent,
   scrollPos,
   theme,
   content,
   metaData,
   data,
   url,
   token,
   response,
   isLocalContent,
}: Props) => {
   const [fields, setfields] = React.useState([])
   const newData =
      Object.keys(data?.content).length === 0 ? metaData?.data?.data : data?.content

   const userAppSID = helper.getUserAppSID()
   const modelZUID = newData?.meta?.model?.zuid
   const instanceZUID = helper.headerZUID(response)

   const ZestyAPI = new (window as any).Zesty.FetchWrapper(
      instanceZUID,
      userAppSID,
      helper.fetchWrapperOptions(),
   )
   const getFields = async () => {
      const res = await ZestyAPI.getFields(modelZUID)
      res?.data?.length !== 0 && setfields(res?.data)
   }

   React.useEffect(() => {
      if (!isLocalContent) {
         fields?.length === 0 && getFields()
      }
   }, [fields, isLocalContent])

   return (
      <Box
         sx={{
            background: "background.paper",
            overflow: "auto",
            height: "100%",
            position: "relative",
         }}
      >
         <GotoTopBtn scrollPos={scrollPos} />

         <CodeHelperTable
            isLocalContent={isLocalContent}
            fields={fields}
            response={response}
            content={content}
            onScroll={scrollEvent}
            url={url}
            token={token}
            metaData={metaData}
            data={newData}
            theme={theme}
         />
      </Box>
   )
}
