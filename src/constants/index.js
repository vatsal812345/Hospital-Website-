import { 
  Stethoscope, 
  Baby, 
  User, 
  Activity, 
  Bone, 
  Scissors, 
  Syringe, 
  ClipboardCheck as Xray,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Contact Us', path: '/contact' },
];

export const contactInfo = {
  phones: ['+91 73838 86664', '+91 81402 10178'],
  email: 'aklerahospital@gmail.com',
  address: 'Hall No-1,2, Second Floor, Aaiji Complex, Bharat Residency, Eklera Chokdi, Saniya Kande, Surat-394210',
  emergency: '24/7 Emergency Services Available',
};

export const departments = [
  {
    id: 'physician',
    name: 'Physician Department',
    icon: Stethoscope,
    description: 'Expert treatment for Malaria, Dengue, Typhoid, Diabetes, Blood Pressure, and Heart-related conditions.',
    features: ['Multi-para monitoring', 'Syringe pump facility', 'Nebulization services', 'Snake bite treatment']
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Maternity',
    icon: Baby,
    description: 'Comprehensive care for women including prenatal checkups (ANC), sonography, and normal/cesarean deliveries.',
    features: ['Modern Labor Room', 'High-risk pregnancy care', 'Infertility treatment', 'Hysterescopy & Laparoscopy']
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics (Child Care)',
    icon: User,
    description: 'Specialized care for newborns and children, including vaccination and phototherapy for jaundice.',
    features: ['Newborn jaundice treatment', 'Complete immunization', 'Nutritional guidance', 'Emergency pediatric care']
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Department',
    icon: Bone,
    description: 'Advanced treatment for bone, joint, and muscle issues, including spine surgery and arthritis care.',
    features: ['Joint pain treatment', 'Fracture management', 'Spine care', 'Digital X-Rays']
  },
  {
    id: 'surgery',
    name: 'Surgical Department',
    icon: Scissors,
    description: 'Expert surgical procedures for appendix, hernia, piles, stones, and accident-related emergencies.',
    features: ['Laparoscopic surgery', 'Endoscopic procedures', 'Emergency trauma surgery', 'Modern OT facility']
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics & X-Ray',
    icon: Xray,
    description: 'Precise diagnostic services including Digital X-Rays and basic laboratory tests.',
    features: ['Digital X-Rays', 'Basic pathology', 'Quick reports', 'Modern equipment']
  }
];

export const quickStats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Expert Doctors', value: '15+' },
  { label: 'Happy Patients', value: '10k+' },
  { label: 'Modern Facilities', value: '24/7' }
];
