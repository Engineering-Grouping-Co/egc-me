import { useEffect, useRef } from 'react';

export default function FadeIn({ children, className = '', delay = 0, tag: Tag = 'div' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`fade-in${delay ? ` fade-in-delay-${delay}` : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  );
}
