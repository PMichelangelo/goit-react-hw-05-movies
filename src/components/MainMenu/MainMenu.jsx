import { NavLink } from 'react-router-dom'

import styles from './main-menu.module.css'

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink to='/' className={styles.navLink}>Home</NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink to="/movies" className={styles.navLink}>Movies</NavLink>
      </li>
    </ul>
  )
}

export default MainMenu
