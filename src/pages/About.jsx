import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="sectionTitle">Who We Are</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    Namratagreen Foundation is a non-profit organization dedicated to fostering a sustainable relationship between humanity and nature.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1552083858-5847641f303c?auto=format&fit=crop&w=800&q=80"
                        alt="Our Team"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Our Story</h2>
                    <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                        Founded in 2026, we started as a small group of volunteers planting trees on weekends. Today, we are a global movement with thousands of members committed to reforestation and environmental education.
                    </p>
                    <p style={{ lineHeight: '1.8' }}>
                        We believe that every seed planted is a promise for a better tomorrow. Our approach combines traditional ecological knowledge with modern conservation science to ensure high survival rates for our plantations.
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                <Link to="/mission#mission" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="hover-card" style={{ padding: '2rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', height: '100%', cursor: 'pointer', transition: 'transform 0.3s' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Target size={32} color="var(--color-primary)" />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
                        <p>To restore degraded lands and promote sustainable living practices across communities. <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Read More →</span></p>
                    </div>
                </Link>

                <Link to="/mission#vision" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="hover-card" style={{ padding: '2rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', height: '100%', cursor: 'pointer', transition: 'transform 0.3s' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Globe size={32} color="var(--color-primary)" />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
                        <p>A world where people and nature thrive together in harmony. <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Read More →</span></p>
                    </div>
                </Link>

                <Link to="/mission#values" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="hover-card" style={{ padding: '2rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', height: '100%', cursor: 'pointer', transition: 'transform 0.3s' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Users size={32} color="var(--color-primary)" />
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>Our Values</h3>
                        <p>Integrity, transparency, and deep respect for all forms of life. <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Read More →</span></p>
                    </div>
                </Link>
            </div>

            <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                <h2 className="sectionTitle" style={{ marginBottom: '3rem' }}>Our Leadership</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Founder Card */}
                    <div className="hover-card" style={{ padding: '2.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', transition: 'transform 0.3s' }}>
                        <div style={{ width: '100px', height: '100px', background: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#64748b' }}>
                            MA
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>Mahendra Ayalani</h3>
                        <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '1rem' }}>Founder / President / Secretary</p>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                            <p style={{ marginBottom: '0.5rem' }}>+91 820 001 2906</p>
                            <p>msayalani17@gmail.com</p>
                        </div>
                    </div>

                    {/* Treasurer Card */}
                    <div className="hover-card" style={{ padding: '2.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', transition: 'transform 0.3s' }}>
                        <div style={{ width: '100px', height: '100px', background: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#64748b' }}>
                            PD
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>Popat Dharmesh</h3>
                        <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '1rem' }}>Treasurer</p>
                    </div>

                    {/* Vice President Card */}
                    <div className="hover-card" style={{ padding: '2.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-lg)', transition: 'transform 0.3s' }}>
                        <div style={{ width: '100px', height: '100px', background: '#e2e8f0', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#64748b' }}>
                            KV
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>Kajal Vala</h3>
                        <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '1rem' }}>Vice President</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
