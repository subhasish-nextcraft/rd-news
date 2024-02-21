import Section from 'ui/Section';

function SideComp1() {
  return (
    <h2 className="header !text-white">
      Client Satisfaction and Smooth User Experience with Mooncoder&apos;s
      Services
    </h2>
  );
}

function SideComp2() {
  return (
    <p className="text-white">
      At Mooncoder, we prioritize client satisfaction and strive to provide a
      seamless user experience. Our team utilizes the latest Next.js and React
      frameworks to develop high-quality websites that meet our clients&apos;
      needs. You can expect user-friendly interfaces, fast loading times, and
      responsive designs. We are committed to delivering exceptional results
      that exceed your expectations.
    </p>
  );
}

export default function Benefits() {
  return (
    <Section
      bg="bg-pry-900"
      SideComp1={SideComp1}
      SideComp2={SideComp2}
      bottomImgSrc="/home/happy.jpg"
      bottomImgAlt="Happy client"
    />
  );
}
