import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

const CarsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Cars list
        </h1>

        <ul>
          <li>
            <Link href="/cars/tesla">Tesla</Link>
          </li>
          <li>
            <Link href="/cars/ford">Ford</Link>
          </li>
          <li>
            <Link href="/cars/lambo">Lambo</Link>
          </li>
        </ul>
        </main>
    </div>
  );
};

export default CarsPage;
