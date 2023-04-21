import Card from '@/components/cards/Card';
import projectData from '@/JSON/projectData';
import styles from './styles/projects.module.scss';

export default function Projects() {
  const additionalClasses = 'c-flex flex-column full-width-vw';

  return (
    <section className={`${styles.c_projects} ${additionalClasses}`}>
      <h1 className="section-title">Personal Projects</h1>
      <p>I'm baby leggings ethical keffiyeh migas bodega boys. Celiac lumbersexual affogato deep v activated charcoal. Bespoke chambray tbh DIY, everyday carry hella pork belly twee plaid four loko pug. Palo santo pug godard cliche synth kogi tonx praxis austin deep v try-hard.</p>
      <div className="c-flex flex-wrap">
        {projectData.content.map((el) => (<Card cardData={el} />))}
      </div>
    </section>
  );
}