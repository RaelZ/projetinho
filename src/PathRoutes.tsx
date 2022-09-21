import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"
import { pathRoutes } from "./routes"

const PathRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route element={<Layout />}>
        {pathRoutes.map((route) => (
          <Route key={route.id} element={route.element} path={route.path} />
        ))}
      </Route>
    </Routes>
  )
}

export default PathRoutes
