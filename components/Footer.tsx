
import React, { useEffect, useRef, useState } from 'react';

interface FooterProps {
  onAdminClick?: () => void;
}

const InstagramIcon = ({ size = 24, strokeWidth = 2 }: { size?: number, strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className={`px-6 md:px-12 pt-0 pb-12 md:pb-16 bg-[#EE3231] text-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-t border-white/20 pt-12">
        <div className="flex flex-col space-y-1 text-sm tracking-widest">
          <a href="mailto:dllddesignstudio@gmail.com" className="font-black hover:text-white/70 transition-colors lowercase">dllddesignstudio@gmail.com</a>
          <p className="font-bold uppercase">Seoul. South Korea</p>
          <div className="flex items-center gap-2">
            <p className="font-bold uppercase">© 2024 DLLD design.</p>
            {/* 관리자 진입 비밀 버튼 */}
            <button 
              onClick={onAdminClick}
              className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white transition-colors"
              title="Admin Access"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href="https://blog.naver.com/dlld_design" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white/70 transition-all duration-300 font-black text-sm tracking-widest hover:scale-105"
            aria-label="Naver Blog"
          >
            BLOG
          </a>
          <a 
            href="https://www.instagram.com/dlldstudio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white/70 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon size={24} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
