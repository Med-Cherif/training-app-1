import React from "react";
import useAuthStore from "../../stores/auth-store";

import { Navigate } from "react-router";

const GuardRoute = ({ children }: { children: React.ReactNode }) => {
  // check if user is auth
  const accessToken = useAuthStore((store) => store.accessToken);

  // return children if auth exists
  if (accessToken) {
    return children;
  }

  // redirect if is not auth
  return <Navigate to="/" replace />;
};

export default GuardRoute;
