import Button from 'ui/Button';
import Pic from 'util/Pic';

function EachNewsCard() {
  return (
    <div className="">
      <div className="h-[17rem] w-full rounded-xl overflow-hidden">
        <Pic src="/home/robot.webp" alt="sample" objectFit="cover" />
      </div>
      <p className="header mb-2 mt-4">
        Amazon Unveils Humanoid Robot &apos;Digit&apos; At Warehouse
      </p>
      <p className="line-clamp-3 mb-6">
        Amazon.com Inc (NASDAQ:AMZN) has introduced a humanoid robot, 'Digit,'
        at a warehouse near Seattle, offering a glimpse into the potential
        future of work. What Happened: The 5-foot-9-inch robot, developed by
        Agility Robotics Inc., is designed to perform a repetitive task of
        moving empty yellow bins from a shelf to a conveyor, reported Bloomberg
        on Sunday.
      </p>
      <Button>Read More</Button>
    </div>
  );
}

export default function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {[...Array(10)].map((item) => (
            <div className="col-span-1 rounded-xl bg-white shadow p-6">
              <EachNewsCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
