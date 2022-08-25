import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CTA from '../components/CTA';
import {
  MusicalNoteIcon,
  VideoCameraIcon,
  MapPinIcon,
  BriefcaseIcon,
  FireIcon,
  SunIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import Image from 'next/image';

const INTERIOR_DATA = [
  {
    id: 0,
    heading: 'Audio',
    subHeading:
      'Psro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <MusicalNoteIcon />,
  },
  {
    id: 1,
    heading: 'Video',
    subHeading:
      'Pro veritus porttistor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <VideoCameraIcon />,
  },
  {
    id: 2,
    heading: 'Navigation',
    subHeading:
      'Pro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <MapPinIcon />,
  },
  {
    id: 3,
    heading: 'Leather',
    subHeading:
      'Pro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <BriefcaseIcon />,
  },
  {
    id: 4,
    heading: 'Heated Seats',
    subHeading:
      'Pro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <FireIcon />,
  },
  {
    id: 5,
    heading: 'Lighting',
    subHeading:
      'Pro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <SunIcon />,
  },
  {
    id: 6,
    heading: 'And More',
    subHeading:
      'Pro veritus porttitor laoreet quas quas. Sapientem reque eu ex reprimique phasellus integer hendrerit propriae habeo. Iisque legimus quidam id commodo qualisque.',
    icon: <PlusIcon />,
  },
  {
    id: 7,
    component: <CTA />,
  },
];

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading title="Interiors" className="text-center" />

    <div className="max-w-4xl mx-auto lg:max-w-7xl pb-24">
      <p className="max-w-2xl text-2xl mx-auto py-12">
        When you’re stuck in traffic, on a road trip, or just out cruising, you
        might as well do it all with impressive style and comfort... even if it
        is just keeping the kids quiet so you can drive in peace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 pb-12">
        {INTERIOR_DATA.map(({ id, heading, subHeading, icon, component }) =>
          component ? (
            component
          ) : (
            <div className="grid grid-cols-6" key={id}>
              <span className="col-span-1 flex items-center justify-center h-12 w-12 bg-elite text-white p-3">
                {icon}
              </span>

              <div className="col-span-5">
                <h3 className="text-lg font-medium ">{heading}</h3>
                <small className="mt-2">{subHeading}</small>
              </div>
            </div>
          ),
        )}
      </div>
      <Image
        src="/images/exterior/exterior.png"
        alt=""
        width={904}
        height={678}
        layout="responsive"
      />
    </div>
  </Layout>
);

export default AboutPage;
