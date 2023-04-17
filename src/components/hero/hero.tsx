import styles from './hero.module.scss';
import Image from 'next/image';
import ComputerCanvas from '@/components/canvas/Computer';

export default function Hero() {
  return (
    <div className={styles.c_hero}>
      <Image className={styles.hero} src='/bg.svg' alt='Hero Image' layout='fill' />
      <ComputerCanvas />
    </div>
  );
}
