import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ClockComponent from './ClockComponent';
import FileManagementSystem from './indexFMS';
import styles from './index.module.css';
import '@site/src/fonts/slkscr.ttf'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{fontFamily:"PixelFont", }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{fontFamily:"PixelFont", }}>{siteConfig.tagline}</p>
        <ClockComponent style={{fontFamily:"PixelFont", }}/>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="R.I.P HP Magic Awakened">
      <HomepageHeader />
      <main>
        <FileManagementSystem />
      </main>
    </Layout>
  );
}