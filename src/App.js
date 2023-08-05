import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const UserRoutes = React.lazy(() => import("./routes/UserRoutes"));

export default function App() {
  return (
    <div>
      <UserRoutes />
      <ToastContainer />

    </div>
  )
}
