import React from 'react';
import FooterLogo from '../public/images/footer/FooterLogo';

const Footer = () => {
  return (
    <div className="bg-black mt-36">
      <div className="mx-[7vw]">
        <div className="max-w-[1024px] mx-auto py-16 flex border-t border-black dark:border-elite">
          <FooterLogo />
          <div className="h-40 pl-16 text-white pt-2">
            <h5 className="pb-2 text-white">Elite Auto Solutions</h5>
            <ul className="h-full  flex flex-col justify-around">
              <li className="flex">
                <img src="images/footer/location.svg" alt="" />
                <small className="pl-2">1403 S. 600 W., Suite J</small>
              </li>
              <li className="flex">
                <img src="images/footer/call.svg" alt="" />
                <small className="pl-2">(801) 712-1070</small>
              </li>
              <li className="flex">
                <img src="images/footer/facebook.svg" alt="" />
                <small className="pl-2">@driveeliteautosolutions</small>
              </li>
              <li className="flex">
                <img src="images/footer/instagram.svg" alt="" />
                <small className="pl-2">@drivingelite</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
