export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and side projects that demonstrate my
              skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Featured Project - Telegram Bot */}
            <div className="lg:col-span-2">
              <div className="card p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary-100">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-primary-50 rounded-full transition-colors text-slate-400 hover:text-primary-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-primary-50 rounded-full transition-colors text-slate-400 hover:text-primary-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      Telegram Protein Alerts Bot
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      A sophisticated automation system that scrapes multiple
                      e-commerce platforms for protein supplement deals and
                      delivers personalized notifications via Telegram. 
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start space-x-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Real-time price monitoring</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Personalized threshold alerts</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>User subscription management</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary group">
                        View Details
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                      <button className="btn-outline group">
                        View Code
                        <span className="ml-2 group-hover:scale-110 transition-transform">
                          ↗
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex space-x-2">
                  <button className="text-slate-400 hover:text-primary-500 p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-primary-500 p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
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
                  View
                </button>
                <button className="btn-primary text-sm flex-1">
                  Code
                </button>
              </div>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex space-x-2">
                  <button className="text-slate-400 hover:text-primary-500 p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-primary-500 p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
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
                  Demo
                </button>
                <button className="btn-primary text-sm flex-1">
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="btn-outline text-lg px-8 py-3 group">
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
