import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the `visible` class is added.
 * @param {Object} options - IntersectionObserver options
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); // animate once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Returns a ref array for animating multiple child elements with staggered delay.
 * @param {number} count - number of elements
 * @param {number} baseDelay - delay in ms between each element
 */
export function useStaggerAnimation(count, baseDelay = 100) {
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('visible');
            }, i * baseDelay);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(o => o?.disconnect());
  }, [count, baseDelay]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return setRef;
}
