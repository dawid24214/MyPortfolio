import React, { useEffect, useRef } from 'react';
import '../stylle/_projects_section.scss';

const projects = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
        title: 'Projekt 1',
        description: 'Opis projektu 1',
        tags: ['HTML', 'CSS', 'JavaScript'],
        delay: '0s',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1469&q=80',
        title: 'Projekt 2',
        description: 'Opis projektu 2',
        tags: ['React', 'Next.js', 'RWD'],
        delay: '0.1s',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1636&q=80',
        title: 'Projekt 3',
        description: 'Opis projektu 3',
        tags: ['SEO', 'Design', 'Optymalizacja'],
        delay: '0.2s',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80',
        title: 'Projekt 4',
        description: 'Opis projektu 4',
        tags: ['Sklep', 'UI', 'UX'],
        delay: '0.3s',
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1470&q=80',
        title: 'Projekt 5',
        description: 'Opis projektu 5',
        tags: ['Next.js', 'API', 'SSR'],
        delay: '0.4s',
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1464&q=80',
        title: 'Projekt 6',
        description: 'Opis projektu 6',
        tags: ['Portfolio', 'Kontakt', 'Animacje'],
        delay: '0.5s',
    },
];

const ProjectsSection = () => {
    const fadeRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            fadeRefs.current.forEach((el) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title fade-in" ref={(el) => (fadeRefs.current[0] = el)}>
                    Moje <span className="highlight">projekty</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card fade-in"
                            ref={(el) => (fadeRefs.current[index + 1] = el)}
                            style={{ transitionDelay: project.delay }}
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <a href="#" className="project-link">
                                    Zobacz więcej <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
