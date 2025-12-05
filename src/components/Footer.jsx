import React from 'react';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { roleCategories } from '../data/roles';

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ];

  // Get all 6 categories with all their positions for footer
  const footerRoles = roleCategories.map(category => ({
    name: category.name,
    positions: category.positions.map(p => p.title)
  }));

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block hover:text-[#39E590] transition-colors">
              Outstaffing Pro
            </a>
            <p className="text-gray-400 max-w-sm mb-8">
              Your on-demand design and development team. We help ambitious brands scale with high-quality creative work.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#39E590] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer flex items-center justify-center text-white border border-white/10 hover:border-[#39E590]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Roles - First Row (3 categories) */}
          {footerRoles.slice(0, 3).map((category, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-base">{category.name}</h4>
              <ul className="space-y-2">
                {category.positions.map((position) => (
                  <li key={position}>
                    <a href="#roles" className="text-gray-400 hover:text-[#39E590] transition-all duration-300 text-xs flex items-center gap-1 group">
                      <span className="w-0 h-0.5 bg-[#39E590] group-hover:w-2 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{position}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row of Roles (3 more categories) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="hidden md:block"></div> {/* Spacer for alignment */}
          {footerRoles.slice(3, 6).map((category, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-base">{category.name}</h4>
              <ul className="space-y-2">
                {category.positions.map((position) => (
                  <li key={position}>
                    <a href="#roles" className="text-gray-400 hover:text-[#39E590] transition-all duration-300 text-xs flex items-center gap-1 group">
                      <span className="w-0 h-0.5 bg-[#39E590] group-hover:w-2 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{position}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Outstaffing Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#39E590] transition-colors text-sm relative group">
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#39E590] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#39E590] transition-colors text-sm relative group">
              <span>Terms of Service</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#39E590] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#39E590] transition-colors text-sm relative group">
              <span>Cookie Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#39E590] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
