import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import React from "react"
import { UserComponents } from "./User"

function Login({ nameValue, setNameValue, setPassword, handleSubmit,  }) {
  console.log(nameValue)
  const UserComponents = ({ user }) => {
    return (
      <Stack>
        <Typography variant="body1">{user.name}</Typography>
        <Typography variant="body1">{user.account}</Typography>
        <Typography variant="body1">{user.money}</Typography>
      </Stack>
    )
  }
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

        <Button type="submit">Submit</Button>
      </Box>
      <UserComponents />
    </Stack>
  )
}

export default Login
