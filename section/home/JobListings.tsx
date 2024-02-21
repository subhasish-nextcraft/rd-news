'use client';

import Link from 'next/link';
import Button from 'ui/Button';

const openJobs: {
  id: string;
  position: string;
  description: string;
  link: string;
}[] = [
  {
    id: 'fullstack',
    link: '/hiring?position=fullstack',
    position: 'Next js fullstack developer',
    description:
      'Must have experience with next js 13+ projects, harnessing the power of react server components, suspense and various data loading patterns. Must also have 5+ years of react experience',
  },
  {
    id: 'mern',
    link: '/hiring?position=mern',
    position: 'MERN stack developer',
    description:
      'Must have at least 5+ years of experience with fullstack react + mongodb projects',
  },
  {
    id: 'web-designer',
    link: '/hiring?position=web-designer',
    position: 'Web designer',
    description:
      'Must have at least 5+ years of experience with building complex user interfaces with HTML and CSS. Must know tailwind CSS',
  },
  {
    id: 'ux-designer',
    link: '/hiring?position=ux-designer',
    position: 'UX designer',
    description:
      'Must have at least 3+ years of building website and mobile app interfaces with figma, adobe XD or any similar tool.',
  },
];

export function OpenJobs() {
  return (
    <div className="divide-y">
      {openJobs.map(({
        id, position, description, link,
      }) => (
        <div className="py-6" key={id}>
          <h3 className="subheader mb-2">{position}</h3>
          <div className="flex items-center gap-1 text-slate-600 mb-4 md:mb-2">
            <svg
              fill="none"
              strokeWidth={2}
              className="h-5 w-5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-base">Remote</p>
          </div>
          <div className="flex flex-col md:flex-row-reverse w-full">
            <p className="w-full md:w-2/3">{description}</p>
            <div className="w-full md:w-1/3">
              <Link href={link}>
                <Button className="mt-6">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function JobListings() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="container mx-auto">
        <div className="px-4">
          <h2 className="header mb-2 w-full">We&apos;re hiring!</h2>
          <p className="mb-3">
            Explore the exciting job opportunities at Mooncoder.
          </p>

          <OpenJobs />

          <p className="text-red-600 font-medium mt-12 text-center">
            Please note: we currently do not offer any position to freshers
          </p>
        </div>
      </div>
    </div>
  );
}
