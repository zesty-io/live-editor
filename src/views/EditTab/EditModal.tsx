import React from "react"
import { Modal } from "components/Modal"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Box, Typography } from "@mui/material"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import { CustomBtn } from "components"

interface Props {
   onClose: () => any
   data: any
   setdata: any
   handleSubmit: any
   theme: any
   editkey: string
}

const modules = {
   toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
   ],
}

const formats = [
   "header",
   "bold",
   "italic",
   "underline",
   "strike",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "link",
   "image",
]

export const EditModal = ({
   theme,
   onClose,
   data,
   setdata,
   handleSubmit,
   editkey,
}: Props) => {
   console.log(onClose, editkey, 44444)
   return (
      <Modal onClose={() => {}}>
         <Box
            borderRadius={2}
            sx={{
               position: "relative",
               background: "#fff",
               height: "30rem",
               width: "30vw",
               display: "flex",
               flexDirection: "column",
            }}
            padding={2}
         >
            <Typography
               paddingBottom={4}
               sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
               }}
            >
               Editing {JSON.stringify(editkey)}
            </Typography>
            <Box>
               <Box sx={{ height: "100%" }}>
                  <ReactQuill
                     style={{ height: "100%" }}
                     modules={modules}
                     formats={formats}
                     theme="snow"
                     value={data}
                     onChange={(e: any) => setdata(e)}
                  />
               </Box>
            </Box>
            <Box
               paddingY={2}
               sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  justifyItems: "center",
               }}
            >
               <CustomBtn size="14px" theme={theme} onClick={handleSubmit}>
                  <CheckCircleOutlineRoundedIcon fontSize="inherit" /> Confirm
               </CustomBtn>
            </Box>
         </Box>
      </Modal>
   )
}
