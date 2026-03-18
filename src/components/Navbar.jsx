import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' 
      : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-3xl">+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-extrabold text-2xl leading-none tracking-tight">AKLERA</span>
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">Maternity Home</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 py-2 nav-link-hover ${
                  location.pathname === link.path ? 'text-primary after:w-full' : 'text-slate-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary flex items-center group">
              Book Appointment 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 hover:text-primary transition-colors bg-accent rounded-xl"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 top-[88px] bg-white/95 backdrop-blur-2xl transition-all duration-500 z-50 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="px-6 py-10 space-y-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-bold transition-all ${
                location.pathname === link.path ? 'text-primary translate-x-4' : 'text-slate-900 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center py-5 text-xl block shadow-2xl shadow-primary/20"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
