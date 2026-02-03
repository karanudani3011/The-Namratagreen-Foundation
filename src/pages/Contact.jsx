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

                    {/* Interactive Google Map */}
                    <div style={{
                        marginTop: '3rem',
                        width: '100%',
                        height: '250px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.8351659345224!2d-106.2570081!3d42.852445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bc210212377b%3A0xc3f17387d5668e27!2s5830%20E%202nd%20St%2C%20Casper%2C%20WY%2082609%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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