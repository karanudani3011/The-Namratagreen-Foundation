import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mno: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, mno, message } = formData;

        if (!name || !email || !mno || !message) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        try {
            setLoading(true);

            await axios.post(
                'https://backend-the-namratagreen-foundation.vercel.app/api/v1/contectus',
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent.'
            });
        } catch (error) {
            console.error(error.response?.data || error.message);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1>Get in Touch</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                    Have questions or want to volunteer? We'd love to hear from you.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem'
            }}>

                {/* CONTACT INFO */}
                <div>
                    <h3>Contact Information</h3>

                    <div style={{ marginTop: '2rem' }}>
                        <p><MapPin size={18} /> 5830 E 2ND STE 7000 #32064 CASPER WY 82609 US</p>
                        <p><Phone size={18} /> +91 820 001 2906</p>
                        <p><Mail size={18} /> info@namrtagreen.org</p>
                    </div>

                    <div style={{ marginTop: '2rem', height: '250px' }}>
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps?q=5830+E+2nd+St+Casper+WY+82609&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <div style={{
                    background: '#fff',
                    padding: '2.5rem',
                    borderRadius: '8px'
                }}>
                    <h3>Send us a Message</h3>

                    <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="text"
                            name="mno"
                            placeholder="Your Mobile Number"
                            value={formData.mno}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="How can we help?"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ ...inputStyle, resize: 'none' }}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: '#16a34a',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {loading ? 'Sending...' : (
                                <>
                                    <Send size={18} style={{ marginRight: '6px' }} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>

                    {status && (
                        <div style={{
                            marginTop: '1rem',
                            padding: '10px',
                            textAlign: 'center',
                            color: status.type === 'success' ? 'green' : 'red'
                        }}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
};

export default Contact;
