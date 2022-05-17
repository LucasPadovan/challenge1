import React from 'react'
import Link from 'next/Link'
import { LINKS } from './constants'

import styles from './Navbar.module.css'

const NavBar = ({}: any) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {LINKS.map(({ href, label }: { href: string; label: string }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
