import React from "react"
import { Global } from "@emotion/react"
import style from "./styles"

export default function Layout({ children }) {
  return (
    <>
      <Global styles={style} />
      {children}
    </>
  )
}

