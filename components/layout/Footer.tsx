'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Logo & Tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <span className="text-2xl">👨‍💻</span>
                <span className="font-bold text-xl">Abhishek Dongare</span>
              </div>
              <p className="text-slate-300 text-sm">
                Building scalable solutions with passion 🚀
              </p>
            </div>

            {/* Center - Quick Links */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Experience
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Right - Social Links */}
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="mailto:abhishek.dongare@example.com"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <span className="text-xl">📧</span>
                </a>
                <a
                  href="https://linkedin.com/in/abhishek-dongare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/abhishek-dongare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Abhishek Dongare. All rights reserved.
            </div>

            {/* Built with */}
            <div className="text-slate-400 text-sm flex items-center space-x-2">
              <span>Built with</span>
              <span className="text-blue-400">Next.js</span>
              <span>&</span>
              <span className="text-blue-400">TypeScript</span>
              <span className="text-red-500">❤️</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-1 group"
            >
              <span>Back to top</span>
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 