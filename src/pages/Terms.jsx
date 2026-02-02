import React from 'react';

const Terms = () => {
    return (
        <div className="container section">
            <h1 className="sectionTitle">Terms and Conditions</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1rem' }}>Last updated: January 2026</p>
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
                <p>Welcome to The Namratagreen Foundation website. By accessing this website we assume you accept these terms and conditions.</p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Use of License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on The Namratagreen Foundation's website for personal, non-commercial transitory viewing only.</p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Privacy Policy</h3>
                <p>Your privacy is important to us. It is The Namratagreen Foundation's policy to respect your privacy regarding any information we may collect from you across our website.</p>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Donations</h3>
                <p>All donations are voluntary and non-refundable. We ensure that your funds are used for the stated purposes of tree plantation and environmental conservation.</p>
            </div>
        </div>
    );
};

export default Terms;
