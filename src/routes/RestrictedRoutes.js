import { Navigate, Outlet } from "react-router-dom"

const RestrictedRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Navigate to={PATHS.MANAGE_EXPENSE} />
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default RestrictedRoutes