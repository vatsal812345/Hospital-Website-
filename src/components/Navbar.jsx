import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { navigationLinks, contactInfo } from '../constants';

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
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img 
                src="/10.png" 
                alt="AKLERA Logo" 
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <div className="flex flex-col items-center w-fit">
              <span className="text-primary font-serif font-black text-2xl md:text-4xl leading-none tracking-tight text-center">AKLERA</span>
              <div className="bg-gradient-to-r from-[#001F3F] to-primary px-3 py-1 rounded-full mt-1.5 shadow-sm w-full text-center">
                <span className="text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase block">Hospital & Maternity Home</span>
              </div>
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
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-500 transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header - match Navbar height */}
          <div className={`flex items-center justify-between px-6 border-b border-slate-100 transition-all duration-500 ${
            scrolled ? 'h-[72px]' : 'h-[100px]'
          }`}>
             <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3">
                <img src="/10.png" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="text-primary font-serif font-black text-xl uppercase tracking-tighter">AKLERA</span>
             </Link>
             <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-900 bg-accent rounded-xl"
              >
                <X size={28} />
              </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-5 border-b border-slate-100 text-lg font-medium transition-all ${
                    location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-6 pb-10">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone size={20} className="text-primary" />
                <span className="text-lg font-medium">Call Us: {contactInfo.phones[0]}</span>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#8B0000] hover:bg-[#A00000] text-white font-bold py-4 rounded-lg text-center block text-lg shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
