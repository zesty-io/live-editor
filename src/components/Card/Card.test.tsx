import React from "react"
import { render, screen } from "@testing-library/react"
import { OutlineCard } from "./Card"
// import { dummydata } from "constants"
const myMock1 = jest.fn()
describe("Outline card", () => {
   beforeEach(() => {
      render(<OutlineCard handleCustomDomain={myMock1} onChange={myMock1} value="" />)
   })
   test("should pass", () => {
      expect(screen.getByText(/Domain Not Valid/)).toBeVisible()
      expect(screen.getByText(/Override Domain/)).toBeInTheDocument()
      expect(
         screen.getByRole("textbox", { name: "Enter WebEngine Domain" }),
      ).toBeInTheDocument()
   })
})
