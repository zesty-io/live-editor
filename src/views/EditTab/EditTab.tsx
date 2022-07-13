import React, { useEffect } from "react"
import { EditTable, GotoTopBtn } from "components"
import { Box } from "@mui/material"
import { EditModal } from "./EditModal"
import { handleEdit } from "services"
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
   getFinalData: any
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
   getFinalData,
}: Props) => {
   const newData =
      Object.keys(data?.content).length === 0 ? metaData?.data?.data : data?.content
   const [editValue, seteditValue] = React.useState("")
   const [editkey, setEditkey] = React.useState("")
   const [isWysiwyg, setisWysiwyg] = React.useState(false)

   const handleSubmit = async () => {
      setloading()
      const value = !isWysiwyg ? editValue.replace(/<[^>]*>?/gm, "") : editValue

      await handleEdit(metaData, url, token, {
         [editkey]: value,
      })

      onClose()
      // seteditValue("")
      await getData()
      await getFinalData()
   }
   const EditModalProps = {
      onClose,
      data: editValue,
      setdata: seteditValue,
      handleSubmit,
      theme,
      editkey,
   }

   useEffect(() => {
      localStorage.removeItem("preVal")
      localStorage.removeItem("preKey")
   }, [])
   return (
      <Box
         sx={{
            height: "100vh",
            overflowY: "auto",
            background: theme?.palette?.common?.white,
            fontSize: "14px !important",
         }}
      >
         {modal && <EditModal {...EditModalProps} />}
         <GotoTopBtn scrollPos={scrollPos} />

         <Box
            sx={{
               filter: modal ? "blur(3px)" : "none",
            }}
         >
            <EditTable
               setkey={setEditkey}
               openModal={openModal}
               setEditData={seteditValue}
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
      </Box>
   )
}
