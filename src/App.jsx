import React, { useState } from "react"
import Stack from "@mui/material/Stack"
import { Box, Button, TextField, Typography } from "@mui/material"

const endpoints = {}

function App() {
  const [nameValue, setNameValue] = useState("")
  const [password, setPassword] = useState("")
  const [statusLogin, setStatusLogin] = useState({
    msg: "",
    token: "",
    user: {},
  })
  console.log(nameValue)
  console.log(password)

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

  console.log(handleSubmit())
  console.log(statusLogin)

  //movements

  return (
    <Stack spacing={1} alignItems={"center"}>
      <Typography variant="h4">Log in</Typography>
      <Box
        p={2}
        component={"form"}
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <TextField
          sx={{
            m: 1,
          }}
          id={"text"}
          color="primary"
          label={"Account"}
          type={"Text"}
          required
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
        <TextField
          sx={{
            m: 1,
          }}
          id={"email"}
          color="primary"
          label={"Password"}
          type={"password"}
          required
          onChange={e => setPassword(e.target.value)}
        />
        {/* <TextField
          sx={{
            m: 1,
          }}
          id={"password"}
          color="primary"
          label={"Password"}
          type={"password"}
          required
          value={passwordValue}
          helperText={error.messagePassword}
          onChange={e => setPasswordValue(e.target.value)}
        /> */}

        <Button type="submit">Submit</Button>
      </Box>
    </Stack>
  )
}

export default App
