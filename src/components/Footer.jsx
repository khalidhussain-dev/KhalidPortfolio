import { Github, Linkedin, Mail, Heart, ArrowUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, url: 'https://github.com/khalidhussain-dev', label: 'GitHub' },
        { icon: Linkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
        { icon: Mail, url: 'mailto:your.email@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-purple-500/20 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),rgba(255,255,255,0))]"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="animate-float-up stagger-1 space-y-4">
                        <div className="group cursor-pointer">
                            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-600 animate-text-gradient">
                                Khalid Hussain
                            </h3>
                            <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-pink-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
                        </div>
                        <p className="text-slate-300 leading-relaxed animate-blur-in stagger-2 text-sm group-hover:text-slate-200 transition-colors duration-300">
                            Full Stack Developer & AI Specialist crafting innovative solutions for the modern web. Always learning, always building.
                        </p>
                        <div className="flex items-center gap-2 text-slate-400 text-xs pt-2 group-hover:text-slate-300 transition-colors duration-300">
                            <Zap size={14} className="text-yellow-400 animate-pulse" />
                            <span>Available for projects</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-float-up stagger-2" style={{ animationDelay: '0.1s' }}>
                        <h4 className="text-slate-100 font-bold mb-6 flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <span className="w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-500"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {['About', 'Projects', 'Experience', 'Contact'].map((link, idx) => (
                                <li key={link} className="animate-fade-in" style={{ animationDelay: `${0.15 + idx * 0.05}s` }}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-slate-300 hover:text-purple-300 inline-flex items-center gap-2 transition-all duration-300 group text-sm hover:scale-110"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:bg-pink-500 group-hover:scale-150 transition-all duration-300"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="animate-float-up stagger-3" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-slate-100 font-bold mb-6 flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <span className="w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-500"></span>
                            Connect
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={link.label}
                                        className="group w-12 h-12 bg-linear-to-br from-slate-800/50 to-slate-900/50 hover:from-purple-600/50 hover:to-pink-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-purple-500/40 hover:scale-125 hover:-translate-y-1"
                                        style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                                    >
                                        <IconComponent size={20} className="text-slate-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent mb-8"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-2 md:space-y-0">
                        <p className="text-slate-400 text-sm animate-fade-in">
                            © {currentYear} Khalid Hussain. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-xs animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            Designed & Built with <Heart size={14} className="text-red-500 animate-pulse inline mx-1" /> using React & Tailwind CSS
                        </p>
                    </div>

                    {/* Scroll to Top Button */}
                    {showScrollTop && (
                        <button
                            onClick={scrollToTop}
                            className="group w-10 h-10 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-125 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 animate-bounce-in border border-purple-400/50"
                            title="Back to top"
                        >
                            <ArrowUp size={18} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
