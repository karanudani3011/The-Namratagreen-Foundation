import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { ArrowLeft, MapPin } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projects = dataService.getProjects();
        // Ensure type matching (id from URL is string, project.id might be number)
        const foundProject = projects.find(p => p.id.toString() === id);

        if (foundProject) {
            setProject(foundProject);
        } else {
            navigate('/our-work'); // Redirect if not found
        }
    }, [id, navigate]);

    if (!project) return null;

    return (
        <div className="container section">
            <Link to="/our-work" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Projects
            </Link>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '2rem' }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                    <MapPin size={20} />
                    <span style={{ fontWeight: '600' }}>{project.location}</span>
                </div>

                <h1 className="sectionTitle" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{project.title}</h1>

                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                    {project.details ? (
                        project.details.split('\n').map((paragraph, idx) => (
                            <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                        ))
                    ) : (
                        <p>{project.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
