import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Mission from './pages/Mission';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminMessages from './pages/admin/AdminMessages';
import AdminProjects from './pages/admin/AdminProjects';
import AdminDonations from './pages/admin/AdminDonations';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <div onCopy={(e) => e.preventDefault()}>
        <Routes>
          {/* Admin Routes - No Public Layout */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="messages" element={<AdminMessages />} />
                  <Route path="projects" element={<AdminProjects />} />
                  <Route path="donations" element={<AdminDonations />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          } />

          {/* Public Routes - Wrapped in Layout */}
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/mission" element={<Mission />} />
                {/* Fallback for unknown routes */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
