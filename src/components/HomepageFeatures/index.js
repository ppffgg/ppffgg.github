import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Acm算法比赛菜鸡',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        博主正在学习算法中，争取在各大算法比赛中取得佳绩
      </>
    ),
  },
  {
    title: '数字媒体技术课程知识',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        不定期记笔记和分享课程知识
      </>
    ),
  },
  {
    title: '一些程序员日常分享',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        活到老学到老，分享作为程序员的日常生活
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
