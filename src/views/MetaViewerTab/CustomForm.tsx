import { Box, Button, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import { MainInput } from "components"

export const CustomForm = ({ theme, data, handleSubmit, handleDelete }: any) => {
   console.log(handleDelete)
   const [attri, setattri] = useState(data)
   // const [test, settest] = useState("")

   // function renameKeys(obj: any, newKeys: any) {
   //    const keyValues = Object.keys(obj).map((key) => {
   //       const newKey = newKeys[key] || key
   //       return { [newKey]: obj[key] }
   //    })
   //    return Object.assign({}, ...keyValues)
   // }
   // const handleChange = (e: any, name: any, val: any) => {
   //    console.log(val)
   //    attri["test"] = attri[name]
   //    const newKeys = { name: e.target.value }
   //    const renamedObj = renameKeys(attri, newKeys)

   //    console.log(renamedObj, 9999)
   //    settest(e.target.value)
   //    setattri({ ...attri, [e.target.value]: val })
   // }
   useEffect(() => {
      // console.log(test, 9999)
   }, [attri])

   return (
      <Box
         boxShadow={1}
         borderRadius={1}
         marginBottom={2}
         paddingX={8}
         paddingY={4}
         sx={{
            backgroundColor: theme.palette.alternate.main,
            overflow: "hidden",
            position: "relative",
         }}
      >
         <form
            action="submit"
            style={{
               margin: "2rem .5rem",
               display: "flex",
               flexDirection: "column",
               justifyContent: "start",
               justifyItems: "start",
            }}
         >
            {/* <Button
               sx={{
                  background: theme.palette.zesty.zestyBitterSweet,
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  borderRadius: "5px",
               }}
               variant="contained"
               onClick={handleDelete}
               type="button"
               title="Delete Head Tag"
            >
               <CloseIcon fontSize="small" />
            </Button> */}
            <Box>
               <Box
                  sx={{
                     display: "flex",
                     gap: "4rem",
                     justifyContent: "start",
                     justifyItems: "start",
                     width: "100%",
                  }}
               >
                  <Typography sx={{ fontWeight: "bold" }}>Attribute</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>Value</Typography>
               </Box>
               {data &&
                  Object.entries(data).map((x: any, i: number) => {
                     const key: any = Object.keys(attri)[i]
                     const val: any = Object.values(attri)[i]
                     return (
                        <Box
                           sx={{
                              display: "grid",
                              gap: "2rem",
                              gridTemplateColumns: "5rem 1fr",
                              alignItems: "center",
                              justifyContent: "start",
                              justifyItems: "start",
                           }}
                        >
                           <Box sx={{ display: "block" }}>
                              <Typography>{key}</Typography>
                           </Box>
                           <MainInput
                              theme={{
                                 main: theme.palette.primary.main,
                                 white: theme.palette.common.white,
                                 boxShadow: theme.palette.secondary.blueShadow,
                                 border: theme.palette.secondary.whiteSmoke,
                              }}
                              name={val}
                              autoFocus={false}
                              key={i}
                              label={" "}
                              required={false}
                              value={val}
                              onChange={(e: any) =>
                                 setattri({ ...attri, [key]: e.target.value })
                              }
                              placeholder={val}
                           />
                        </Box>
                     )
                  })}
            </Box>

            <Box
               sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  justifyItems: "center",
               }}
            >
               <Button
                  sx={{ whiteSpace: "nowrap", padding: ".5rem 1rem" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleSubmit(attri)}
                  type="button"
                  title="Save Head Tag"
               >
                  Save Head Tag
               </Button>
            </Box>
         </form>
      </Box>
   )
}
