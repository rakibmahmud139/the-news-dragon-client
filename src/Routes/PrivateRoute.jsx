import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/login' />
    }
    return children;
};

export default PrivateRoute;



/***
 * __STEPS__
 * 
 * 1. check user logged in or not
 * 2. If user is logged in . then allow them to visit the route
 * 3. else redirect user to login page
 * 
*/