import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Logout() {
	localStorage.removeItem('token');
	return <Navigate to="/" />;
}
