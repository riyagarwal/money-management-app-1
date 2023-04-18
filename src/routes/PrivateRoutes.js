import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Outlet />
      ) : (
        <Navigate to={PATHS.LOGIN} />
      )}
    </div>
  )
}

export default PrivateRoutes