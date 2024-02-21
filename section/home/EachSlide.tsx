import Pic from 'util/Pic';

type Props = {
  name: string;
  position: string;
  company: string;
  review: string;
  avatar: string;
};

function EachSlide({
  name, position, company, review, avatar,
}: Props) {
  return (
    <div className="w-60 flex flex-col justify-between gap-6 h-full">
      <div className="">
        <div className="flex gap-2">
          {[...Array(5)].map((_, idx) => (
            <svg
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              className="h-8 w-8 text-accent stroke-pry-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              />
            </svg>
          ))}
        </div>
        <p className="font-medium mt-4">{review}</p>
      </div>
      <div className="">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <Pic src={avatar} alt="" objectFit="cover" />
        </div>
        <p className="subheader mt-2">{name}</p>
        <p className="text-base font-medium mt-1">{position}</p>
        <p className="text-sm font-medium">{company}</p>
      </div>
    </div>
  );
}

export default EachSlide;
