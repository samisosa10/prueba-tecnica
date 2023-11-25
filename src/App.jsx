import React, { useState } from "react"
import Stack from "@mui/material/Stack"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Link, Route, Router, Routes } from "react-router-dom"
import Login from "./Login"
import { UserComponents } from "./User"
import Layout from "./Layout"

const endpoints = {}

function App() {
  const [nameValue, setNameValue] = useState("")
  const [password, setPassword] = useState("")
  const [statusLogin, setStatusLogin] = useState({
    msg: "",
    token: "",
    user: {},
  })

  // LOGIN
  const handleSubmit = async e => {
    e.preventDefault()
    const rsp = await fetch("https://bank.jedidiazfagundez.site/api/login", {
      method: "POST",
      body: JSON.stringify({
        account: nameValue,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    const rsp_1 = await rsp.json()
    return setStatusLogin({
      msg: rsp_1.msg,
      token: rsp_1.token,
      user: rsp_1.user,
    })
  }

  //movements

  return (
    <Stack>
      <Login
        nameValue={nameValue}
        setNameValue={setNameValue}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </Stack>
  )
}

export default App
