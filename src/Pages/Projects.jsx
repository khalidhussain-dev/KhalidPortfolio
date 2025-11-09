import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-scale-in');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    const projects = [
        {
            title: "AI-Powered Chat Application",
            description: "A real-time chat application integrated with OpenAI for intelligent responses, context-aware conversations, and multilingual support.",
            tech: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and AI-powered product recommendations.",
            tech: ["Next.js", "PostgreSQL", "Stripe", "TensorFlow", "AWS"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Computer Vision Analytics",
            description: "Real-time object detection and tracking system for security and surveillance using deep learning models.",
            tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Task Management System",
            description: "Collaborative project management tool with real-time updates, team collaboration features, and automated workflows.",
            tech: ["React", "Express", "MongoDB", "WebSocket", "Redis"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "NLP Text Analyzer",
            description: "Advanced text analysis tool using natural language processing for sentiment analysis, entity recognition, and summarization.",
            tech: ["Python", "Transformers", "Flask", "React", "PostgreSQL"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            title: "Smart Dashboard",
            description: "Data visualization dashboard with predictive analytics and automated reporting using machine learning algorithms.",
            tech: ["Vue.js", "Django", "TensorFlow", "D3.js", "MySQL"],
            github: "https://github.com/khalidhussain-dev",
            live: "#",
            gradient: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),rgba(255,255,255,0))]"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
                        Featured Projects
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto animate-blur-in stagger-2">
                        Some of my recent work showcasing full-stack and AI capabilities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-scale-in bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 card-hover group"
                        >
                            <div className={`h-48 bg-linear-to-br ${project.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-purple-400 transition-colors duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-500 animate-blur-in" style={{ animationDelay: `${index * 0.15 + 0.15}s` }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded hover:bg-purple-600/50 hover:text-purple-200 hover:scale-110 transition-all duration-300 animate-fade-in cursor-pointer"
                                            style={{ animationDelay: `${index * 0.15 + techIndex * 0.05}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/40 text-white rounded-lg text-sm transition-all duration-300 animate-slide-up btn-hover"
                                        style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                                    >
                                        <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 text-white rounded-lg text-sm transition-all duration-300 animate-slide-up btn-hover"
                                        style={{ animationDelay: `${index * 0.15 + 0.25}s` }}
                                    >
                                        <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
