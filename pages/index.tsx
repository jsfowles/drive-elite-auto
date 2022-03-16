import Link from 'next/link';
import Layout from '../components/Layout';
import Particles from 'react-tsparticles';
import { HomeParticles } from '../styles/particles';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <img
        src="poly-car.svg"
        alt="polygon-car"
        className="dark:invert-0 invert mx-auto"
      />
    </Layout>
  );
};

export default IndexPage;
