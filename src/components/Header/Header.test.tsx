import React from "react"
import { render, screen } from "@testing-library/react"
import { Headers } from "components"
import { dummydata, tabList } from "constants/index"

const mock = jest.fn()
const HeaderProps = {
   content: dummydata,
   response: {},
   setcurrentTab: mock,
   tabList,
   settime: mock,
   modal: false,
   token: "",
   setlocalLogin: mock,
   settoken: mock,
   isLocalContent: true,
   children: <></>,
}
describe("HEaders", () => {
   beforeEach(() => {
      render(<Headers {...HeaderProps} />)
   })
   it("show login btn when local content and not login ", () => {
      const loginBtn = screen.queryByTestId("localLoginBtn")
      expect(loginBtn).toBeTruthy()
   })

   it("hide logout btn  when local content and not login ", () => {
      const logoutBtn = screen.queryByTestId("localLogoutBtn")
      expect(logoutBtn).toBeNull()
   })
})

const HeaderProps1 = {
   content: dummydata,
   response: {},
   setcurrentTab: mock,
   tabList,
   settime: mock,
   modal: false,
   token: "true",
   setlocalLogin: mock,
   settoken: mock,
   isLocalContent: true,
   children: <></>,
}
describe("HEaders", () => {
   beforeEach(() => {
      render(<Headers {...HeaderProps1} />)
   })
   it("hide login btn when local content and logined ", () => {
      const loginBtn = screen.queryByTestId("localLoginBtn")
      expect(loginBtn).toBeNull()
   })
   it("show logout btn when  local content and logined ", () => {
      const logoutBtn = screen.queryByTestId("localLogoutBtn")
      expect(logoutBtn).toBeTruthy()
   })
})
