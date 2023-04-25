import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { work } from '@/constants';

const WorkCard = (element) => {
  console.log('work element', element);
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={element.element.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={element.element.icon.blurDataURL}>
        <h3 className="vertical-timeline-element-title">{element.element.roleName}</h3>
        <h4 className="vertical-timeline-element-subtitle">{element.element.title}</h4>
        {element?.element.points && (
          <ul>
            {element.element.points.map((point, i) => <li key={`work-detail-${i}`}>
              {point}
            </li>)}
          </ul>
        )}
      </VerticalTimelineElement>
    </>
  )
}

const WorkExperience = () => {
  console.log('work', work);
  return (
    <>
      <VerticalTimeline>
        {work.content.map((workElement, i) => (<WorkCard key={`work-experience-${i}`} element={workElement} />))}
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;