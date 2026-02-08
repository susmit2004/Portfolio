import { gsap } from 'gsap';

export const setupScrollAnimations = () => {
  // Common animation for sections
  gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};