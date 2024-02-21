'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import Button from 'ui/Button';

export default function FramerPractice() {
  const [show, setShow] = useState(true);
  const flipControls = useAnimationControls();

  const handleRotate = () => {
    flipControls.start('flip');
  };

  const handleRotateBack = () => {
    flipControls.stop();
  };

  return (
    <div className="max-w-max">
      {/* <AnimatePresence mode="popLayout"> */}
      <AnimatePresence mode="sync">
        {show && (
          <motion.div
            initial={{
              rotate: '0deg',
              // scale: 0,
              height: 0,
              width: 0,
            }}
            animate={{
              rotate: '180deg',
              // scale: 1,
              height: '10rem',
              width: '10rem',
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              // type: 'spring'
            }}
            exit={{
              rotate: '0deg',
              // scale: 0,
              height: 0,
              width: 0,
            }}
            className="bg-black mx-auto"
          />
        )}
      </AnimatePresence>
      <Button className="mt-4" onClick={() => setShow((prev) => !prev)}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <br />
      <Button className="my-4" onClick={handleRotate}>
        flip it
      </Button>
      <Button clear className="my-4" onClick={handleRotateBack}>
        stop animating
      </Button>
      <motion.div
        variants={{
          initial: {
            rotate: '0deg',
          },
          flip: {
            rotate: '45deg',
            transition: {
              duration: 5,
            },
          },
          exit: {
            rotate: '0deg',
          },
        }}
        initial="initial"
        animate={flipControls}
        exit="exit"
        className="bg-black h-60 w-60"
      />
    </div>
  );
}
