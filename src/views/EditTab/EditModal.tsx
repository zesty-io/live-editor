import React from "react"
import { Modal } from "components/Modal"
import { Box, Typography } from "@mui/material"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import { CustomBtn } from "components"
import CloseIcon from "@mui/icons-material/Close"
import { TinyMce } from "../../components/Ui/TinyMce"

interface Props {
   onClose: () => any
   data: any
   setdata: any
   handleSubmit: any
   theme: any
   editkey: string
}

export const EditModal = ({
   theme,
   onClose,
   data,
   setdata,
   handleSubmit,
   editkey,
}: Props) => {
   return (
      <Modal onClose={onClose}>
         <Box
            onClick={(e: any) => {
               e.stopPropagation()
            }}
            borderRadius={2}
            paddingBottom={4}
            sx={{
               position: "relative",
               background: "#fff",
               height: "50vh",
               width: "35vw",
               display: "flex",
               flexDirection: "column",
            }}
            padding={2}
         >
            <Box
               sx={{
                  position: "absolute",
                  right: ".5rem",
                  top: ".5rem",
                  fontSize: "20px",
                  cursor: "pointer",
               }}
            >
               <CloseIcon onClick={onClose} color="secondary" fontSize="inherit" />
            </Box>
            <Typography
               paddingBottom={4}
               sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: theme?.palette?.primary?.main,
               }}
            >
               Editing {JSON.stringify(editkey)}
            </Typography>
            <TinyMce value={data} onChange={(e: any) => setdata(e)} />
            <Box
               paddingY={2}
               sx={{
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
