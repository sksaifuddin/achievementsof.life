import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/sksaifuddin');
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Achievementsof.life</title>
        <meta name="description" content="Document all your achievements." />
        <link rel="icon" href="/achievements.svg" />
      </Head>
    </div>
  );
}
