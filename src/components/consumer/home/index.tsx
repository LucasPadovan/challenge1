import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../../shared/heading'
import styles from './Home.module.scss'

const Home: NextPage = () => (
  <>
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
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/newActivity" className={styles.card}>
          <h2>Schedule a new activity &rarr;</h2>
          <p>
            Click on this card to fill the form where you can pick your
            preferred time
          </p>
        </a>
      </div>

      <h2>Challenge tech details</h2>
      <ul>
        <li>React + Next + Scss</li>
        <li>Prettier and eslint have been configured for the project</li>
        <li>It will be uploaded to Vercel using a free account</li>
        <li>SSR is not enabled to keep it simple</li>
        <li>
          No DB was installed but some traces of the mongo connector are
          available
        </li>
        <li>
          Persistent schedules are using the local storage with a user ID to
          simulate it
        </li>
        <li>
          Frontend context handles the things that appear on screen (no loadings
          have been put in place though)
        </li>
        <li>
          Notifications context handles the notifications that will appear on
          screen
        </li>
        <li>
          Schedules context handles the live storage for the schedules and also
          handles saving them to local storage (as well as recovering them on
          start!)
        </li>
        <li>
          You can run test by typing <strong>`npm run test`</strong> for a
          couple of unit testin and <strong>`npm run cypress:run`</strong> for a
          couple of integration testing. (It should work fine but also I`m using
          a weird Windows + WSL to run cypress so I`ll leave a video with them
          running)
        </li>
        <li>
          React Testing Library was ommited for the sake of simplicity and to
          get things done on time, unit and integration cover a good chunk of
          the app `heavy` parts
        </li>
      </ul>
    </main>
  </>
)

export default Home
