import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, FolderPlus, LogOut, Heart, Menu, X } from 'lucide-react';
import { dataService } from '../../services/dataService';
import '../../styles/Admin.css';

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        dataService.logout();
        navigate('/admin/login');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/admin/projects', label: 'Our Work', icon: <FolderPlus size={20} /> },
        { path: '/admin/donations', label: 'Donations', icon: <Heart size={20} /> },
        { path: '/admin/messages', label: 'Messages', icon: <Users size={20} /> },
    ];

    return (
        <div className="admin-container">
            {/* Mobile Overlay */}
            <div
                className={`admin-overlay ${isSidebarOpen ? 'open' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="admin-sidebar-header">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Admin Panel</h2>
                        <button
                            className="admin-menu-toggle"
                            onClick={toggleSidebar}
                            style={{ color: 'white', display: isSidebarOpen ? 'block' : 'none' }}
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '5px' }}>Namratagreen Foundation Inc</p>
                </div>

                <nav className="admin-nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.path} className="admin-nav-item">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}
                                    onClick={() => setIsSidebarOpen(false)} // Close on mobile click
                                >
                                    {item.icon}
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button onClick={handleLogout} className="admin-logout-btn">
                    <LogOut size={20} />
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <button className="admin-menu-toggle" onClick={toggleSidebar}>
                        <Menu size={24} />
                    </button>

                    <h1 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', margin: 0 }}>Welcome, Admin</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'auto' }}>
                        <a href="/" target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'var(--color-primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span className="mobile-hidden">Visit Website</span> <FileText size={18} />
                        </a>
                        <button onClick={handleLogout} style={{
                            background: 'none',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            color: 'var(--color-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.9rem'
                        }}>
                            <LogOut size={16} />
                            <span>Logout</span>
                        </button>
                    </div>
                </header>
                <div className="admin-content">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
