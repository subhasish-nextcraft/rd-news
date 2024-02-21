'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ContactModalButton from './ContactModalButton';

const faqList: { question: string; answer: string }[] = [
  {
    question: 'How does Next.js work?',
    answer:
      'Next.js is a framework for building server-side rendered React applications. It provides an intuitive and efficient way to create dynamic web pages with ease.',
  },
  {
    question: 'What are the benefits of using React?',
    answer:
      'React is a popular JavaScript library for building user interfaces. It offers a component-based architecture, virtual DOM, and efficient rendering, resulting in fast and responsive web applications.',
  },
  {
    question: 'How can I get started?',
    answer:
      'To get started with Next.js and React, you can follow our comprehensive documentation and tutorials. We also offer web development services to help you build your project from scratch.',
  },
  {
    question: 'Do you provide support?',
    answer:
      'Yes, we provide ongoing support for our clients. Our team of experienced developers is available to assist you with any technical issues or questions you may have.',
  },
  {
    question: 'Can you customize websites?',
    answer:
      'Absolutely! We offer custom web development services tailored to your specific requirements. Our team will work closely with you to create a unique and user-friendly website.',
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="container mx-auto">
        <div className="px-4">
          <h2 className="header mb-2">Frequently Asked Questions</h2>
          <p className="mb-6">
            Find answers to common questions about our web development services.
          </p>
          <div className="divide divide-y">
            {faqList.map((item, index) => (
              <div className="mb-6 pt-6" key={item.question}>
                <button
                  type="button"
                  onClick={() => {
                    if (open === index) {
                      setOpen(null);
                    } else {
                      setOpen(index);
                    }
                  }}
                  className="flex justify-between items-center gap-6 w-full"
                >
                  <p className="subheader mb-3 text-left">{item.question}</p>
                  <svg
                    fill="none"
                    className={`${
                      open !== index ? '-rotate-90' : 'rotate-0'
                    } transition duration-200 h-6 w-6`}
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {open === index && (
                    <motion.p
                      className="overflow-hidden"
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: 'auto',
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      exit={{
                        height: 0,
                      }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <h2 className="header mb-2 mt-16">Still have questions?</h2>
          <p className="">Contact us for more information.</p>
          <div className="mt-8">
            <ContactModalButton />
          </div>
        </div>
      </div>
    </div>
  );
}
