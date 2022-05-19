import React from 'react'
import styles from './sidenav.module.scss'
import { Link } from 'react-router-dom'

type SidenavProps = {

}

const Sidenav: React.FC<SidenavProps> = () => {
  return (
    <div className={styles.sidenav}>
        <Link to="/">Main</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cv">Cv</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Sidenav;
