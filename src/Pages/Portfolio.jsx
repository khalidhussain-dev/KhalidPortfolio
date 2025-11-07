import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Smartphone, Monitor, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import * as THREE from 'three';

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isNavSolid, setIsNavSolid] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const edges = new THREE.EdgesGeometry(geometry);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.8 });
        const wireframe = new THREE.LineSegments(edges, edgeMaterial);
        scene.add(wireframe);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.003;
            mesh.rotation.y += 0.005;
            wireframe.rotation.x += 0.003;
            wireframe.rotation.y += 0.005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavSolid(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            description: 'Full-featured e-commerce platform with payment integration, real-time inventory, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 2,
            title: 'AI Chat Assistant',
            category: 'ai',
            tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
            description: 'Intelligent chatbot using NLP for customer service automation with sentiment analysis.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 3,
            title: 'Mobile Fitness Tracker',
            category: 'mobile',
            tech: ['React Native', 'Firebase', 'Redux'],
            description: 'Cross-platform fitness app with workout tracking, nutrition logging, and social features.',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 4,
            title: 'Desktop Task Manager',
            category: 'desktop',
            tech: ['Electron.js', 'React', 'SQLite'],
            description: 'Productivity app with project management, time tracking, and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 5,
            title: 'Real Estate Portal',
            category: 'web',
            tech: ['PostgreSQL', 'Express', 'React', 'Node.js'],
            description: 'Property listing platform with advanced search, virtual tours, and booking system.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 6,
            title: 'Image Recognition System',
            category: 'ai',
            tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
            description: 'ML-powered image classification and object detection system for inventory management.',
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
            demo: '#',
            code: '#'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc',
            text: 'Khalid delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in MERN stack and attention to detail are remarkable.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
        },
        {
            name: 'Michael Chen',
            role: 'CTO, InnovateLabs',
            text: 'Working with Khalid on our AI integration project was fantastic. He brought innovative solutions and delivered ahead of schedule.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Product Manager, MobileFirst',
            text: 'Khalid\'s React Native skills are top-notch. He built our cross-platform app with incredible performance and beautiful UI.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
        }
    ];

    const skills = [
        { name: 'React.js', icon: '⚛️', category: 'web' },
        { name: 'Node.js', icon: '🟢', category: 'web' },
        { name: 'MongoDB', icon: '🍃', category: 'web' },
        { name: 'PostgreSQL', icon: '🐘', category: 'web' },
        { name: 'React Native', icon: '📱', category: 'mobile' },
        { name: 'Flutter', icon: '🦋', category: 'mobile' },
        { name: 'Electron.js', icon: '⚡', category: 'desktop' },
        { name: 'Python', icon: '🐍', category: 'ai' },
        { name: 'TensorFlow', icon: '🧠', category: 'ai' },
        { name: 'PHP', icon: '🐘', category: 'web' },
        { name: 'Express.js', icon: '🚂', category: 'web' },
        { name: 'SQL', icon: '💾', category: 'web' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavSolid ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            KH
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'ai', 'testimonials', 'contact'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="hover:text-cyan-400 transition-colors capitalize"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800 border-t border-gray-700">
                        {['home', 'about', 'skills', 'projects', 'ai', 'testimonials', 'contact'].map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-700 capitalize"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                                    alt="Khalid Hussain"
                                    className="w-48 h-48 rounded-full mx-auto md:mx-0 border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                                Khalid Hussain
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8">
                                Full Stack Developer | MERN & PERN Specialist | AI & 3D Enthusiast
                            </p>
                            <button
                                onClick={() => window.open('#', '_blank')}
                                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                <Download className="inline-block mr-2" size={20} />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                                alt="Khalid Hussain"
                                className="rounded-lg shadow-2xl shadow-purple-500/20"
                            />
                        </div>

                        <div>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                I'm a passionate Full Stack Developer with expertise in building scalable web applications, mobile solutions, and desktop software. With a strong foundation in MERN and PERN stacks, I create innovative solutions that drive business growth and enhance user experiences.
                            </p>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                My journey in software development has led me to master various technologies including React, Node.js, React Native, Flutter, and Electron.js. I'm particularly enthusiastic about integrating AI and 3D visualizations into modern applications.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: <Code size={24} />, text: 'Full Stack Web' },
                                    { icon: <Smartphone size={24} />, text: 'Mobile Apps' },
                                    { icon: <Monitor size={24} />, text: 'Desktop Apps' },
                                    { icon: <Brain size={24} />, text: 'AI Integration' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                                        <div className="text-cyan-400">{item.icon}</div>
                                        <span className="font-semibold">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
                                <h3 className="text-xl font-bold mb-4 text-cyan-400">Career Milestones</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>🎓 Certified MERN Stack Developer</li>
                                    <li>🏆 5+ Years of Professional Experience</li>
                                    <li>💼 50+ Successful Projects Delivered</li>
                                    <li>⭐ 100% Client Satisfaction Rate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Skills & Technologies
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="group p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-3">{skill.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-400 capitalize mt-2">{skill.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Projects Portfolio
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            { id: 'all', label: 'All Projects' },
                            { id: 'web', label: 'Web Apps' },
                            { id: 'mobile', label: 'Mobile Apps' },
                            { id: 'desktop', label: 'Desktop Apps' },
                            { id: 'ai', label: 'AI Projects' }
                        ].map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                    <div className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30" onClick={e => e.stopPropagation()}>
                        <div className="relative">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8">
                            <h3 className="text-3xl font-bold mb-4 text-cyan-400">{selectedProject.title}</h3>
                            <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                            <div className="mb-6">
                                <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                                >
                                    <ExternalLink className="inline mr-2" size={18} />
                                    View Demo
                                </a>
                                <a
                                    href={selectedProject.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-gray-700 rounded-lg font-semibold text-center hover:bg-gray-600 transition-all"
                                >
                                    <Github className="inline mr-2" size={18} />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section id="ai" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        AI & Innovation Highlights
                    </h2>
                    <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
                        Leveraging cutting-edge AI technologies to create intelligent solutions that transform businesses and enhance user experiences.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.filter(p => p.category === 'ai').map(project => (
                            <div key={project.id} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/30">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-6" />
                                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2 text-purple-400">Key Benefits:</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>✨ Automated workflows saving 80% processing time</li>
                                        <li>🎯 95% accuracy in predictions and classifications</li>
                                        <li>⚡ Real-time processing for instant results</li>
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Client Testimonials
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-gray-800 rounded-xl p-8 md:p-12 border border-cyan-500/20">
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                                <img
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    className="w-20 h-20 rounded-full border-2 border-cyan-400"
                                />
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-cyan-400">{testimonials[currentTestimonial].name}</h3>
                                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                                </div>
                            </div>

                            <p className="text-lg text-gray-300 italic text-center md:text-left">
                                "{testimonials[currentTestimonial].text}"
                            </p>
                        </div>

                        <button
                            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-gray-700 rounded-full hover:bg-cyan-500 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-gray-700 rounded-full hover:bg-cyan-500 transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentTestimonial(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentTestimonial ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                            <p className="text-gray-300 mb-8">
                                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                                        <Mail className="text-cyan-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-gray-100">khalid.hussain@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-500/20 rounded-lg">
                                        <Phone className="text-purple-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p className="text-gray-100">+92 300 1234567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-pink-500/20 rounded-lg">
                                        <MapPin className="text-pink-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-gray-100">Karachi, Pakistan</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="mailto:khalid.hussain@example.com"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-8 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800/50 border-t border-gray-700 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                                Khalid Hussain
                            </h3>
                            <p className="text-gray-400">
                                Full Stack Developer specializing in MERN & PERN stacks, mobile development, and AI integration.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
                            <div className="space-y-2">
                                {['home', 'about', 'skills', 'projects', 'ai', 'testimonials', 'contact'].map(item => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className="block hover:text-cyan-400 transition-colors capitalize"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:khalid.hussain@example.com"
                                    className="p-3 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-all"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Khalid Hussain. All rights reserved.</p>
                        <p className="mt-2 text-sm">Built with React, Three.js & Tailwind CSS</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}