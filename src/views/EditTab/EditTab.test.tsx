import React from "react"
import { render, screen } from "@testing-library/react"
import { EditTab } from "./EditTab"
import { dummydata } from "constants/index"
// import { dummydata } from "constants"
const myMock1 = jest.fn()

const EditProps = {
   content: dummydata,
   theme: "",
   metaData: "",
   data: dummydata,
   url: "",
   token: "",
   getFinalData: myMock1,
   scrollPos: 0,
   scrollEvent: myMock1,
   getData: myMock1,
   setloading: myMock1,
   response: "",
   modal: false,
   onClose: myMock1,
   openModal: myMock1,
}

describe("Edit Tab", () => {
   beforeEach(() => {
      render(<EditTab {...EditProps} />)
   })
   test("should pass", () => {
      expect(screen.getByText(/Field Name/)).toBeVisible()
      expect(screen.getByText(/Content Example/)).toBeInTheDocument()
      expect(screen.getByText(/Edit Now!/)).toBeInTheDocument()
      expect(screen.getByText(/Edit Schema/)).toBeInTheDocument()
      expect(screen.getByText(/Edit Content/)).toBeInTheDocument()
      expect(screen.getByText(/Edit Permission/)).toBeInTheDocument()
   })
})
