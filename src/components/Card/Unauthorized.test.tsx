import React from "react"
import { render, screen } from "@testing-library/react"
import { UnauthorizedCard } from "./Unauthorized"
// import { dummydata } from "constants"
const myMock1 = jest.fn()
describe("Unauth card", () => {
   beforeEach(() => {
      render(
         <UnauthorizedCard handleCustomDomain={myMock1} onChange={myMock1} value="" />,
      )
   })
   test("should pass", () => {
      expect(screen.getByText(/Misconfigures Settings/)).toBeVisible()
      expect(screen.getByText(/Enter Secret Key/)).toBeVisible()
      expect(
         screen.getByRole("textbox", { name: "Enter WebEngine Domain" }),
      ).toBeInTheDocument()
   })
})
