import {experiences} from '@/data/experience.json';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My journey in software development, building scalable solutions
              and growing as a developer
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center ${
                        !experience.isCurrentRole ? 'opacity-40' : ''
                      }`}>
                        <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-primary-600 font-semibold text-lg mb-2">
                            {experience.company}
                          </p>
                          {experience.isCurrentRole ? <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Current Role
                          </span> : ''}
                        </div>
                        <div className="mt-4 lg:mt-0 text-right">
                          <span className="text-slate-500 font-medium">
                            {experience.duration}
                          </span>
                          <p className="text-sm text-slate-400">{experience.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary-500 mt-1">•</span>
                              <span className="text-slate-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
