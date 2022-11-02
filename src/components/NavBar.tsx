import React from 'react'
import {Link} from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={styles.navbarContainer}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certifications</Link>
    </div>
  )
}

export default NavBar