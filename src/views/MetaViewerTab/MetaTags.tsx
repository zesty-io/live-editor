import { Box, Button, Typography } from "@mui/material"
import { MainInput } from "components"
import React from "react"
interface Props {
   arr: any[]
   handleSubmit: any
   theme: any
}

export const MetaTags = ({ arr, handleSubmit, theme }: Props) => {
   return (
      <form action="submit" onSubmit={handleSubmit}>
         <Typography
            paddingBottom={4}
            sx={{
               fontSize: "24px",
               fontWeight: "bold",
               color: theme?.palette?.primary?.main,
            }}
         >
            Meta Tags
         </Typography>
         <Box
            borderRadius={1}
            padding={4}
            boxShadow={1}
            sx={{
               backgroundColor: theme?.palette?.alternate?.main,
            }}
         >
            {arr?.map((e: any, i: number) => {
               return (
                  <MainInput
                     theme={{
                        main: theme?.palette?.primary?.main,
                        white: theme?.palette?.common?.white,
                        boxShadow: theme?.palette?.secondary?.blueShadow,
                        border: theme?.palette?.secondary?.whiteSmoke,
                     }}
                     autoFocus={i === 0 ? true : false}
                     key={e.key}
                     label={e.label}
                     required={e.required}
                     value={e.value}
                     onChange={e.onChange}
                     placeholder={e.placeholder}
                     textArea={i === 1 ? true : false}
                  />
               )
            })}
            <Button variant="contained" color="secondary" type="submit">
               Save Meta Tags
            </Button>
         </Box>
      </form>
   )
}
