import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Designed and coded by <a href="https://giuliafarina.com/">Giulia Farina</a>
    </div>
  </Container>
)

export default Footer
