import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"

export const pathRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/dashboard",
    element: <Dashboard />,
  },
]
