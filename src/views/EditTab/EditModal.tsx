import React from "react"
import { Modal } from "components/Modal"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Box } from "@mui/material"

interface Props {
   onClose: () => any
   data: any
   setdata: any
   handleSubmit: any
}

export const EditModal = ({ onClose, data, setdata, handleSubmit }: Props) => {
   console.log(onClose)
   return (
      <Modal onClose={() => {}}>
         <Box sx={{ background: "#fff" }}>
            <ReactQuill theme="snow" value={data} onChange={(e: any) => setdata(e)} />
         </Box>
         <button onClick={handleSubmit}>OK</button>
      </Modal>
   )
}
