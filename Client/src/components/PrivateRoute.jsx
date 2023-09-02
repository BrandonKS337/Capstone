import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({path, children, ...rest}) => {
  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true'; 
  
  return (
    <Route 
      {...rest} 
      path={path} 
      element={ 
        isAuthenticated ? children : <Navigate to="/" replace={true} /> 
      }
    />
  );
};

export default PrivateRoute;
