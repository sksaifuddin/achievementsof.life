import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Achievementsof.life</title>
        <meta name="description" content="Document all your achievements." />
        <link rel="icon" href="/achievements.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Achievements of my life</h1>
      </main>
    </div>
  );
}
