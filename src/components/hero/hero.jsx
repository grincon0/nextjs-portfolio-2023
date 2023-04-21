import styles from './hero.module.scss';
import Image from 'next/image';
import ComputerCanvas from '@/components/canvas/Computer';

export default function Hero() {
  return (
    <div className={styles.c_hero}>
      <Image className={styles.hero} src='/bg.svg' alt='Hero Image' layout='fill' />
      <div className={styles.c_hero_text}>
        <h1>Hi, I'm <span style={{color: '#32ad53'}}>George</span></h1>
        <p>I create user interfaces, and web applications</p>
      </div>
      <ComputerCanvas />
    </div>
  );
}
