import Link from 'next/link';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CTA from '../components/CTA';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading title="About Us" className="text-center" />
    <section className="grid grid-cols-2 gap-12 mb-24 ">
      <article>
        <p>
          We specialize in everything awesome for your vehicle! From stereo's,
          custom leather seats, rear entertainment (DVD systems, screens etc),
          window tint, Paint Protection Films (Clear-Bra), Remote start, back-up
          camera systems, rock chip repair, even an electrical system for your
          recreational vehicle.
        </p>
        <p>
          All professionally installed and backed with by product warranties and
          our labor warranty. We only offer the highest quality products and
          stand behind everything we do.
        </p>
        <p>
          We also offer a ton of graphic options from full vehicle wraps (color
          change or custom print), logos & company branding for your vehicle,
          store front, even signage. Need a banner, menu board or some stickers
          to promote your brand? Give us a call!
        </p>
      </article>
      <figure className="w-full mb-6 md:mb-24">
        <img src="/images/about/ben.png" className="w-full object-contain" />
      </figure>
      <CTA />
    </section>
  </Layout>
);

export default AboutPage;
