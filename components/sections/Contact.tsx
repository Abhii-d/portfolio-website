'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'rate_limited' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // First check rate limiting
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const data = await res.json();
      
      if (res.status === 429) {
        setSubmitStatus('rate_limited');
        setErrorMessage(data.error || 'Rate limit exceeded. Please try again later.');
        return;
      }
      
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || 'Rate limit check failed');
      }

      // Rate limit passed, now send email via EmailJS
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || '', // Your EmailJS service ID
        process.env.EMAIL_JS_TEMPLATE_ID || '', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.EMAILJS_PUBLIC_KEY || '' // Your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            if you like algorithms and together we&apos;ll create what the World likes...
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-slate-900 dark:text-slate-50">
                <span className="mr-2">✉️</span>
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
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
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span className="ml-2">{isSubmitting ? '⏳' : '→'}</span>
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm flex items-center">
                      <span className="mr-2">✅</span>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'rate_limited' && (
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm flex items-center">
                      <span className="mr-2">⏰</span>
                      {errorMessage}
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm flex items-center">
                      <span className="mr-2">❌</span>
                      {errorMessage || 'Failed to send message. Please try again or email me directly.'}
                    </p>
                  </div>
                )}
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
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-50">Email</div>
                    <a
                      href="mailto:abhi.dongare.personal@gmail.com"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      abhi.dongare.personal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-50">LinkedIn</div>
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

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900 dark:text-slate-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-50">GitHub</div>
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

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-50">Location</div>
                    <span className="text-slate-600 dark:text-slate-300">India</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-900/30">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <span className="font-semibold text-primary-700">
                    Quick Response
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-300">
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
