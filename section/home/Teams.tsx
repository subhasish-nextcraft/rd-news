'use client';

import Button from 'ui/Button';
import Slider from 'ui/Slider';
import Pic from 'util/Pic';

const devs = [
  {
    name: 'Subhasish Das',
    position: 'Developer, Founder and CEO',
    image: '/home/devs/subhasish.png',
  },
  { name: 'Cat', position: 'Occasional mewing', image: '/home/devs/cat.jpg' },
];

type Props = {
  name: string;
  position: string;
  image: string;
};

function EachSlide({ name, position, image }: Props) {
  return (
    <div className="">
      <div className="w-full h-56 rounded-lg overflow-hidden">
        <Pic src={image} objectFit="cover" alt={`${name} profile pic`} />
      </div>
      <p className="font-bold mt-4">{name}</p>
      <p className="text-base">{position}</p>
    </div>
  );
}

export default function Teams() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="px-4 py-10">
          <h2 className="header mb-2">Meet Our Team</h2>
          <p>
            Meet the incredible members of our dedicated and hardworking team
            who consistently go above and beyond to deliver exceptional results.
          </p>

          <Slider EachSlide={EachSlide} data={devs} />
          <div className="flex justify-center mt-6">
            <Button>View all</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
