import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Heart } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="heroContent">
                    <h1 className="heroTitle">Plant a Tree, Save the Future</h1>
                    <p className="heroSubtitle">
                        Join the Namratagreen Foundation in our mission to restore forests, protect wildlife, and create a sustainable planet for generations to come.
                    </p>
                    <div className="heroButtons">
                        <Link to="/donate" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
                            Donate Now
                        </Link>
                        <Link to="/our-work" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
                            Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Brief */}
            <section className="missionSection container">
                <h2 className="sectionTitle">Our Impact</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    We believe in transparent, tangible impact. With your help, we are turning barren lands into lush green forests.
                </p>

                <div className="statsGrid">
                    <div className="statItem">
                        <span className="statNumber">50K</span>
                        <span>Trees Planted</span>
                    </div>
                    <div className="statItem">
                        <span className="statNumber">20+</span>
                        <span>Projects Completed</span>
                    </div>
                    <div className="statItem">
                        <span className="statNumber">20</span>
                        <span>Volunteers</span>
                    </div>
                    { /*<div className="statItem">
                        <span className="statNumber"></span>
                        <span>States Covered</span>
                    </div>*/}
                </div>
            </section>

            {/* Focus Areas
            <section className="section" style={{ backgroundColor: 'var(--bg-section)' }}>
                <div className="container">
                    <h2 className="sectionTitle" style={{ textAlign: 'center' }}>Our Focus Areas</h2>
                    <div className="featuresGrid">
                        <div className="featureCard" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80')" }}>
                            <div className="featureContent">
                                <h3>Sustainable Agriculture</h3>
                                <p>Empowering farmers with agroforestry techniques that boost crop yields while restoring soil health and sequestering carbon.</p>
                            </div>
                        </div>
                        <div className="featureCard" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80')" }}>
                            <div className="featureContent">
                                <h3>Wildlife Protection</h3>
                                <p>Safeguarding endangered species and restoring natural habitats to maintain ecological balance.</p>
                            </div>
                        </div>
                        <div className="featureCard" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80')" }}>
                            <div className="featureContent">
                                <h3>Water Conservation</h3>
                                <p>Implementing rainwater harvesting and watershed management to ensure tree survival and community water security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}

            {/* Call to Action */}
            <section className="section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
                <div className="container">
                    <Heart size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                    <h2 className="sectionTitle">Ready to Make a Difference?</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        Every contribution counts. Whether you donate, volunteer, or spread the word, you are part of the solution.
                    </p>
                    <Link to="/contact" className="btn btn-outline" style={{ marginRight: '1rem' }}>
                        Volunteer
                    </Link>
                    <Link to="/donate" className="btn btn-primary">
                        Donate Today <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
