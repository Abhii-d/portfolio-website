import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-50 dark:bg-slate-900">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
