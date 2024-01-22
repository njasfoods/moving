'use client'
// components/FAQs.js
import { Disclosure } from '@headlessui/react';
import { Add, PlusOne } from '@mui/icons-material';
import React from 'react';

const faqsData = [
  {
    question: 'How do I schedule a moving appointment?',
    answer:
      'To schedule a moving appointment, you can contact our customer service team through phone or email. We will guide you through the process and help you choose a suitable time for your move.',
  },
  {
    question: 'What services do you offer for a local move?',
    answer:
      'For local moves, we provide packing, loading, transportation, unloading, and unpacking services. Our goal is to ensure a smooth and stress-free relocation within your community.',
  },
  {
    question: 'How can I get a moving quote?',
    answer:
      'You can request a moving quote by filling out our online quote form on our website. Provide details about your move, and our team will promptly get back to you with a customized quote.',
  },
  {
    question: 'Do you offer storage solutions?',
    answer:
      'Yes, we offer secure storage solutions for both short-term and long-term needs. Our storage facilities are equipped to handle various types of belongings, ensuring their safety and security.',
  },
  {
    question: 'What safety measures do you take during the COVID-19 pandemic?',
    answer:
      'In light of the COVID-19 pandemic, we have implemented strict safety protocols. Our team wears protective gear, follows social distancing guidelines, and sanitizes equipment regularly to ensure the safety of our clients and staff.',
  },
];

const FAQs = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" id='faqs'>
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.tertiary),white)] opacity-5" />
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[23.5deg] bg-white shadow-xl shadow-tertiary/5 ring-1 ring-tertiary/30 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
        Frequently Asked Questions
      </h1>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div>
        {faqsData.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center focus:outline-none">
                {
                  open ?   <svg
                  className="flex-shrink-0 w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg>
                    :
                <Add className='text-primary'/>

                }
                

                  <h1 className="mx-4 text-xl text-gray-800 dark:text-white">
                    {faq.question}
                  </h1>
                </Disclosure.Button>

                <Disclosure.Panel>
                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-primary"></span>

                    <p className="max-w-3xl px-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </Disclosure.Panel>

                {index < faqsData.length - 1 && (
                  <hr className="my-8 border-gray-200 dark:border-gray-700" />
                )}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FAQs;
