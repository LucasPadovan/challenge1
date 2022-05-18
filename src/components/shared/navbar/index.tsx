import React from 'react'
import Link from 'next/Link'
import { LINKS } from './constants'

import styles from './Navbar.module.scss'

const NavBar = ({}: any) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {LINKS.map(({ href, label }: { href: string; label: string }) => (
          <li className={styles.navbarItem} key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
