import PageHeaderServices from '@/components/PageHeaderServices';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Cta from '@/components/Cta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderServices />
      </section>
      <section id="services" className="scroll-mt-16">
        <Services />
      </section>
      <section id="process" className="scroll-mt-16">
        <Process />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}