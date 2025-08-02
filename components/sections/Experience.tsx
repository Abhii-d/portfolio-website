export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">💼</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My journey in software development, building scalable solutions
              and growing as a developer 🚀
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Current Role */}
            <div className="relative">
              <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          Senior Software Developer
                        </h3>
                        <p className="text-primary-600 font-semibold text-lg mb-2 flex items-center">
                          <span className="mr-2">🏢</span>
                          Cimpress
                        </p>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <span className="mr-1">✨</span>
                          Current Role
                        </span>
                      </div>
                      <div className="mt-4 lg:mt-0 text-right">
                        <span className="text-slate-500 font-medium">
                          📅 2024 - Present
                        </span>
                        <p className="text-sm text-slate-400">Remote</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      🚀 Recently promoted to Senior Software Developer role,
                      focusing on backend architecture and system scalability.
                      Leading technical initiatives and mentoring team members.
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <span className="mr-2">🏆</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1">⭐</span>
                          <span className="text-slate-600">
                            Promoted to Senior Software Developer in 2024
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1">⭐</span>
                          <span className="text-slate-600">
                            Architected and implemented scalable backend systems
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1">⭐</span>
                          <span className="text-slate-600">
                            Improved system performance by 40% through optimization
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <span className="mr-2">🛠️</span>
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Node.js',
                          'TypeScript',
                          'PostgreSQL',
                          'AWS',
                          'Docker',
                          'Kubernetes',
                          'Redis',
                          'Express.js',
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="relative">
              <div className="card p-8 hover:shadow-lg transition-shadow duration-300 opacity-90">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">💻</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          Software Developer
                        </h3>
                        <p className="text-slate-600 font-semibold text-lg mb-2 flex items-center">
                          <span className="mr-2">🏢</span>
                          Cimpress
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0 text-right">
                        <span className="text-slate-500 font-medium">
                          📅 2022 - 2024
                        </span>
                        <p className="text-sm text-slate-400">Remote</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Focused on backend development and API design for
                      high-traffic applications. Collaborated with
                      cross-functional teams on product features.
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Express.js', 'Jest'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
