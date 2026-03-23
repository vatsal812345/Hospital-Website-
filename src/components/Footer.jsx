import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { navigationLinks, contactInfo } from '../constants';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const expertServices = [
    'Physician',
    'Gynecology',
    'Pediatrics',
    'Orthopedic',
    'Surgical',
    'General Medicine'
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img 
                  src="/10.png" 
                  alt="AKLERA Logo" 
                  className="w-full h-full object-contain filter drop-shadow-md brightness-110"
                />
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className="text-primary font-serif font-black text-2xl md:text-4xl leading-none tracking-tight text-center">AKLERA</span>
                <div className="bg-gradient-to-r from-[#e7e9eb] to-white px-3 py-1 rounded-full mt-1 shadow-sm w-fit text-center">
                  <span className="text-black text-[8px] md:text-[10px] font-bold tracking-[0.05em] uppercase block">Hospital & Maternity Home</span>


                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Providing trusted healthcare services with quality, care, and compassion. Your health is our top priority since 2010.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 block"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <div className="inline-block relative">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">Quick Navigation</h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </div>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group text-sm font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:scale-150 group-hover:bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-8">
            <div className="inline-block relative">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">Our Expertise</h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </div>
            <ul className="space-y-4">
              {expertServices.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group text-sm font-bold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:scale-150 group-hover:bg-primary transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-8">
            <div className="inline-block relative">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">Contact Info</h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 group-hover:border-primary/50 shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">
                  {contactInfo.address}
                </p>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 group-hover:border-primary/50 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <a href={`tel:${contactInfo.phones[0]}`} className="text-gray-400 font-bold hover:text-white transition-colors">
                    {contactInfo.phones[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-white/5 group-hover:border-primary/50 shrink-0">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 font-bold hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} Aklera Hospital & Maternity Home. Precision in every detail.
          </p>
          <div className="flex space-x-8">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
