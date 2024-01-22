import Image from "next/image";

  export default function About() {
    return (
        <section className="bg-white dark:bg-gray-900" id="about">
        <div className="container px-6 py-24 sm:py-32 lg:px-8 grid md:grid-cols-2">
            <div className=" col-span-1 p-8">
            <h2 className="text-3xl font-bold text-gray-900">Who are we?</h2>
            <p className="mt-8 max-w-md text-gray-700">SmallMoves HFx is a leading moving company dedicated to providing exceptional relocation services. Established in [Year], we have proudly served countless individuals, families, and businesses in making their moves seamless and stress-free. <br/><br/> Our team comprises experienced professionals in the moving industry. We understand that every move is unique, and our tailored solutions cater to your specific needs. From local moves to long-distance relocations, SmallMoves HFx is your trusted partner for a successful transition.</p>
            
            </div>
            <div className=" col-span-1 p-8">
                <div className="w-full h-72 relative mx-auto">
                    <Image src={'/companyteam.jpg'} priority  fill alt="team" className="object-cover"/>
                </div>
            </div>

             <div className=" col-span-1 p-8">
                <div className="w-full h-72 relative mx-auto">
                    <Image src={'/integrity.jpg'} priority fill alt="integrity" className="object-cover"/>
                </div>
            </div>
            <div className=" col-span-1 p-8">
                <h2 className="text-3xl font-bold text-gray-900">What sets us apart?</h2>
                <p className="mt-8 max-w-md text-gray-700">What sets us apart is our commitment to customer satisfaction. We believe in transparency, integrity, and open communication. Our goal is to build lasting relationships with our clients by providing reliable, affordable, and top-notch moving services.</p>
            
            </div>
        </div>
    </section>
    )
  }
  