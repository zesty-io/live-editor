import React from "react"
import { render, screen } from "@testing-library/react"
import { ZestyExplorer } from "components"

describe("content is not present", () => {
   beforeEach(() => {
      render(<ZestyExplorer />)
   })
   it("show loading", () => {
      const heading = screen.getByTestId("miniLoading")
      expect(heading).toBeTruthy()
   })
})
