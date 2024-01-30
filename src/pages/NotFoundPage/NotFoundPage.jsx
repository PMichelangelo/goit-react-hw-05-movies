import { Link } from "react-router-dom";

import styles from './notFoundPage.module.css'


const NotFoundPage = () => {
  return (
    <div>
      <h2>This page is not found! Try something else!</h2>
      <Link to='/'>To Home page</Link>
    </div>
  )
}

export default NotFoundPage
