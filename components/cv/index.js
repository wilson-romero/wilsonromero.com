import PersonalSummary from './personal-summary';
import WorkHistories from './work-histories';
import Education from './education';
import Hero from './hero';
import NumberBlock from './number-block';

import styles from './cv.module.styl';

export default function CV({ data }) {
  const blocks = [
    {
      title: 'Skills',
      list: data.skills,
    },
    {
      title: 'Soft Skills',
      list: data.softSkills,
    },
    {
      title: 'Programming Languages',
      list: data.programmingLanguages,
    },
    {
      title: 'Frameworks & Libraries',
      list: data.frameworks,
    },
    {
      title: 'Other Tools',
      list: data.others,
    },
  ];

  return (
    <>
      <header>
        <span>Email:</span> <a href={`mailto:${data.email}`}> {data.email}</a>
      </header>
      <Hero
        name={data.name}
        subTitle={data.subTitle}
        linkedIn={data.linkedIn}
        twitter={data.twitter}
        gitHub={data.gitHub}
      />
      <section className='left'>
        <PersonalSummary text={data.personalSummary} />
        <WorkHistories items={data.workHistories} />
        <Education items={data.education} />
      </section>
      <section className='right'>
        {blocks.map((item, index) => (
          <NumberBlock
            index={(index + 1).toString().padStart(2, '0')}
            title={item.title}
            list={item.list}
          />
        ))}
      </section>
    </>
  );
}
