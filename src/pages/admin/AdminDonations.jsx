import React, { useEffect, useState } from 'react';
import { dataService } from '../../services/dataService';
import { Heart, DollarSign, Calendar } from 'lucide-react';

const AdminDonations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        setDonations(dataService.getDonations().reverse());
    }, []);

    return (
        <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--color-secondary)' }}>Donation History</h2>

            {donations.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                    <Heart size={48} color="#ccc" style={{ marginBottom: '1rem' }} />
                    <p style={{ color: 'var(--color-text-light)' }}>No donations recorded yet.</p>
                </div>
            ) : (
                <div style={{ overflowX: 'auto', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ background: '#f8f9fa', color: '#666', fontSize: '0.9rem', textAlign: 'left' }}>
                                <th style={{ padding: '1rem' }}>Date</th>
                                <th style={{ padding: '1rem' }}>Donor</th>
                                <th style={{ padding: '1rem' }}>Amount</th>
                                <th style={{ padding: '1rem' }}>Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation.id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Calendar size={14} color="#999" />
                                        {new Date(donation.timestamp).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '500' }}>{donation.payer}</td>
                                    <td style={{ padding: '1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <DollarSign size={14} />
                                            {donation.amount} {donation.currency}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#666' }}>{donation.orderId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDonations;
