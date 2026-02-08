import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useScrollAnimation = <T extends HTMLElement>(
  animationCallback: (element: T, index: number) => void,
  dependencies: any[] = []
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animationCallback(ref.current, 0);
    }
  }, dependencies);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement>(
  selector: string,
  animationProps: gsap.TweenVars,
  staggerProps: gsap.TweenVars = { stagger: 0.2 }
) => {
  useEffect(() => {
    const elements = gsap.utils.toArray<T>(selector);
    
    elements.forEach((element, index) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          ...animationProps,
          delay: index * (typeof staggerProps.stagger === 'number' ? staggerProps.stagger : 0.2),
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, [selector, animationProps, staggerProps]);
};