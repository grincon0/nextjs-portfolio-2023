import Image from 'next/image';
import styles from './cards.module.scss';

export default function Card({ cardData }) {
  const { title, info, imageSrc = '' } = cardData;

  const additionalClasses = 'c-flex flex-column';
  console.log('projectData', cardData);

  return (
    <div className={`${styles.card} ${additionalClasses}`}>
      {/* <Image src="/images/example.jpg" alt="Example Image" width={500} height={500} /> */}
      <div className={styles.img_placeholder}></div>
      {
        (title || info) && (<div className={additionalClasses}>
          {title && <h1 className={styles.card_title, styles.card_padding}>{title}</h1>}
          {info && <p className={`${styles.card_text} ${styles.card_padding}`}>{info}</p>}
        </div>)
      }
    </div>
  );
}
