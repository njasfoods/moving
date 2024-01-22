// components/Service.js
import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <section className="bg-primary" id="services">
      <div className="container px-6 py-24 sm:py-32 lg:px-8 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-100 capitalize lg:text-3xl dark:text-black">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-center text-gray-100 mx-auto max-w-2xl">
        At Smallmove HFx, we offer a range of professional and reliable services to meet your moving needs. Whether it&apos;s residential moving, commercial moving, or specialty services, we are here to make your move a seamless experience.
      </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="relative overflow-hidden bg-cover rounded-lg cursor-pointer group">
            <Image
              className="object-cover w-full h-56 transition-transform duration-300 transform scale-100 group-hover:scale-110"
              src="/move-along.jpg"
              alt=""
              width={1565}
              height={784}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Helping Hands
              </h2>
              <p className="mt-2  text-gray-100 ">
              Do you need help moving furniture or packing a truck?
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-cover rounded-lg cursor-pointer group">
          <Image
            className="object-cover w-full h-56 transition-transform duration-300 transform scale-100 group-hover:scale-110"
            src="/delivery.jpg"
            alt=""
            width={1565}
            height={784}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Third Party Delivery
            </h2>
            <p className="mt-2  text-gray-100 ">
            Did you need some new furniture or equipment delivered to you?
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden bg-cover rounded-lg cursor-pointer group">
            <Image
              className="object-cover w-full h-56 transition-transform duration-300 transform scale-100 group-hover:scale-110"
              src="/movers.jpg"
              alt=""
              width={1565}
              height={784}
            />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
              Movers
              </h2>
              <p className="mt-2  text-gray-100 ">
              We&apos;re movers in Halifax who use a cargo van.
              </p>
            </div>
          </div>
          {/* Repeat the same pattern for the other two images */}
        </div>
      </div>
    </section>
  );
};

export default Service;
