export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🚀</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and side projects that demonstrate my
              skills and passion for development 💻
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Featured Project - Telegram Bot */}
            <div className="lg:col-span-2">
              <div className="card p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary-100">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    <span className="mr-1">⭐</span>
                    Featured Project
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-primary-50 rounded-full transition-colors">
                      <span className="text-xl">🔗</span>
                    </button>
                    <button className="p-2 hover:bg-primary-50 rounded-full transition-colors">
                      <span className="text-xl">💻</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center">
                      <span className="mr-3">🤖</span>
                      Telegram Protein Alerts Bot
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      A sophisticated automation system that scrapes multiple
                      e-commerce platforms for protein supplement deals and
                      delivers personalized notifications via Telegram. 
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <span className="mr-2">✨</span>
                          Key Features
                        </h4>
                        <ul className="space-y-1 text-slate-600">
                          <li className="flex items-center">
                            <span className="mr-2">📊</span>
                            Real-time price monitoring
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">🎯</span>
                            Personalized threshold alerts
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">👥</span>
                            User subscription management
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary group">
                        <span className="mr-2">👀</span>
                        View Details
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                      <button className="btn-outline group">
                        <span className="mr-2">💻</span>
                        View Code
                        <span className="ml-2 group-hover:scale-110 transition-transform">
                          ↗
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 h-full flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-6xl mb-4 block">🤖</span>
                        <p className="text-primary-700 font-medium">
                          Telegram Bot Interface
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Node.js',
                      'TypeScript',
                      'Telegram API',
                      'Web Scraping',
                      'AWS Lambda',
                      'DynamoDB',
                      'CloudWatch',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🛒</span>
                <div className="flex space-x-2">
                  <button className="text-slate-400 hover:text-primary-500">
                    <span className="text-lg">🔗</span>
                  </button>
                  <button className="text-slate-400 hover:text-primary-500">
                    <span className="text-lg">💻</span>
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                E-commerce REST API
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                Scalable REST API for e-commerce platform with advanced features
                like inventory management and payment processing.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['Node.js', 'PostgreSQL', 'Stripe API'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="btn-outline text-sm flex-1">
                  <span className="mr-1">👀</span>
                  View
                </button>
                <button className="btn-primary text-sm flex-1">
                  <span className="mr-1">💻</span>
                  Code
                </button>
              </div>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">📋</span>
                <div className="flex space-x-2">
                  <button className="text-slate-400 hover:text-primary-500">
                    <span className="text-lg">🔗</span>
                  </button>
                  <button className="text-slate-400 hover:text-primary-500">
                    <span className="text-lg">💻</span>
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Task Manager Application
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                Full-stack task management app with real-time collaboration
                features and team organization tools.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Socket.io', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="btn-outline text-sm flex-1">
                  <span className="mr-1">👀</span>
                  Demo
                </button>
                <button className="btn-primary text-sm flex-1">
                  <span className="mr-1">💻</span>
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="btn-outline text-lg px-8 py-3 group">
              <span className="mr-2">📂</span>
              View All Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
