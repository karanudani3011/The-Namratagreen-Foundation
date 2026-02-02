import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Heart, Gift, Coffee } from 'lucide-react';

const Donate = () => {
    const [amount, setAmount] = useState("10.00");
    const [message, setMessage] = useState("");
    const [showPayPal, setShowPayPal] = useState(false);

    const handleAmountChange = (val) => {
        setAmount(val);
        setMessage("");
    };

    const initialOptions = {
        "client-id": "test", // Replace with your live client ID
        currency: "USD",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className="container section">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="sectionTitle">Make a Donation</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        Your contribution directly supports our tree planting and community education initiatives.
                    </p>
                </div>

                <div className="donationGrid">
                    {/* Impact Info */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Your Impact</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-md)' }}>
                                <Coffee size={32} color="#f4a261" />
                                <div>
                                    <strong>$10 = 5 Saplings</strong>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Start a small patch of green.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-md)' }}>
                                <Gift size={32} color="#e76f51" />
                                <div>
                                    <strong>$50 = Community Workshop</strong>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Fund tools and seeds for a school.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'var(--bg-section)', borderRadius: 'var(--radius-md)' }}>
                                <Heart size={32} color="#d62828" />
                                <div>
                                    <strong>$100 = 1 Acre Protection</strong>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Guard a forest area for a month.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donation Form */}
                    <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Select Amount</h3>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            {['10.00', '25.00', '50.00', '100.00'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => handleAmountChange(val)}
                                    style={{
                                        flex: '1 1 40%', /* Responsive: grows but starts at ~40% width */
                                        padding: '0.8rem',
                                        border: `2px solid ${amount === val ? 'var(--color-primary)' : '#ddd'}`,
                                        background: amount === val ? 'var(--color-primary)' : 'white',
                                        color: amount === val ? 'white' : 'var(--color-text-main)',
                                        borderRadius: 'var(--radius-md)',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        minWidth: '80px'
                                    }}
                                >
                                    ${parseInt(val)}
                                </button>
                            ))}
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Custom Amount ($)</label>
                            <input
                                type="number"
                                min="1"
                                value={amount}
                                onChange={(e) => handleAmountChange(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>

                        {!showPayPal ? (
                            <button
                                onClick={() => setShowPayPal(true)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    transition: 'transform 0.2s, box-shadow 0.2s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                            >
                                Donate Now
                            </button>
                        ) : (
                            <div className="fade-in-up"> {/* Animation helper class if available, else just a div */}
                                <p style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                                    Complete your donation securely with PayPal
                                </p>
                                <PayPalButtons
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: amount,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            const payerName = details.payer.name.given_name;
                                            setMessage(`Transaction completed by ${payerName}`);

                                            // Save donation details
                                            import('../services/dataService').then(module => {
                                                module.dataService.saveDonation({
                                                    payer: payerName,
                                                    amount: amount,
                                                    currency: "USD",
                                                    orderId: data.orderID
                                                });
                                            });
                                        });
                                    }}
                                />
                            </div>
                        )}

                        {message && (
                            <div style={{ marginTop: '1rem', padding: '1rem', background: '#d8f3dc', color: 'var(--color-primary-dark)', borderRadius: 'var(--radius-sm)' }}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>
    );
};

export default Donate;
