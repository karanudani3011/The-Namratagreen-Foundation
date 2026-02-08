import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'var(--color-primary-dark)',
        color: 'white',
        padding: '4rem 0 2rem',
        marginTop: 'auto'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
    };

    return (
        <footer style={footerStyle}>
            <div className="container" style={gridStyle}>
                <div>
                    <h3 style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Leaf size={20} /> Namrtagreen
                    </h3>
                    <p style={{ opacity: 0.8, marginTop: '1rem' }}>
                        Dedicated to planting trees and restoring nature for a sustainable future.
                        Join us in making the world greener, one tree at a time.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: 'white' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/about" style={{ opacity: 0.8 }}>About Us</Link></li>
                        <li><Link to="/our-work" style={{ opacity: 0.8 }}>Our Projects</Link></li>
                        <a href='https://buymeacoffee.com/namrtagreen' >
                            Donate Now
                        </a>
                        <li><Link to="/terms" style={{ opacity: 0.8 }}>Terms & Privacy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'white' }}>Contact Info</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', opacity: 0.8 }}>
                            <MapPin size={20} />
                            <span>5830 E 2ND STE 7000 #32064 CASPER WY 82609 US </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', opacity: 0.8 }}>
                            <Phone size={20} />
                            <span>+91 820 001 2906 </span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', opacity: 0.8 }}>
                            <Mail size={20} />
                            <span>Info@namrtagreen.org</span>
                        </li>
                    </ul>
                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="https://www.linkedin.com/in/mahendra-ayalani-62378b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/namrtagreen___foundation?igsh=MTdoajl2bzNzYzZwbA==" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=918200012906&text=Hello%20Namrata%20Green%20Foundation"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
                                onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                                onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
                            </a>
                            {/*   <a
                                href="https://twitter.com/YourUsername"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a> */}

                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()}  Namrtagreen Organization Inc. All rights reserved.
                </p>
            </div>
        </footer >
    );
};

export default Footer;
