import React from "react"
import { render, screen } from "@testing-library/react"
import { ZestyExplorer } from "components"
// import { dummydata } from "constants"

describe("content is not present", () => {
   beforeEach(() => {
      render(<ZestyExplorer />)
   })
   it("show loading", () => {
      const heading = screen.getByTestId("miniLoading")
      expect(heading).toBeTruthy()
   })
})

// describe("content is not present", () => {
//    beforeEach(() => {
//       render(<ZestyExplorer content={dummydata} />)
//    })
//    it("show loading", async () => {
//       const heading = screen.getByTestId("miniLoading")
//       expect(heading).toBeTruthy()
//       await new Promise((r) => setTimeout(r, 3000))

//       const heading1 = screen.getByTestId("")
//       expect(heading1).toBeTruthy()
//    })
// })
