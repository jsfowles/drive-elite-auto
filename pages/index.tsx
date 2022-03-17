import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Image from 'next/image';
import CTA from '../components/CTA';
const IndexPage = () => {
  return (
    <Layout title="High End Rides / Drive Elite Auto">
      <Heading title="Elite Auto Solutions" />
      <div className="flex justify-between">
        <p className="w-80">
          Get the very most from your vehicle by installing in demand features
          for a fraction of the cost from the factory. From mobile audio, video,
          accessories or appearance. We offer automotive solutions for just
          about every vehicle and every budget.
        </p>
        <figure className="-translate-y-20 z-0">
          <Image src="/images/home/home-hero.jpg" height={746} width={498} />
        </figure>
      </div>
      <figure className="-translate-y-64 z-0 -translate-x-8">
        <Image src="/images/home/home-truck.jpg" height={350} width={498} />
      </figure>
      <div className="flex justify-between -translate-y-52">
        <CTA />
        <figure className="-translate-y-20 z-0">
          <Image
            src="/images/home/home-interior.jpg"
            height={507}
            width={462}
          />
        </figure>
      </div>
    </Layout>
  );
};

export default IndexPage;
