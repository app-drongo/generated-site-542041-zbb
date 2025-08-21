import PageHeaderAbout from '@/components/PageHeaderAbout';
import About from '@/components/About';
import Team from '@/components/Team';
import Awards from '@/components/Awards';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderAbout />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="team" className="scroll-mt-16">
        <Team />
      </section>
      <section id="awards" className="scroll-mt-16">
        <Awards />
      </section>
    </main>
  );
}