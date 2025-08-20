'use client';
import projectsData from '@/data/projects.json';
const { projects } = projectsData;

export default function Projects() {
  // Separate featured and regular projects
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and side projects that demonstrate my
              skills and passion for development
            </p>
          </div>

          {/* Projects Grid - 2 Columns Masonry Layout */}
          <div className="columns-1 lg:columns-2 gap-6 space-y-6">
            {/* All Projects Combined */}
            {[...featuredProjects, ...regularProjects].map((project) => (
              <div key={project.id} className={`break-inside-avoid mb-6 card p-6 hover:shadow-xl transition-all duration-300 ${project.featured ? 'border-2 border-primary-100' : ''}`}>
                {project.featured && (
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-primary-50 rounded-full transition-colors text-slate-400 hover:text-primary-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-primary-50 rounded-full transition-colors text-slate-400 hover:text-primary-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {!project.featured && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg 
                        className={`w-6 h-6 ${project.icon.color}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox={project.icon.viewBox}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={project.icon.path} 
                        />
                      </svg>
                    </div>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary-500 p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary-500 p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {project.featured && (
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg 
                      className={`w-6 h-6 ${project.icon.color}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox={project.icon.viewBox}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={project.icon.path} 
                      />
                    </svg>
                  </div>
                )}

                <div className={project.featured ? "text-center mb-4" : "mb-4"}>
                  <h3 className={`font-bold text-slate-900 dark:text-slate-50 mb-2 ${project.featured ? 'text-xl' : 'text-xl'}`}>
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {project.featured && project.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 text-center text-sm">
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1 text-xs">•</span>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <div className={`flex flex-wrap gap-1 ${project.featured ? 'justify-center' : 'justify-start'}`}>
                     {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`py-1 rounded-full text-xs font-medium ${
                          project.featured 
                            ? 'px-2 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                            : 'px-2 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                     {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center text-sm py-2 group transition-all duration-200 ${
                        project.featured 
                          ? 'btn-primary' 
                          : 'btn-outline'
                      }`}
                    >
                      {project.featured ? 'View Live' : 'View'}
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center text-sm py-2 group transition-all duration-200 ${
                        project.featured 
                          ? 'bg-white border border-primary-500 text-primary-600 hover:bg-primary-50 hover:text-primary-700' 
                          : 'bg-primary-500 text-white hover:bg-primary-600 hover:text-white'
                      } rounded-md font-medium`}
                    >
                      Code
                      <span className="ml-1 group-hover:scale-150 transition-transform">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button 
              className="btn-outline text-lg px-8 py-3 group" 
              onClick={() => window.open('https://github.com/Abhii-d', '_blank')}
            >
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
