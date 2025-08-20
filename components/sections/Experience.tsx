import experienceData from '@/data/experience.json';
const { experiences } = experienceData;

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-800">
      <div className="container">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Work Experience
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My journey in software development, building scalable solutions
              and growing as a developer
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                <div className="card p-4 md:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center ${
                        !experience.isCurrentRole ? 'opacity-40' : ''
                      }`}>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="mb-3 lg:mb-0">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                            {experience.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold text-base md:text-lg mb-2">
                            {experience.company}
                          </p>
                          {experience.isCurrentRole && (
                            <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs md:text-sm font-medium">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="lg:text-right">
                          <span className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base">
                            {experience.duration}
                          </span>
                          <p className="text-xs md:text-sm text-slate-400 dark:text-slate-400">{experience.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-4 md:mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div className="mb-4 md:mb-6">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 md:mb-3 text-sm md:text-base">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-primary-500 mt-1 text-sm">•</span>
                                <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 md:mb-3 text-sm md:text-base">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 md:px-3 md:py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-colors"
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
