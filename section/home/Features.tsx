import Section from 'ui/Section';

function SideComp() {
  return (
    <>
      <h2 className="header mb-6">
        Leverage the potential of Next.js and React for Your Website
      </h2>
      <p>
        At Dailyrush, we use Next.js and React to create stunning,
        high-performing websites. Our expertise guarantees visually appealing,
        fast, user-friendly sites, taking your web development to the next
        level.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 w-full mt-6">
        <div className="w-full sm:w-1/2">
          <p className="subheader mb-1">Client-focused</p>
          <p className="text-base">
            We prioritize client satisfaction with exceptional, tailored web
            development solutions.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="subheader mb-1">Cutting-edge</p>
          <p className="text-base">
            Our team stays current with trends and tech to offer innovative web
            solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default function Features() {
  return (
    <Section
      SideComp={SideComp}
      bg="bg-white"
      imgSrc="/home/features.jpg"
      imgAlt="cutting edge technology"
      desktopReverse
    />
  );
}
