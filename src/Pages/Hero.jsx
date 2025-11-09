import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const elements = entry.target.querySelectorAll('.scroll-hero-trigger');
                    if (entry.isIntersecting) {
                        elements.forEach(el => el.classList.add('visible'));
                    } else {
                        elements.forEach(el => el.classList.remove('visible'));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] animate-pulse"></div>

            <div ref={containerRef} className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-white space-y-6 scroll-hero-trigger animate-fade-in">
                        <div className="space-y-3">
                            <p className="text-purple-400 text-lg font-medium animate-slide-in-left stagger-1">Hi, I'm</p>
                            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-slide-in-left stagger-2 animate-text-gradient">
                                Khalid Hussain
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-semibold text-slate-200 animate-slide-in-left stagger-3">
                                Full Stack Developer & AI Specialist
                            </h2>
                        </div>

                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed animate-blur-in stagger-4" style={{ animationDelay: '0.3s' }}>
                            Building intelligent web applications that combine modern development
                            practices with cutting-edge AI technologies. Passionate about creating
                            scalable solutions that make a difference.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 animate-float-up stagger-5" style={{ animationDelay: '0.4s' }}>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover-lift active:scale-95"
                            >
                                View My Work <ArrowRight size={20} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border-2 border-purple-400 hover:border-purple-300 hover:bg-purple-400/20 hover:scale-110 rounded-lg font-semibold hover-lift active:scale-95"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex gap-4 pt-4 animate-float-up stagger-6" style={{ animationDelay: '0.5s' }}>
                            <a
                                href="https://github.com/khalidhussain-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/80 hover:bg-purple-600 hover:scale-125 hover:shadow-xl hover:shadow-purple-500/40 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-400 group transition-all hover-lift"
                            >
                                <Github size={24} className="group-hover:rotate-12" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800/80 hover:bg-purple-600 hover:scale-125 hover:shadow-xl hover:shadow-purple-500/40 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-400 group transition-all hover-lift"
                            >
                                <Linkedin size={24} className="group-hover:rotate-12" />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="p-3 bg-slate-800/80 hover:bg-purple-600 hover:scale-125 hover:shadow-xl hover:shadow-purple-500/40 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-400 group transition-all hover-lift"
                            >
                                <Mail size={24} className="group-hover:rotate-12" />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center scroll-hero-trigger animate-bounce-in stagger-5" style={{ animationDelay: '0.6s' }}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-40 group-hover:opacity-60 animate-pulse"></div>
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-purple-500 to-pink-500 animate-pulse opacity-80 relative z-10 group-hover:scale-110"></div>
                            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 opacity-50 animate-pulse delay-75 group-hover:opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
