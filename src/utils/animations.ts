import { gsap } from 'gsap';

export const fadeIn = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(element,
    { opacity: 0 },
    { opacity: 1, duration: 1, delay, ease: 'power3.out' }
  );
};

export const slideIn = (element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'up', delay: number = 0) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: 100 },
    down: { y: -100 }
  };

  gsap.fromTo(element,
    { ...directions[direction], opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: 1, delay, ease: 'power3.out' }
  );
};

export const staggerChildren = (parent: HTMLElement, childSelector: string, staggerAmount: number = 0.1) => {
  const children = parent.querySelectorAll(childSelector);
  
  gsap.fromTo(children,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerAmount,
      ease: 'power3.out'
    }
  );
};