import React, { useEffect, useState } from 'react';
import { dataService } from '../../services/dataService';
import { Mail, Clock, Trash2 } from 'lucide-react';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = () => {
        setMessages(dataService.getMessages().reverse());
    };

    const handleDelete = (id) => {
        dataService.deleteMessage(id);
        loadMessages();
    };

    return (
        <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--color-secondary)' }}>Contact Messages</h2>

            {messages.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                    <Mail size={48} color="#ccc" style={{ marginBottom: '1rem' }} />
                    <p style={{ color: 'var(--color-text-light)' }}>No messages received yet.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem', width: '100%', maxWidth: '100%' }}>
                    {messages.map((msg) => (
                        <div key={msg.id} style={{
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            borderLeft: '4px solid var(--color-primary)',
                            position: 'relative',
                            overflow: 'hidden' // Prevent internal overflow
                        }}>
                            <button
                                onClick={() => handleDelete(msg.id)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#dc2626',
                                    cursor: 'pointer',
                                    opacity: 0.6,
                                    transition: 'opacity 0.2s',
                                    zIndex: 10
                                }}
                                onMouseOver={(e) => e.target.style.opacity = '1'}
                                onMouseOut={(e) => e.target.style.opacity = '0.6'}
                                title="Delete Message"
                            >
                                <Trash2 size={18} />
                            </button>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem', paddingRight: '2rem' }}>
                                <div style={{ minWidth: '200px' }}>
                                    <h4 style={{ margin: 0, wordBreak: 'break-word' }}>{msg.name}</h4>
                                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', wordBreak: 'break-all' }}>{msg.email}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#999', fontSize: '0.8rem' }}>
                                    <Clock size={14} />
                                    {new Date(msg.timestamp).toLocaleString()}
                                </div>
                            </div>
                            <div style={{ margin: 0, lineHeight: '1.6', background: '#f8f9fa', padding: '1rem', borderRadius: 'var(--radius-md)', wordBreak: 'break-word' }}>
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminMessages;
