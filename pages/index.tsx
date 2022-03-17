import Link from 'next/link';
import Layout from '../components/Layout';
import Particles from 'react-tsparticles';
import { HomeParticles } from '../styles/particles';
import Heading from '../components/Heading';

const IndexPage = () => {
  return (
    <Layout title="High End Rides / Drive Elite Auto">
      <Heading title="Elite Auto Solutions" />
      <p>
        Get the very most from your vehicle by installing in demand features for
        a fraction of the cost from the factory. From mobile audio, video,
        accessories or appearance. We offer automotive solutions for just about
        every vehicle and every budget.
      </p>
    </Layout>
  );
};

export default IndexPage;
