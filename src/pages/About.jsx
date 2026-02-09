import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="sectionTitle">Who We Are</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                  The Namrtagreen Organization Inc. is a non-profit organization dedicated to fostering a sustainable relationship between humanity and nature.
                </p>
            </div>

            <div style={{ marginBottom: "6rem" }}>
                <h2
                    style={{
                        color: "var(--color-primary-dark)",
                        marginBottom: "1.5rem " , padding: "1.50rem" 
                    }}
                >
                    <b>Our Story & Global Vision</b>
                </h2>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ <strong>The Namrtagreen Organization Inc.</strong> is a dedicated non-profit
                    entity based in the United States, led by our President,
                    <strong> Mahendra Ayalani</strong>. The organization serves as an
                    international extension of the impactful social work carried out in India
                    through the <strong>Namrtagreen Foundation</strong>. Our mission is to bridge
                    global resources with grassroots social impact, ensuring sustainable and
                    meaningful change in communities.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ Our roots are deeply embedded in community service across India. Through the
                    Namrtagreen Foundation, we actively engage in a wide range of philanthropic
                    initiatives designed to uplift underserved communities and preserve social
                    and cultural values.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ In the area of <strong>social welfare and traditions</strong>, we organize
                    Mass Marriage (<em>Samuh Lagan</em>) ceremonies to help underprivileged
                    couples begin their lives with dignity and community support.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ Our efforts in <strong>education and spirituality</strong> include the
                    Shrimad Bhagavad Gita Gyan Kasoti, an initiative aimed at nurturing moral
                    values, spiritual wisdom, and cultural awareness among the youth.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ To support <strong>child nutrition and wellbeing</strong>, we regularly
                    organize Batuk Bhojan programs—community meals for children—in Government
                    Schools, helping ensure access to nutritious food and a healthier future.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ Our <strong>health and relief initiatives</strong> include Free Sharbat
                    Distribution during extreme summer conditions and Free Blanket and Clothes
                    Distribution drives during winter, providing immediate relief to those in
                    need.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem" }}>
                    ➤ We also believe in <strong>empowering talent and cultural expression</strong>.
                    Through activities such as Mehendi Competitions, we create platforms for
                    local artists and individuals to showcase their skills, creativity, and
                    cultural heritage.
                </p>

                <p style={{ marginBottom: "1rem", lineHeight: "1.8" , padding: "1.50rem"}}>
                    ➤ The organization is guided by the visionary leadership of
                    <strong> Mahendra Ayalani</strong>, who oversees both The Namrtagreen
                    Organization Inc. (USA) and the Namrtagreen Foundation (India). In India, our
                    mission is further strengthened by committed leaders such as
                    <strong> Rahul Makadia</strong>, Junagadh District President, and
                    <strong> Kajal Vala</strong>, President of Mahila Morcha.
                </p>

                <p style={{ lineHeight: "1.8" , padding: "1.50rem"}}>
                    ➤ By establishing a presence in the United States, we are committed to
                    upholding international standards of <strong>transparency, efficiency, and
                        accountability</strong>. Every contribution and effort is directed toward
                    creating long-lasting positive change and building a more compassionate,
                    inclusive, and sustainable society.
                </p>
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
