import Pic from 'util/Pic';

const experience = [
  {
    header: 'Excel and software maintainer at TCS',
    duration: 'May 2015 - August 2015',
    responsibilities: [
      'Maintained and updated Excel spreadsheets and software applications.',
      'Ensured data accuracy and performed regular checks for issues.',
      'Collaborated with stakeholders to gather requirements and make necessary improvements to the software.',
    ],
  },
  {
    header: 'JQuery/React js developer at Arun Electricals Pvt Ltd,',
    duration: 'September 2015 - March 2020',
    responsibilities: [
      'Developed and maintained web applications using React, JQuery, JavaScript, HTML, and CSS.',
      'Collaborated with cross-functional teams to gather requirements and design software solutions.',
      'Completed and led multiple internal company projects to fruition.',
    ],
  },
  {
    header: 'React/Next js web application developer at smiles.ai/dezy.com',
    duration: 'August 2020 - Present',
    responsibilities: [
      'Developed and maintained various web applications using React and Next.js.',
      'Collaborated with a team of developers to create user-friendly and responsive web interfaces.',
      'Completed and led projects, including dezy.com, smiles.ai, affiliate.dezy.com',
    ],
  },
];

export default function page() {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-6 pt-[2.5rem] pb-[2.5rem]">
          <div className="flex gap-6">
            <div className="w-[40%] bg-pry-900 rounded-2xl shadow">
              <div className="h-[20rem] w-full rounded-t-xl overflow-hidden">
                <Pic alt="" src="/global/mypic.png" objectFit="cover" />
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-white">
                  React/Next js web developer
                </p>
                <p className="text-white font-medium mt-2">
                  subhasishdasfreelance@gmail.com
                </p>
                <p className="text-white font-medium">Howrah, India</p>
                <p className="text-white font-medium">mobile: 9330669590</p>
              </div>
            </div>
            <div className="w-[60%] bg-white p-4 rounded-2xl shadow">
              <h1 className="text-4xl font-bold text-pry-600">Subhasish Das</h1>
              <div className="bg-secondary p-4 rounded-xl mt-6">
                <p className="text-2xl font-bold text-pry-600">Profile</p>
                <p className="mt-3">
                  Experienced React Developer with a strong background in web
                  development. I have been working as a React Developer at
                  dezy.com since August 2020.
                </p>

                <p className="mt-3">
                  I hold a Bachelor&apos;s degree in computer science from
                  Vidyasagar College under Calcutta university. My skills
                  include React, JavaScript, Git, HTML, CSS, HTML5, Typescript,
                  mongodb etc.
                </p>

                <p className="mt-3">
                  Throughout my career, I have made significant contributions to
                  the success of my employers. In the future, I aim to continue
                  being competitive and secure a responsible career opportunity
                  where I can utilize my skills and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow mt-6">
            <div className="flex gap-6">
              <div className="w-8/12">
                <p className="text-2xl mb-6 font-bold text-pry-600">
                  Employment History
                </p>
                {experience.map((item) => (
                  <div className="mb-6">
                    <p className="text-xl font-bold bg-pry-600 text-white rounded px-2 py-1 max-w-max">
                      {item.header}
                    </p>
                    <p className="text-lg font-semibold text-pry-600 bg-white mt-1">
                      {item.duration}
                    </p>

                    {item.responsibilities.map((responsibleItem) => (
                      <div className="flex px-4 mt-2 gap-2">
                        <p className="font-extrabold">&#x2022;</p>
                        <p className="">{responsibleItem}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="w-4/12">
                <div className="bg-secondary p-4 rounded-xl">
                  <p className="text-2xl font-bold text-pry-600">Key Skills</p>
                  {[
                    'Next js',
                    'React js',
                    'Modern JavaScript',
                    'Mongodb',
                    'SQL',
                    'Tailwind css',
                  ].map((item) => (
                    <p className="mt-3 text-pry-700 font-medium">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow mt-6">
            <p className="text-2xl mb-6 font-bold text-pry-600">Education</p>
            <p className="text-xl font-bold bg-pry-600 text-white rounded px-2 py-1 max-w-max">
              Bachelor&apos;s degree in Computer Science
            </p>
            <p className="text-lg font-semibold text-pry-600 bg-white mt-1">
              Passed out in 2015, and ever since then I&apos;ve been working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
