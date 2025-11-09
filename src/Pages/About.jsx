import { Code2, Brain, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
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
    return (
        <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.05),rgba(255,255,255,0))]"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                        A passionate developer combining full-stack expertise with AI innovation
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="scroll-trigger scroll-scale-in bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 card-hover group">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/40 transition-all duration-500 icon-rotate">
                            <Code2 className="text-purple-400 transition-colors duration-500" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-purple-400 transition-colors duration-500">Full Stack Development</h3>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                            Experienced in building robust web applications using modern frameworks like React,
                            Node.js, and databases. Creating seamless user experiences from front-end to back-end.
                        </p>
                    </div>

                    <div className="scroll-trigger scroll-scale-in bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 card-hover group scroll-stagger-1">
                        <div className="w-16 h-16 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-500/40 transition-all duration-500 icon-rotate">
                            <Brain className="text-pink-400 transition-colors duration-500" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-pink-400 transition-colors duration-500">AI & Machine Learning</h3>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                            Specialized in implementing AI solutions, including machine learning models,
                            natural language processing, and computer vision to solve real-world problems.
                        </p>
                    </div>

                    <div className="scroll-trigger scroll-scale-in bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 card-hover group scroll-stagger-2">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/40 transition-all duration-500 icon-rotate">
                            <Rocket className="text-blue-400 transition-colors duration-500" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors duration-500">Innovation & Growth</h3>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                            Constantly learning and adapting to new technologies. Focused on delivering
                            scalable, efficient solutions that drive business value and user satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
