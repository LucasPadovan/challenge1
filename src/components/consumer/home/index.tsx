import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../../shared/heading'
import styles from './Home.module.scss'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Peek Challenge</title>
      <meta
        name="description"
        content="Peek challenge for Frontend Engineer position - Lucas Padovan"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Heading
        title="Welcome to the Peek Challenge"
        description="In this project you will find the proposed solution for the 3
        Requirements listed to the left."
      />

      <div className={styles.grid}>
        <a href="/newSchedule" className={styles.card}>
          <h2>Create a new schedule &rarr;</h2>
          <p>
            Click on this card to fill the form where you can pick your
            preferred time
          </p>
        </a>
      </div>
    </main>
  </div>
)

export default Home