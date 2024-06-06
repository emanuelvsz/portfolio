// @ts-ignore
import styles from './styles.module.scss';


const About = () => {
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerHeight = 200 * windowHeight; // 200vh

    if (scrollPosition >= triggerHeight) {
      console.log('Scroll atingiu 200vh!');
    }
  }

  document.addEventListener('scroll', handleScroll);

  return (
    <div style={{ backgroundColor: '#424459', scrollbarWidth: 'none' }}></div>
  );
};

export { About };
