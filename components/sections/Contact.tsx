'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life! 🚀
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="mr-2">✉️</span>
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="textarea w-full"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg py-3">
                  <span className="mr-2">🚀</span>
                  Send Message
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="mr-2">🤝</span>
                  Let's connect
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative
                  projects, or just have a chat about technology and software
                  development.
                </p>
              </div> */}

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-gray-100">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a
                      href="mailto:abhi.dongare.personal@gmail.com"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      abhi.dongare.personal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-gray-100">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-medium text-slate-900">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/abhishek-dongare-bb066a191/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-gray-100">
                  <span className="text-2xl">💻</span>
                  <div>
                    <div className="font-medium text-slate-900">GitHub</div>
                    <a
                      href="https://github.com/Abhii-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      View my code
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-gray-100">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-medium text-slate-900">Location</div>
                    <span className="text-slate-600">India</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <span className="font-semibold text-primary-700">
                    Quick Response
                  </span>
                </div>
                <p className="text-primary-600">
                  I typically respond to emails within 24 hours. Looking forward
                  to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
