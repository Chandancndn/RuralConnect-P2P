import { Leaf, Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#E6C200] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  RuralConnect P2P
                </div>
              </div>
            </div>
            <p className="text-white/70" style={{ fontSize: '0.875rem' }}>
              Empowering Rural India Through Trustless Lending
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2E8B57] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2E8B57] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2E8B57] flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#E6C200]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>System Architecture</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>Impact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-[#E6C200]">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>API Reference</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>Research Papers</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[#E6C200]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#2E8B57]" />
                <span className="text-white/70" style={{ fontSize: '0.875rem' }}>
                  Siddaganga Institute of Technology<br />
                  Tumkur, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2E8B57]" />
                <span className="text-white/70" style={{ fontSize: '0.875rem' }}>
                  contact@ruralconnect.in
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2E8B57]" />
                <span className="text-white/70" style={{ fontSize: '0.875rem' }}>
                  +91 XXXX-XXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50" style={{ fontSize: '0.875rem' }}>
            © 2025 RuralConnect P2P | Built for Rural Empowerment
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-[#2E8B57] transition-colors" style={{ fontSize: '0.875rem' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
