import { PropsWithChildren, useEffect, useRef } from 'react';
// @ts-ignore
import styles from './styles.module.scss';

export const toPixels = (n: number) => `${Math.floor(n)}px`;

const SimpleParallax = ({ children }: PropsWithChildren<{}>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const { top } = ref.current?.getBoundingClientRect();
      const height = ref.current?.clientHeight;

      addEventListener('scroll', (ev) => {
        if (ref.current) {
          const calculatedTop = top + height * 0.3;
          let bottom = calculatedTop - window.scrollY;

          if (
            window.scrollY > calculatedTop &&
            window.scrollY < calculatedTop + height
          ) {
            ref.current.style.bottom = toPixels(bottom);
          } else if (window.scrollY < calculatedTop) {
            ref.current.style.bottom = '0';
          }
        }
      });
    }
  }, []);
  
  return (
    <div className={styles.simpleParallax} ref={ref}>
      {children}
    </div>
  );
};

export { SimpleParallax };
