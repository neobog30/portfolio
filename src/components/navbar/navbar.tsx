import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.scss"

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>
            
        </div>
      <ul>
          <li>
              <Link to="/">
                  Home
              </Link>
          </li>
          <li>
              <Link to="/projects">
                  Projects
              </Link>
          </li>
          <li>
              <Link to="/cv">
                  Cv
              </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
