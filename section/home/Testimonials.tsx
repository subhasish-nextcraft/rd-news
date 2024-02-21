'use client';

import Slider from 'ui/Slider';
import EachSlide from './EachSlide';
import testimonialData from './testimonialData';

type Props = {
  header?: string;
  subHeader?: string;
  bg?: 'bg-pry-900' | 'bg-white';
};

export default function Testimonials({ header, subHeader, bg }: Props) {
  return (
    <div className={`${bg || 'bg-secondary'} py-10`}>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="px-4">
            <h2 className="header mb-2">{header || 'Happy Clients'}</h2>
            <p>{subHeader || 'Read what our satisfied clients have to say'}</p>

            <Slider EachSlide={EachSlide} data={testimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
}
