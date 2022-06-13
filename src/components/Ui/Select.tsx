import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

export const BasicSelect = () => {
   const [age, setAge] = React.useState("")

   const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string)
   }

   return (
      <Box sx={{ minWidth: 120, zIndex: "99999999999999999999999999999" }}>
         <FormControl fullWidth sx={{ zIndex: "99999999999999" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={age}
               label="Age"
               onChange={handleChange}
               sx={{ zIndex: "99999999999999" }}
            >
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
         </FormControl>
      </Box>
   )
}
