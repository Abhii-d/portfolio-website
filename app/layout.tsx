import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhishek Dongare | Senior Software Developer',
  description: 'Backend specialist at Cimpress with expertise in Node.js, TypeScript, and AWS technologies. Portfolio showcasing projects and experience.',
  keywords: [
    'Abhishek Dongare', 
    'Senior Software Developer', 
    'Full Stack Developer',
    'Node.js Developer', 
    'TypeScript', 
    'JavaScript',
    'AWS', 
    'Backend Developer', 
    'API Development',
    'Microservices',
    'React',
    'Cimpress',
    'Portfolio',
    'Software Engineer',
    'Mumbai Developer',
    'India'
  ],
  authors: [{ name: 'Abhishek Dongare', url: 'https://www.linkedin.com/in/abhishek-dongare-bb066a191/' }],
  creator: 'Abhishek Dongare',
  publisher: 'Abhishek Dongare',
  category: 'Technology',
  classification: 'Portfolio Website',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhishek-dongare.vercel.app',
    title: 'Abhishek Dongare | Senior Software Developer',
    description: 'Backend specialist at Cimpress with expertise in Node.js, TypeScript, and AWS technologies.',
    siteName: 'Abhishek Dongare Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhishek Dongare - Senior Software Developer',
      }
    ],
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags for search engines
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
    // yandex: 'your-yandex-verification-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },
  
  // Application metadata
  applicationName: 'Abhishek Dongare Portfolio',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  
  // Canonical URL and language alternatives
  alternates: {
    canonical: 'https://abhishek-dongare.vercel.app',
    languages: {
      'en-US': 'https://abhishek-dongare.vercel.app',
      // 'hi-IN': 'https://abhishek-dongare.vercel.app.com/hi', // If you add Hindi support
    },
  },
  
  // Format detection (prevents automatic linking)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
