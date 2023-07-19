import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();


    if (loader) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate state={{ from: location }} to='/login' replace />
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
 * 4. Setup the private router.
 * 5. handle loading
 * 
*/