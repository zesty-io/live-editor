import React from "react"
import { EditTable, GotoTopBtn } from "components"
import { Box } from "@mui/material"
import { EditModal } from "./EditModal"
import { handleEdit } from "utils"
interface Props {
   data: any
   metaData: any
   url: any
   token: any
   content: any
   theme: any
   scrollPos: number
   scrollEvent: any
   getData: any
   setloading: any
   response: any
   modal: any
   onClose: any
   openModal: any
}

export const EditTab = ({
   scrollPos,
   scrollEvent,
   content,
   theme,
   metaData,
   data,
   url,
   token,
   getData,
   setloading,
   response,
   modal,
   onClose,
   openModal,
}: Props) => {
   const newData =
      Object.keys(data?.content).length === 0 ? metaData?.data?.data : data?.content
   const [editData, seteditData] = React.useState("")
   const [key, setkey] = React.useState("")
   const [isWysiwyg, setisWysiwyg] = React.useState(false)
   const handleSubmit = async () => {
      const value = !isWysiwyg ? editData.replace(/<[^>]*>?/gm, "") : editData
      console.log(key, value, 4242)

      await handleEdit(metaData, url, token, {
         [key]: value,
      })

      onClose()
      seteditData("")
   }
   const EditModalProps = {
      onClose,
      data: editData,
      setdata: seteditData,
      handleSubmit,
   }
   return (
      <Box
         sx={{
            background: "#fff",
            overflow: "auto",
            height: "100%",
            position: "relative",
         }}
      >
         {modal && <EditModal {...EditModalProps} />}
         <GotoTopBtn scrollPos={scrollPos} />

         <EditTable
            setkey={setkey}
            openModal={openModal}
            setEditData={seteditData}
            response={response}
            onScroll={scrollEvent}
            url={url}
            token={token}
            metaData={metaData}
            data={newData}
            content={content}
            theme={theme}
            getData={getData}
            setloading={setloading}
            setisWysiwyg={setisWysiwyg}
         />
      </Box>
   )
}
