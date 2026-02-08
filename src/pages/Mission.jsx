import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Mission = () => {
    const { hash } = useLocation();

    // Scroll to section based on URL hash
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="sectionTitle">Mission, Vision & Values</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    The core principles that guide every action we take at the Namratagreen Organization.
                </p>
            </div>

            {/* Mission Section */}
            <div id="mission" style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '2rem', scrollMarginTop: '100px' }}>
                <div style={{ padding: '2rem', borderLeft: '5px solid var(--color-primary)', background: '#f8f9fa', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
                    <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        To vigorously restore degraded ecosystems, empower local communities through sustainable education, and create a lasting green footprint across the globe. We aim to bridge the gap between urban development and environmental preservation.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>✓</span>
                            Planting 1 million trees by 2030.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>✓</span>
                            Educating 50,000 students on environmental stewardship.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>✓</span>
                            Rehabilitating 500 acres of barren land.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Vision Section */}
            <div id="vision" style={{ marginBottom: '5rem', scrollMarginTop: '100px' }}>
                <h2 style={{ textAlign: 'center', color: 'var(--color-primary-dark)', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Vision</h2>
                <div style={{
                    position: 'relative',
                    padding: '4rem 2rem',
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1518173946637-4366d631248d?auto=format&fit=crop&w=1200&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '1.8rem', fontStyle: 'italic', fontWeight: '300', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
                        "A world where every individual understands their connection to the earth and acts as a guardian of nature, ensuring a thriving planet for generations to come."
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div id="values" style={{ scrollMarginTop: '100px' }}>
                <h2 style={{ color: 'var(--color-secondary)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Our Core Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: "Integrity", desc: "We operate with complete honesty and transparency in all our initiatives and financial dealings." },
                        { title: "Compassion", desc: "We genuinely care for all living beings, from the smallest insect to the largest communities." },
                        { title: "Collaboration", desc: "We believe real change happens when we work together with governments, locals, and partners." },
                        { title: "Innovation", desc: "We constantly seek new, science-backed methods to improve our ecological impact." }
                    ].map((value, index) => (
                        <div key={index} style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center',
                            borderTop: '5px solid var(--color-accent)'
                        }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>{value.title}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mission;
