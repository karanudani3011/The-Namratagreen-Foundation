import React from 'react';
import { Navigate } from 'react-router-dom';
import { dataService } from '../../services/dataService';

const ProtectedRoute = ({ children }) => {
    if (!dataService.isAuthenticated()) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
