import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div></div>
      <p>Sign up for my <a href="https://mailchi.mp/3ea47faf06e0/h1rtvyb3sz">Newsletter </a></p>
      <p className={styles.reference}>Designed and coded by <a href="https://giuliafarina.com/">Giulia Farina</a></p>
    </div>
  </Container>
)

export default Footer
