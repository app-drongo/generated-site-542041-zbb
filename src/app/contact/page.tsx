import PageHeaderContact from '@/components/PageHeaderContact';
import Contact from '@/components/Contact';
import Map from '@/components/Map';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderContact />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
      <section id="map" className="scroll-mt-16">
        <Map />
      </section>
    </main>
  );
}