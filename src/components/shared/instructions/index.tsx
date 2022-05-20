import React from 'react'
import styles from './Instructions.module.scss'

const Instructions = ({}: any) => {
  return (
    <div className={styles.instructions}>
      <h2>Level 1 Requirements</h2>
      <ol>
        <li>
          Show a button or a link call to action (CTA) to schedule a new
          timeslot.
        </li>
        <li>
          Clicking on that CTA should open a form where you can `save` the
          timeslot details (i.e. `schedule`` the timeslot).
        </li>
        <li>
          Display the timeslots that have been scheduled, sorted in an intuitive
          way. A good looking list view is just fine.
        </li>
      </ol>
      <h2>Level 2 Requirements</h2>

      <ol>
        <li>All Level 1 requirements</li>
        <li>
          Include a mechanism to cancel a timeslot with an accompanying
          `canceled` state.
        </li>
        <li>Include a mechanism to update a timeslot that was scheduled.</li>
        <li>
          After completing these initial requirements, write at least 3 tests
          for the core functionality. While we want to be mindful of the time it
          takes to complete the meat of the challenge, we strongly value
          testable code. If time is a constraint, the bare minimum to satisfy
          this requirement is a clear test plan including what types of tests
          you would use and why for core functionality that shows us that you
          share this value and know how to write tests in a frontend ecosystem.
        </li>
      </ol>
      <h2>Level 3 Requirements</h2>

      <ol>
        <li>
          All Level 1 requirements, but instead of a list view, display the
          timeslots that have been scheduled in a calendar day view to visualize
          the start and end of the timeslots for a given day. Consider how it
          looks if timeslots are scheduled to be at the same time, or otherwise
          overlapping. We want to see how you would tackle the technical
          challenges of displaying the timeslots, not how other libraries have
          solved this problem, so please don`t pull in other libraries to do the
          heavy lifting. 😁
        </li>
        <li>
          After completing these initial requirements, write at least 3 tests
          for the core functionality. While we want to be mindful of the time it
          takes to complete the meat of the challenge, we strongly value
          testable code. If time is a constraint, the bare minimum to satisfy
          this requirement is a clear test plan including what types of tests
          you would use and why for core functionality that shows us that you
          share this value and know how to write tests in a frontend ecosystem.
        </li>
      </ol>
    </div>
  )
}

export default Instructions
