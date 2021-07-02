import { useState } from 'react';
import { useAnimation, useCycle } from 'framer-motion';

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavToggler(setStepIndex) {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle('0%', '150%');
  const animation = useAnimation();

  const toggleNavbar = () => {
    setTimeout(() => {
      if (setStepIndex) {
        if (showNavLinks) {
          setStepIndex((prevStepIndex) =>
            prevStepIndex === 6 ? 7 : prevStepIndex,
          );
        } else {
          setStepIndex((prevStepIndex) =>
            prevStepIndex === 1 ? 2 : prevStepIndex,
          );
        }
      }
    }, 300);
    setShowNavLinks(!showNavLinks);
    animation.start({ x: x, display: 'block' });
    cycleX();
  };

  return { showNavLinks, animation, toggleNavbar };
}
