import { useEffect, useRef } from 'react';

const Skills = () => {
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

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
            color: "purple"
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "REST APIs", "GraphQL"],
            color: "pink"
        },
        {
            title: "AI & ML",
            skills: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "NLP", "Computer Vision", "Deep Learning"],
            color: "blue"
        },
        {
            title: "Database",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"],
            color: "green"
        },
        {
            title: "DevOps & Tools",
            skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Nginx", "Vercel"],
            color: "orange"
        },
        {
            title: "Other",
            skills: ["Agile", "Testing", "System Design", "Problem Solving", "Team Collaboration"],
            color: "indigo"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300",
            pink: "from-pink-500/20 to-pink-500/5 border-pink-500/30 text-pink-300",
            blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-300",
            green: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-300",
            orange: "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-300",
            indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-300"
        };
        return colors[color] || colors.purple;
    };

    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05),rgba(255,255,255,0))]"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
                        Skills & Technologies
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto animate-blur-in stagger-2">
                        A comprehensive toolkit for building modern, intelligent applications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-scale-in bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 card-hover group"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-purple-300 transition-colors duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-linear-to-r border hover:scale-125 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in item-hover ${getColorClasses(category.color)}`}
                                        style={{ animationDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                                    >
                                        {skill}
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

export default Skills;
