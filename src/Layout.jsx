import { Link } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/movements">Account</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default Layout
