import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { dataService } from '../../services/dataService';

const Dashboard = () => {
    const [stats, setStats] = useState({
        projects: 0,
        messages: 0,
        donations: 0
    });

    useEffect(() => {
        setStats({
            projects: dataService.getProjects().length,
            messages: dataService.getMessages().length,
            donations: dataService.getDonations().length
        });
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-secondary)' }}>Dashboard Overview</h2>
                <button
                    onClick={dataService.exportData}
                    className="btn btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <Download size={18} /> Export Data
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTop: '4px solid var(--color-primary)'
                }}>
                    <h3 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>{stats.projects}</h3>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Active Projects</p>
                </div>

                <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTop: '4px solid var(--color-accent)'
                }}>
                    <h3 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', color: 'var(--color-accent)' }}>{stats.messages}</h3>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Contact Messages</p>
                </div>
                {/* <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderTop: '4px solid #e76f51'
                }}>
                    <h3 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', color: '#e76f51' }}>{stats.donations}</h3>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>Total Donations</p>
                </div> */}
            </div>

            <div style={{ marginTop: '3rem', background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Quick Tip</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                    Welcome to your local admin panel! All changes are saved to your browser's storage.
                    Because this is running locally without a backend server, make sure to use the
                    <strong> Export Data</strong> button regularly to backup your projects and messages to your computer.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
