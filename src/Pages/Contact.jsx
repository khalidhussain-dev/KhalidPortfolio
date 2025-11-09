import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., EmailJS, API call)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-fade-in-left, .scroll-fade-in-right');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.05),rgba(255,255,255,0))]"></div>

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
                        Get In Touch
                    </h2>
                    <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto animate-blur-in stagger-2">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8 scroll-fade-in-left">
                        <div className="scroll-trigger animate-slide-up stagger-1">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6 animate-text-gradient">Let's Connect</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed animate-blur-in stagger-2">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="scroll-trigger scroll-fade-in-left flex items-start gap-4 group p-4 rounded-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:bg-purple-500/40 group-hover:rotate-12 transition-all duration-300">
                                    <Mail className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-semibold mb-1">Email</h4>
                                    <a href="mailto:your.email@example.com" className="text-slate-300 hover:text-purple-400 hover:underline transition-colors duration-300">
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="scroll-trigger scroll-fade-in-left flex items-start gap-4 group p-4 rounded-lg transition-all duration-300 scroll-stagger-1">
                                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:bg-pink-500/40 group-hover:rotate-12 transition-all duration-300">
                                    <Phone className="text-pink-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-semibold mb-1">Phone</h4>
                                    <a href="tel:+1234567890" className="text-slate-300 hover:text-pink-400 hover:underline transition-colors duration-300">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="scroll-trigger scroll-fade-in-left flex items-start gap-4 group p-4 rounded-lg transition-all duration-300 scroll-stagger-2">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:bg-blue-500/40 group-hover:rotate-12 transition-all duration-300">
                                    <MapPin className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-100 font-semibold mb-1">Location</h4>
                                    <p className="text-slate-300">
                                        Your City, Country
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-trigger scroll-fade-in-right bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/40 hover-glow transition-all duration-500 stagger-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="animate-fade-in stagger-3">
                                <label htmlFor="name" className="block text-slate-100 font-medium mb-2 animate-blur-in">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 hover:border-slate-600 transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="animate-fade-in stagger-4">
                                <label htmlFor="email" className="block text-slate-100 font-medium mb-2 animate-blur-in">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 hover:border-slate-600 transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="animate-fade-in stagger-5">
                                <label htmlFor="message" className="block text-slate-100 font-medium mb-2 animate-blur-in">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 hover:border-slate-600 resize-none transition-all duration-300"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 animate-slide-up stagger-6 cursor-pointer"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
