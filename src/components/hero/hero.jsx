import styles from './hero.module.scss';
import Image from 'next/image';
import ComputerCanvas from '@/components/canvas/Computer';
import PalmCanvas from '@/components/canvas/Palm';

export default function Hero() {
  const additionalClasses = 'c-flex flex-column full-width-vw';
  return (
    <div className={styles.c_hero}>
      {/* <Image className={styles.hero} src='/bg_A.svg' alt='Hero Image' layout='fill' /> */}
      <div className={styles.c_hero_text}>
        <h1>Hi, I'm <span style={{color: '#32ad53'}}>George</span></h1>
        <p>I bring ideas to life</p>
      </div>
      <PalmCanvas />
      {/* <ComputerCanvas /> */}
    </div>
  );
}
