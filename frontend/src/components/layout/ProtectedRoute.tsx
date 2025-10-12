import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  
  
   if(!auth || !auth.user) return <Navigate to="/login" replace/>

  // if not user go to login first
  // if (!user) return <Navigate to="/login" replace />;
  return children;
}
