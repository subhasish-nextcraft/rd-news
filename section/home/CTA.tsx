import Section from 'ui/Section';
import ContactModalButton from './ContactModalButton';

function SideComp1() {
  return (
    <h2 className="header !text-white">
      Transform your website development experience
    </h2>
  );
}

function SideComp2() {
  return (
    <>
      <p className="text-white">
        We specialize in creating highly effective websites designed to drive
        exceptional business results.
      </p>
      <p className="mt-4 text-white">
        Get in touch today to discuss your project and receive a free quote from
        our experienced team.
      </p>
      <div className="mt-8">
        <ContactModalButton />
      </div>
    </>
  );
}

export default function CTA() {
  return (
    <Section bg="bg-pry-900" SideComp1={SideComp1} SideComp2={SideComp2} />
  );
}
