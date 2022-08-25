import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Image from 'next/image';
import CTA from '../components/CTA';
const IndexPage = () => {
  return (
    <Layout title="High End Rides / Drive Elite Auto">
      <Heading title="Elite Auto Solutions" className="text-center" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-end">
          <p className="pb-10">
            Get the very most from your vehicle by installing in demand features
            for a fraction of the cost from the factory. From mobile audio,
            video, accessories or appearance. We offer automotive solutions for
            just about every vehicle and every budget.
          </p>
          <figure className="w-full mb-6 md:mb-24">
            <Image
              width={494}
              height={351}
              layout="responsive"
              src="/images/home/home-truck.jpg"
              className="w-full object-contain"
            />
          </figure>
          <CTA />
        </div>
        <div className="flex flex-col h-full items-center ">
          <figure className="w-full mb-6">
            <Image
              width={498}
              height={746}
              layout="responsive"
              src="/images/home/home-hero.jpg"
              className="w-full object-contain"
            />
          </figure>
          <figure className="w-full mb-6 md:mb-24">
            <Image
              width={462}
              height={507}
              layout="responsive"
              src="/images/home/home-interior.jpg"
              className="w-full  object-contain"
            />
          </figure>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
