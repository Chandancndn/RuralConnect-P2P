import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'architecture', label: 'System' },
    { id: 'features', label: 'Features' },
    { id: 'outcomes', label: 'Impact' },
    { id: 'applications', label: 'Applications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[#2E8B57]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                RuralConnect P2P
              </div>
              <div className="text-[#1B1B1B]/60" style={{ fontSize: '0.625rem' }}>
                Blockchain Lending
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'text-[#2E8B57] bg-[#2E8B57]/10'
                    : 'text-[#1B1B1B]/70 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => onNavigate('login')}
              className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
            >
              Login
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-[#2E8B57] to-[#E6C200] text-white hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1B1B1B]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-left rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'text-[#2E8B57] bg-[#2E8B57]/10'
                      : 'text-[#1B1B1B]/70 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2 px-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    onNavigate('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="border-[#2E8B57] text-[#2E8B57] w-full"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#2E8B57] to-[#E6C200] text-white w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
