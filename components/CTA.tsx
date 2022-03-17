import React from 'react';

const Cta = () => {
  return (
    <div className="bg-elite h-full p-8 text-white w-[450px]">
      <h2 className="text-white pb-2.5">Let's Work Together</h2>
      <p className="text-base pb-3.5 w-80">
        Have an idea for your ride. Schedule an appointment and let’s make it
        reality.
      </p>
      <div className="flex pb-7">
        <img src="images/footer/call.svg" alt="" />
        <p className="pl-2 text-base font-bold">(801) 712-1070 - text only</p>
      </div>

      <button className="uppercase bg-white text-black font-heading px-5 py-2">
        Get Connected
      </button>
    </div>
  );
};

export default Cta;
