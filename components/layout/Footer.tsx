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
                  <span className="text-xl">💼</span>
                </a>
                <a
                  href="https://github.com/abhishek-dongare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <span className="text-xl">💻</span>
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