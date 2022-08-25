import React from 'react';
interface Props {
  title: string;
  className?: string;
}

const Heading = ({ title, className }: Props) => {
  return <h1 className={`${className} py-8 z-10 relative`}>{title}</h1>;
};

export default Heading;
