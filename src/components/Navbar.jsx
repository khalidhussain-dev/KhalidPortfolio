import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-purple-500/30 border-b border-purple-500/20'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent hover:scale-110 hover:drop-shadow-lg transition-all duration-300 animate-slide-in-left flex items-center gap-2 group transform-gpu">
                        <div className="w-8 h-8 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                            <Code2 size={18} className="text-white" />
                        </div>
                        <span className="hidden sm:inline">Khalid</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-slate-300 hover:text-purple-300 px-4 py-2 rounded-lg font-medium transition-all duration-600 relative group animate-fade-in hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-110"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className="absolute -bottom-1 left-4 w-0 h-1 bg-linear-to-r from-purple-400 to-pink-500 group-hover:w-[calc(100%-32px)] transition-all duration-300 rounded-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-100 hover:text-purple-400 transition-all duration-300 cursor-pointer hover:scale-125"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} className="animate-rotate-in" />
                        ) : (
                            <Menu size={28} className="animate-rotate-in hover:rotate-90 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 px-4 bg-linear-to-b from-slate-900/98 to-slate-950/95 backdrop-blur-lg rounded-b-2xl animate-slide-up shadow-2xl shadow-purple-500/30 border-b border-purple-500/20 space-y-2">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-3 px-4 text-slate-300 hover:text-purple-300 rounded-lg font-medium animate-fade-in hover:bg-linear-to-r hover:from-purple-500/20 hover:to-pink-500/10 hover:shadow-lg hover:shadow-purple-500/30 hover:border hover:border-purple-500/30 transition-all duration-300 group hover:scale-105"
                                style={{ animationDelay: `${index * 0.06}s` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-400 to-pink-500 group-hover:scale-150 transition-transform duration-300"></span>
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
