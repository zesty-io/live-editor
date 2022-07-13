import React from "react"
import { render, screen } from "@testing-library/react"
import { LocalAuthForm } from "./LocalAuthForm"
// import { dummydata } from "constants"
const myMock1 = jest.fn()
describe("LocalAuth card", () => {
   beforeEach(() => {
      render(<LocalAuthForm setlocalLogin={myMock1} settoken={myMock1} />)
   })
   test("should pass", () => {
      expect(screen.getByText(/Please Login/)).toBeVisible()
      expect(screen.getByRole("textbox", { name: "Email Password" })).toBeInTheDocument()
   })
})
