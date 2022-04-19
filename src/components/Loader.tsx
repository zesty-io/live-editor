import React from "react"

export const Loader = () => {
   return (
      <div
         style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "100",
            height: "100%",
            width: "100%",
            background: "#FEFF01",
         }}
      >
         <h1>Loading </h1>
      </div>
   )
}
