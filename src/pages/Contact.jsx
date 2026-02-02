import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { dataService } from '../services/dataService';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        const newMessage = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        try {
            dataService.saveMessage(newMessage);
            dataService.saveMessage(newMessage);
            alert("Thank you! Your message has been sent successfully.");
            navigate('/');
        } catch (error) {
            console.error("Error saving message:", error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="sectionTitle">Get in Touch</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Have questions or want to volunteer? We'd love to hear from you.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {/* Contact Info */}
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Contact Information</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%' }}>
                                <MapPin size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Our Office</h4>
                                <p style={{ opacity: 0.8 }}>5830 E 2ND STE 7000 #32064 CASPER WY 82609 US </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%' }}>
                                <Phone size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Phone</h4>
                                <p style={{ opacity: 0.8 }}>+91 820 001 2906</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ background: 'var(--color-accent)', padding: '10px', borderRadius: '50%' }}>
                                <Mail size={24} color="var(--color-primary)" />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>

                                <p style={{ opacity: 0.8 }}>Info@namrtagreen.org</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div style={{ marginTop: '3rem', width: '100%', height: '250px', background: '#eee', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: '#999' }}>Google Map Placeholder</p>
                    </div>
                </div>

                {/* Form */}
                <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontSize: '1rem' }}
                                placeholder="Your Name"
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontSize: '1rem' }}
                                placeholder="Your Email"
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontSize: '1rem', fontFamily: 'inherit' }}
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            <Send size={20} style={{ marginRight: '0.5rem' }} /> Send Message
                        </button>
                    </form>
                    {status && (
                        <div style={{
                            marginTop: '1rem',
                            textAlign: 'center',
                            color: status.type === 'success' ? 'var(--color-primary)' : '#dc2626',
                            background: status.type === 'success' ? '#e6fffa' : '#fee2e2',
                            padding: '10px',
                            borderRadius: '4px'
                        }}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
