import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhishek Dongare | Senior Software Developer',
  description: 'Backend specialist at Cimpress with expertise in Node.js, TypeScript, and AWS technologies. Portfolio showcasing projects and experience.',
  keywords: ['Abhishek Dongare', 'Senior Software Developer', 'Node.js', 'TypeScript', 'AWS', 'Backend Developer', 'Cimpress'],
  authors: [{ name: 'Abhishek Dongare' }],
  creator: 'Abhishek Dongare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Abhishek Dongare | Senior Software Developer',
    description: 'Backend specialist at Cimpress with expertise in Node.js, TypeScript, and AWS technologies.',
    siteName: 'Abhishek Dongare Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Dongare | Senior Software Developer',
    description: 'Backend specialist at Cimpress with expertise in Node.js, TypeScript, and AWS technologies.',
    creator: '@abhishek_dongare',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
