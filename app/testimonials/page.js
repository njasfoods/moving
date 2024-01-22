import Image from "next/image";

export default function Testimonial() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" id="testimonials">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.tertiary),white)] opacity-5" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-tertiary/5 ring-1 ring-tertiary/30 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
         <h2 className="text-3xl font-bold text-center">Client&apos;s Testimonal</h2>
          <figure className="mt-10">
            <blockquote className="text-center  leading-8 text-gray-900 sm:text-lg sm:leading-9">
              <p>
                “Customers praised Small Moves HFX for being personable and professional, making customers feel in good hands. The company is noted for its reliability, friendliness, and excellent value, particularly for one-bedroom moves in Halifax.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
              width={60}
              height={60}
              priority
                className="mx-auto h-10 w-10 rounded-full"
                src="https://smallmoveshfx.ca/ws/media-library/81fa64914c7748079ad176f135c698bb/clay-banks-pozx_amnwjw-unsplash.webp"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of Topmove</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  