import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({children,}: {children: React.ReactNode;}){
  const user = auth.currentUser; // user 에게 정보 요청
  if(!user){
    return <Navigate to="/login" /> // moves user to "login"
  }
  return children
}