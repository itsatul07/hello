import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }
  console.log(isLoggedIn);
  // Render the protected component if authenticated
  return children;
};

export default ProtectedRoute; 