import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Configure GSAP for better performance
  gsap.config({
    nullTargetWarn: false,
    force3D: true
  });
};

export const fadeInUp = {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
};

export const staggerChildren = {
  stagger: 0.1,
  ease: 'power3.out'
};