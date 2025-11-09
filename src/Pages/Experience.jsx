import { Briefcase, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Experience = () => {
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

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-fade-in-left');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            period: "2023 - Present",
            description: [
                "Led development of AI-integrated web applications serving 100K+ users",
                "Architected and implemented microservices infrastructure using Node.js and Docker",
                "Mentored junior developers and conducted code reviews",
                "Reduced application load time by 40% through optimization"
            ],
            technologies: ["React", "Node.js", "Python", "AWS", "TensorFlow"]
        },
        {
            title: "Full Stack Developer & AI Engineer",
            company: "Digital Solutions Ltd.",
            period: "2021 - 2023",
            description: [
                "Developed machine learning models for predictive analytics",
                "Built RESTful APIs and integrated third-party services",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Collaborated with cross-functional teams in Agile environment"
            ],
            technologies: ["Vue.js", "Express", "PyTorch", "MongoDB", "Docker"]
        },
        {
            title: "Junior Full Stack Developer",
            company: "StartUp Ventures",
            period: "2020 - 2021",
            description: [
                "Contributed to full-stack development of multiple client projects",
                "Implemented responsive UI components using React and Tailwind CSS",
                "Developed backend services with Node.js and PostgreSQL",
                "Participated in daily standups and sprint planning"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Git", "REST APIs"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),rgba(255,255,255,0))]"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
                        Experience
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto animate-blur-in stagger-2">
                        My professional journey in software development
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-fade-in-left bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] hover-glow transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div className="animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                                    <h3 className="text-2xl font-bold text-slate-100 mb-2 flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
                                        <Briefcase className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" size={24} />
                                        {exp.title}
                                    </h3>
                                    <p className="text-purple-400 text-lg font-semibold animate-text-gradient">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 mt-2 md:mt-0 animate-slide-up" style={{ animationDelay: `${index * 0.2 + 0.15}s` }}>
                                    <Calendar size={18} className="animate-bounce" style={{ animationDelay: `${index * 0.2 + 0.2}s` }} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-2 mb-4 text-slate-300">
                                {exp.description.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2 leading-relaxed animate-blur-in" style={{ animationDelay: `${index * 0.2 + itemIndex * 0.05 + 0.1}s` }}>
                                        <span className="text-purple-400 mt-1 animate-pulse">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30 hover:bg-purple-500/40 hover:text-purple-200 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 animate-fade-in cursor-pointer"
                                        style={{ animationDelay: `${index * 0.2 + techIndex * 0.05 + 0.2}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
