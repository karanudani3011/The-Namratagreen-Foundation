import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { dataService } from '../services/dataService';

const OurWork = () => {
    const [projects, setProjects] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const locationFilter = queryParams.get('location');

        const updateProjects = () => {
            let allProjects = dataService.getProjects();
            if (locationFilter) {
                // Case-insensitive comparison just in case
                allProjects = allProjects.filter(p => p.location.toLowerCase() === locationFilter.toLowerCase());
            }
            setProjects(allProjects);
        };

        // Initial load
        updateProjects();

        window.addEventListener('storage', updateProjects);
        return () => window.removeEventListener('storage', updateProjects);
    }, [location.search]);

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="sectionTitle">Our Work</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    From local community drives to large-scale reforestation, we are active on multiple fronts.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <Link to={`/our-work/${project.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-md)',
                            background: 'white',
                            transition: 'transform 0.3s',
                            height: '100%'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: '600' }}>{project.location}</span>
                                <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default OurWork;
